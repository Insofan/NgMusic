import { Injectable, Inject } from "@angular/core";
import { API_CONFIG } from "./services.module";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Singer } from "./data-types/common.types";
import { map } from "rxjs/internal/operators";
import * as queryString from "query-string";


type SingerParams = {
  offset: number;
  limit: number;
  cat?: string;
};

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: "5001"
};

@Injectable({
  providedIn: "root"
})
export class SingerService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string
  ) {}

  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({
      fromString: queryString.stringify(args)
    });
    return this.http
      .get(this.uri + "artist/list")
      .pipe(map((res: { artists: Singer[] }) => res.artists));
  }
}
