import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'blog/add', component: AddBlogComponent},
  {path: 'blog/edit/:id', component: EditBlogComponent},
  {path: 'blog/:id', component: BlogDetailsComponent},
  {path: '**' , component: NotFoundComponent}
];
@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
