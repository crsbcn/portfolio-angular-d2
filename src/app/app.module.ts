import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooternavComponent } from './components/footernav/footernav.component';
import { ResumepageComponent } from './components/resumepage/resumepage.component';
import { AboutmepageComponent } from './components/aboutmepage/aboutmepage.component';
import { WorksamplepageComponent } from './components/worksamplepage/worksamplepage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooternavComponent,
    ResumepageComponent,
    AboutmepageComponent,
    WorksamplepageComponent,
    ContactpageComponent,
    HomescreenComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
