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
        window.localStorage.getItem(this.key) === undefined
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
        const taches: Array<Tache> = this.getAllTaches();
        const index: number = taches.indexOf(tache);
        taches.splice(index, 1);
        window.localStorage.setItem(
            this.key,
            JSON.stringify({
                tasks: taches,
                other: {},
            } as IExportTaches),
        );
    }

    public updateTache(previousTache: Tache, newTache: Tache): void {
        const taches: Array<Tache> = this.getAllTaches();
        const index: number = taches.indexOf(previousTache);
        taches[index] = newTache;
        window.localStorage.setItem(
            this.key,
            JSON.stringify({
                tasks: taches,
                other: {},
            } as IExportTaches),
        );
    }
}
