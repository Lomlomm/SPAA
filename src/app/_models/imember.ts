import { IPhoto } from "./iphoto";

    export interface IMember {
    id: number; 
    UserName: string;
    photoUrl: string;
    age: number;
    KnownAs: string;
    Created: Date;
    LastActive: Date;
    Introduction: string;
    LookingFor: string;
    Interests: string;
    City: string;
    Country: string;
    Photos: IPhoto[];
}


