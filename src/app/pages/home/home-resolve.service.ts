import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, forkJoin } from "rxjs";
import { first } from "rxjs/internal/operators";
import {
  Banner,
  HotTag,
  SongSheet,
  Singer
} from "src/app/services/data-types/common.types";
import { HomeService } from "src/app/services/home.service";
import { SingerService } from "src/app/services/singer.service";

type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable({
  providedIn: "root"
})
export class HomeResolveService implements Resolve<HomeDataType> {
  constructor(
    private homeServer: HomeService,
    private singerServer: SingerService
  ) {}

  resolve(): Observable<HomeDataType> {
    return forkJoin([
      this.homeServer.getBanners(),
      this.homeServer.getHotTags(),
      this.homeServer.getPersonalSheetlist(),
      this.singerServer.getEnterSinger()
    ]).pipe(first());
  }
}
