interface ITache {
    intitule: string;
    date_creation: Date;
    date_fin: Date;
    description: string;
    priority: number;
    is_terminate: boolean;
    color: string;
}

export class Tache implements ITache {
    id: number;
    intitule: string;
    date_creation: Date;
    date_fin: Date;
    description: string;
    priority: number;
    is_terminate: boolean;
    color: string;

    constructor(
        id: number,
        intitule: string,
        date_creation: Date,
        date_fin: Date,
        description: string,
        priority: number,
        is_terminate: boolean,
        color: string,
    ) {
        this.id = id;
        this.intitule = intitule;
        this.date_creation = date_creation;
        this.date_fin = date_fin;
        this.description = description;
        this.priority = priority;
        this.is_terminate = is_terminate;
        this.color = color;
    }

    /**
     * Ajoute une couleur à la tâche en fonction de sa priorité
     * @param priority
     */
    public static colorToPriority(priority: Priority): string {
        switch (priority) {
            case Priority.BASE:
                return '#38bdf8';
            case Priority.MEDIUM:
                return '#fbbf24';
            case Priority.HIGH:
                return '#dc2626';
        }
    }

    public static fromTache(tache: Tache): Tache {
        return new Tache(
            tache.id,
            tache.intitule,
            tache.date_creation,
            tache.date_fin,
            tache.description,
            tache.priority,
            tache.is_terminate,
            tache.color,
        );
    }
}

export enum Priority {
    BASE = 1,
    MEDIUM,
    HIGH,
}
