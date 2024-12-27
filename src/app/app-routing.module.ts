import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { AboutComponent } from './about/about.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ProjectsComponent } from './projects/projects.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: "lifecycle-hook",component:LifecycleHookComponent},
  {path:"http-request",component:HttpRequestComponent},
  {path:'about-us',component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"question",component:QuestionComponent},
  {path:"project-idea",component:ProjectsComponent},
  {path:"tutorial",component:TutorialComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
