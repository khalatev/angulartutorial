import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "lifecycle-hook",component:LifecycleHookComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
