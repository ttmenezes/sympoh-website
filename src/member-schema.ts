export interface Member {
    name:string;
    year: number | undefined;
}

export interface Office {
    title:string;
    term: number;
    holder:Member;
}