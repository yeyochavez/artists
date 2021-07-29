import { Song } from "./song.model";

export class Album {
    name: string;
    year: number;
    songs?: Song[];
}