import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/services/home.service";
import { Banner } from "src/app/services/data-types/common.types";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banners: Banner[];
  constructor(private homeService: HomeService) {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  ngOnInit() {}

  onBeforeChange({to}) {
    this.carouselActiveIndex = to;

  }
}
