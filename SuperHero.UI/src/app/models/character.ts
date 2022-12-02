import { Time } from "@angular/common";

export class Character {
    id?: number;
    name?: string = "";
    firstname?: string = "";
    lastname?: string = "";
    place?: string = "";
    birthdate?: Date;
    wakeuptime?: Time;
}