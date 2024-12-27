import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ProjectsComponent } from './projects/projects.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HttpRequestComponent,
    LifecycleHookComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    QuestionComponent,
    ProjectsComponent,
    TutorialComponent,
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
