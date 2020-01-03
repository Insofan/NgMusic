import { NgModule } from '@angular/core'
import { PlayerComponent } from './player.component'
import { SliderModule } from '../slider/slider.module'

@NgModule({
    declarations: [PlayerComponent],
    imports: [
        SliderModule
    ],
    exports: [PlayerComponent]
})
export class PlayerModule {}
