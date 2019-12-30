import { Component, OnInit, TemplateRef, ViewChild, Input } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.less"]
})
export class CarouselComponent implements OnInit {
  @Input() activeIndex: boolean;
  @ViewChild("dot", { static: true }) dotRef: TemplateRef<any>;

  constructor() {}
  ngOnInit() {}
}
