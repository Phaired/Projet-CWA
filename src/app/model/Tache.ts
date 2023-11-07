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
}

export enum Priority {
    BASE = 1,
    MEDIUM,
    HIGH,
}
