import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/Blog';
// import { removeSummaryDuplicates } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
 blogs: any[];

 constructor(private blogService: BlogService) { }

  ngOnInit() {

    this.blogService.getBlogs().subscribe(
      resp => {
         this.blogService.blogs = resp;
         this.blogs = this.blogService.blogs;
        // console.log(this.blogService.blogs)
      }
    );
   }
}
