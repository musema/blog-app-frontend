import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/Blog';
// import { request } from 'http';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.blogService.getBlogById(this.route.snapshot.paramMap.get('id')).subscribe(
      resp => {
         this.blog = resp;
         console.log(this.blog);
      }

    );
  }

}
