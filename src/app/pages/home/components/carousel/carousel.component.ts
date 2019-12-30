import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.less"],
  // 变更检测策略
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  @Output() changeSlide = new EventEmitter<"pre" | "next">();
  @Input() activeIndex = 0;
  @ViewChild("dot", { static: true }) dotRef: TemplateRef<any>;

  constructor() {}
  ngOnInit() {}

  onChangeSlide(type: "next" | "pre") {
    this.changeSlide.emit(type);
  }
}
