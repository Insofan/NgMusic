import { Component, OnInit, ViewChild } from "@angular/core";
import { HomeService } from "src/app/services/home.service";
import {
  Banner,
  HotTag,
  SongSheet
} from "src/app/services/data-types/common.types";
import { NzCarouselComponent } from "ng-zorro-antd";

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

  @ViewChild(NzCarouselComponent, { static: true })
  private nzCarousel: NzCarouselComponent;

  constructor(private homeService: HomeService) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalizedSheetList();
  }

  private getBanners() {
    this.homeService.getBanners().subscribe(banners => {
      console.log(banners);
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

  ngOnInit() {}

  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: "pre" | "next") {
    this.nzCarousel[type]();
  }
}
