import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSanitizerPipe } from './img-sanitizer.pipe';





@NgModule({
  declarations: [
    ImgSanitizerPipe
  ],
  exports: [ImgSanitizerPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
