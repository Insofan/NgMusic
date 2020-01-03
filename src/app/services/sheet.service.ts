import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { API_CONFIG } from './services.module'
import { Observable } from 'rxjs'
import { SongListSheet, Song } from './data-types/common.types'
import { map, pluck, switchMap } from 'rxjs/internal/operators'
import { SongService } from './song.service'

@Injectable({
    providedIn: 'root'
})
export class SheetService {
    constructor(
        private http: HttpClient,
        @Inject(API_CONFIG) private uri: string,
        private songServer: SongService
    ) {}

    getSongSheetDetail(id: number): Observable<SongListSheet> {
        const params = new HttpParams().set('id', id.toString())
        return this.http
            .get(this.uri + 'playlist/detail', { params })
            .pipe(map((res: { playlist: SongListSheet }) => res.playlist))
    }

    playSheet(id: number): Observable<Song[]> {
        // pluck: 取出一个数值
        return this.getSongSheetDetail(id).pipe(
            pluck('tracks'),
            switchMap((tracks:Song | Song[]) => this.songServer.getSongList(tracks))
        )
    }
}
