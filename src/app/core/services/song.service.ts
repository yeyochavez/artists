import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Song } from "../models/song.model";

@Injectable({
    providedIn: 'root'
})
export class SongService {

    private song: Subject<Song>;

    constructor() {
        this.song = new BehaviorSubject<Song>(new Song);
    }

    get getSong$() {
        return this.song.asObservable();
    }

    changeSong(song: Song) {
        this.song.next(song);
    }
}