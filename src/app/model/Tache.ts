interface ITache {
    intitule: string;
    date_creation: Date;
    date_fin: Date;
    description: string;
    priority: number;
    is_terminate: boolean;
}

export class Tache {
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
                return '#00d4ff';
            case Priority.MEDIUM:
                return '#ffa200';
            case Priority.HIGH:
                return '#ff0000';
        }
    }
}

export enum Priority {
    BASE = 1,
    MEDIUM,
    HIGH,
}
