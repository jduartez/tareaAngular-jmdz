import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitcapPipe } from './pipes/initcap.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { FormatrutPipe } from './pipes/formatrut.pipe';



@NgModule({
  declarations: [
    InitcapPipe,
    ResaltadoDirective,
    FormatrutPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[InitcapPipe, ResaltadoDirective, FormatrutPipe]
})
export class SharedModule { }
