import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeadlessButtonModule } from "@snowcodes/headless-components/button";

import { ButtonComponent } from "./button.component";

const routes: Routes = [{
  path: '',
  component: ButtonComponent
}]

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    HeadlessButtonModule,
  ]
})
export class ButtonModule { }