import { Component, OnInit, ViewChild } from "@angular/core";
import { HomeService } from "src/app/services/home.service";
import {
  Banner,
  HotTag,
  SongSheet,
  Singer
} from "src/app/services/data-types/common.types";
import { NzCarouselComponent } from "ng-zorro-antd";
import { SingerService } from 'src/app/services/singer.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banners: Banner[];
  hotTags: HotTag[];
  songSheetList: SongSheet[];
  singers: Singer[];

  @ViewChild(NzCarouselComponent, { static: true })
  private nzCarousel: NzCarouselComponent;

  constructor(private homeService: HomeService,
    private singerService: SingerService) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalizedSheetList();
    this.getEnterSinger();
  }

  private getBanners() {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  private getHotTags() {
    this.homeService.getHotTags().subscribe(tags => {
      this.hotTags = tags;
    });
  }

  private getPersonalizedSheetList() {
    this.homeService.getPersonalSheetlist().subscribe(sheets => {
      this.songSheetList = sheets;
    });
  }

  private getEnterSinger() {
    this.singerService.getEnterSinger().subscribe(singers => {
      // this.singers = singers;
    });
  }

  ngOnInit() {}

  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: "pre" | "next") {
    this.nzCarousel[type]();
  }
}
