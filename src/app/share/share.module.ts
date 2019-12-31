import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    UiModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    UiModule,
  ]
})
export class ShareModule { }
