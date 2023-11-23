import { IPhoto } from "./iphoto";

    export interface IMember {
    id: number; 
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: IPhoto[];
}


