import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { API_CONFIG } from './services.module'
import { Observable } from 'rxjs'
import { SongListSheet } from './data-types/common.types'
import { map } from 'rxjs/internal/operators'

@Injectable({
    providedIn: 'root'
})
export class SheetService {
    constructor(
        private http: HttpClient,
        @Inject(API_CONFIG) private uri: string
    ) {}

    getSongSheetDetail(id: number): Observable<SongListSheet> {
        const params = new HttpParams().set('id', id.toString())
        return this.http
            .get(this.uri + 'playlist/detail', { params })
            .pipe(map((res: { playlist: SongListSheet }) => res.playlist))
    }
}
