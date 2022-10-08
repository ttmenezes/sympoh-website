export interface PersonRecord {
    name:string;
    affiliation:string | undefined;
    location : string | undefined;
}

export interface VideoRecord {
    show:EventRecord;
    link:string;
    order:number | undefined;
    name:string;
}

export enum EventType {
    SHOW,
    JAM,
    MISC,
}



export interface EventRecord {
    title: string;
    date : Date;
    type : EventType;
}

interface Date {
    year : number;
    month : number | undefined;
    day: number | undefined;
}

export interface WinnerRecord {
    category: string;
    winner: PersonRecord;
    jam : EventRecord;
    prize : number;
}

export enum Role {
    MC,
    JUDGE,
    DJ,
}
export interface StaffRecord {
    event:EventRecord;
    role:Role;
    person:PersonRecord
}

