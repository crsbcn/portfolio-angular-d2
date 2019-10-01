import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorksamplepageComponent} from './components/worksamplepage/worksamplepage.component';
import {HomescreenComponent} from './components/homescreen/homescreen.component';
import {BlogComponent} from './components/blog/blog.component';
import {AboutmepageComponent} from './components/aboutmepage/aboutmepage.component';
import {ResumepageComponent} from './components/resumepage/resumepage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';


const routes: Routes = [
  {
    component: HomescreenComponent,
    path: ''
  },
  {
  component: WorksamplepageComponent,
  path: 'works'
  },
  {
    component: BlogComponent,
    path: 'blog'
  },
  {
    component: AboutmepageComponent,
    path: 'about'
  },
  {
    component: ResumepageComponent,
    path: 'resume'
  },
  {
    component: ContactpageComponent,
    path: 'contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
