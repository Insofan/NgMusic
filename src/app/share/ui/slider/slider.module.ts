import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { HandleComponent } from './handle.component';
import { TrackComponent } from './track.component';



@NgModule({
  declarations: [SliderComponent, HandleComponent, TrackComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SliderComponent
  ]
})
export class SliderModule { }
