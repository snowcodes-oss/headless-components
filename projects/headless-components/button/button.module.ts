import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeadlessButtonComponent } from "./button.component";


@NgModule({
  declarations: [
    HeadlessButtonComponent,
  ],
  exports: [
    HeadlessButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class HeadlessButtonModule { }