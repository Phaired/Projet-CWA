import { Tache } from '../model/Tache';

export interface IExportTaches {
    tasks: Array<Tache>;
    other: object;
}

export class LocalStorageRepository {
    public static readonly ORDER_ASC: number = 1;
    public static readonly ORDER_DESC: number = -1;

    private readonly key: string;

    constructor() {
        this.key = 'CADMIUM_TASKS';
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

    public getAllTaches(): Array<Tache> {
        return (
            JSON.parse(
                window.localStorage.getItem(this.key) as string,
            ) as IExportTaches
        ).tasks;
    }

    public getLastId(): number {
        const taches: Array<Tache> = this.getAllTaches();
        return taches.length > 0 ? taches[taches.length - 1].id : 0;
    }

    public getAllTachesByDateCreation(order: number): Array<Tache> {
        const taches: Array<Tache> = this.getAllTaches();
        return taches.sort((a: Tache, b: Tache) => {
            return (
                (a.date_creation.getTime() - b.date_creation.getTime()) * order
            );
        });
    }

    public getAllTachesByPriority(order: number): Array<Tache> {
        const taches: Array<Tache> = this.getAllTaches();
        return taches.sort((a: Tache, b: Tache) => {
            return (a.priority - b.priority) * order;
        });
    }

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
            console.log('Task not found in the array.');
        }
    }

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

    public getTacheById(id: number): Tache {
        const taches: Array<Tache> = this.getAllTaches();
        return taches.find((tache: Tache) => tache.id === id) as Tache;
    }

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

    public updateTacheById(id: number, newTache: Tache): void {
        const previousTache: Tache = this.getTacheById(id);
        this.updateTache(previousTache, newTache);
    }
}
