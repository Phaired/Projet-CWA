interface ITache {
    intitule: string;
    date_creation: Date;
    date_fin: Date;
    description: string;
    priority: number;
    is_terminate: boolean;
}

export class Tache {
    intitule: string;
    date_creation: Date;
    date_fin: Date;
    description: string;
    priority: number;
    is_terminate: boolean;

    constructor(
        intitule: string,
        date_creation: Date,
        date_fin: Date,
        description: string,
        priority: number,
        is_terminate: boolean,
    ) {
        this.intitule = intitule;
        this.date_creation = date_creation;
        this.date_fin = date_fin;
        this.description = description;
        this.priority = priority;
        this.is_terminate = is_terminate;
    }

    public static fromJson(json: ITache): Tache {
        return new Tache(
            json['intitule'],
            json['date_creation'],
            json['date_fin'],
            json['description'],
            json['priority'],
            json['is_terminate'],
        );
    }
}
