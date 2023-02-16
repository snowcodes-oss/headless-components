import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsComponent } from "./components.component";

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [{
    path: 'button',
    loadChildren: () => import('./button/button.module').then(({ ButtonModule }) => ButtonModule)
  }]
}]

@NgModule({
  declarations: [
    ComponentsComponent,
  ],
  exports: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ComponentsModule { }