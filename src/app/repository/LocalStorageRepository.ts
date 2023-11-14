import { Tache } from '../model/Tache';

// Interface pour exporter les tâches et des données supplémentaires
export interface IExportTaches {
    tasks: Array<Tache>;
    other: object;
}

// Classe LocalStorageRepository pour gérer les tâches dans le stockage local
export class LocalStorageRepository {
    // Constantes pour définir l'ordre de tri
    public static readonly ORDER_ASC: number = 1;
    public static readonly ORDER_DESC: number = -1;

    // Clé pour stocker les tâches dans le stockage local
    private readonly key: string;

    // Le constructeur initialise la clé et configure le stockage local si nécessaire
    constructor() {
        this.key = 'CADMIUM_TASKS';
        // Vérifie si la clé est présente dans le stockage local, initialise si ce n'est pas le cas
        window.localStorage.getItem(this.key) === null
            ? window.localStorage.setItem(
                  this.key,
                  JSON.stringify({
                      tasks: [],
                      other: {},
                  } as IExportTaches),
              )
            : null;
    }

    // Méthode pour obtenir toutes les tâches du stockage local
    public getAllTaches(): Array<Tache> {
        return (
            JSON.parse(
                window.localStorage.getItem(this.key) as string,
            ) as IExportTaches
        ).tasks;
    }

    // Méthode pour obtenir le dernier ID utilisé pour une tâche
    public getLastId(): number {
        const taches: Array<Tache> = this.getAllTaches();
        return taches.length > 0 ? taches[taches.length - 1].id : 0;
    }

    /**
     * @deprecated
     * This methode is no longer supported.
     * <p> Use FilterComponent.orderBy(orderType, order) instead.
     * @param order
     */
    public getAllTachesByDateCreation(order: number): Array<Tache> {
        const taches: Array<Tache> = this.getAllTaches();
        return taches.sort((a: Tache, b: Tache) => {
            const dateA = new Date(a.date_fin);
            const dateB = new Date(b.date_fin);
            return (dateA.getTime() - dateB.getTime()) * order;
        });
    }

    /**
     * @deprecated
     * This methode is no longer supported.
     * <p> Use FilterComponent.orderBy(orderType, order) instead.
     * @param order
     */
    public getAllTachesByPriority(order: number): Array<Tache> {
        const taches: Array<Tache> = this.getAllTaches();
        return taches.sort((a: Tache, b: Tache) => {
            return (a.priority - b.priority) * order;
        });
    }

    // Méthode pour sauvegarder une tâche
    public saveTache(tache: Tache): void {
        const taches: Array<Tache> = this.getAllTaches();
        taches.push(tache);
        window.localStorage.setItem(
            this.key,
            JSON.stringify({
                tasks: taches,
                other: {},
            } as IExportTaches),
        );
    }

    // Méthode pour supprimer une tâche
    public deleteTache(tache: Tache): void {
        console.log(tache);
        const taches: Array<Tache> = this.getAllTaches();
        const index: number = taches.findIndex(
            (item: Tache) => item.id === tache.id,
        );

        console.log('array => ', taches);
        console.log(index);

        if (index !== -1) {
            taches.splice(index, 1);

            window.localStorage.setItem(
                this.key,
                JSON.stringify({
                    tasks: taches,
                    other: {},
                } as IExportTaches),
            );
        } else {
            console.log('Tâche non trouvée dans le tableau.');
        }
    }

    // Méthode pour supprimer toutes les tâches
    public deleteAllTaches(): void {
        const taches: Array<Tache> = this.getAllTaches();
        taches.splice(0, taches.length);
        window.localStorage.setItem(
            this.key,
            JSON.stringify({
                tasks: taches,
                other: {},
            } as IExportTaches),
        );
    }

    // Méthode pour obtenir une tâche par son ID
    public getTacheById(id: number): Tache {
        const taches: Array<Tache> = this.getAllTaches();
        return taches.find((tache: Tache) => tache.id === id) as Tache;
    }

    // Méthode pour mettre à jour une tâche
    public updateTache(previousTache: Tache, newTache: Tache): void {
        const taches: Array<Tache> = this.getAllTaches();
        const index: number = taches.findIndex(
            (tache: Tache) => tache.id == previousTache.id,
        );
        taches[index] = newTache;
        window.localStorage.setItem(
            this.key,
            JSON.stringify({
                tasks: taches,
                other: {},
            } as IExportTaches),
        );
    }

    // Méthode pour mettre à jour une tâche par son ID
    public updateTacheById(id: number, newTache: Tache): void {
        const previousTache: Tache = this.getTacheById(id);
        this.updateTache(previousTache, newTache);
    }
}
