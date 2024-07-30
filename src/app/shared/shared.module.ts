import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitcapPipe } from './pipes/initcap.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { FormatrutPipe } from './pipes/formatrut.pipe';
import { FontsizeDirective } from './directives/fontsize.directive';



@NgModule({
  declarations: [
    InitcapPipe,
    ResaltadoDirective,
    FormatrutPipe,
    FontsizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[InitcapPipe, ResaltadoDirective, FormatrutPipe,FontsizeDirective]
})
export class SharedModule { }
