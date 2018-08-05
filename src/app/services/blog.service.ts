import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { InMemoryService } from '../services/in-memory.service';


import { Blog } from '../models/Blog';
import { ChangeDetectorStatus } from '../../../node_modules/@angular/core/src/change_detection/constants';
import { pipe } from '../../../node_modules/rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class BlogService {

  private blogsUrl = 'https://6faq7k5jlh.execute-api.us-east-1.amazonaws.com/dev/blogs';

 blogs = [];
 blog: Observable<Blog>;
constructor(private http: Http) {

}
getBlogs(): Observable<Blog[]> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  console.log('callig getBlogs...');
   return this.http.get(this.blogsUrl, { headers: headers } as RequestOptionsArgs).pipe(
    map(resp =>
       resp.json() as Blog[]
    )
  );
}
getBlogById(blogid): Observable<Blog> {
  const url = `${this.blogsUrl}/blog/${blogid}`;

  let headers = new Headers({ 'Content-Type': 'application/json' });

  return this.http.get(url, { headers: headers } as RequestOptionsArgs).pipe(
    map(resp =>
       resp.json() as Blog
    )
  );
}

newBlog(blog: Blog): Observable<Blog> {
  console.log("blog is going to be added!!");
  console.log(blog);

let headers = new Headers({ 'Content-Type': 'application/json' });

  return this.http
      .post(this.blogsUrl, JSON.stringify(blog), { headers: headers } as RequestOptionsArgs).pipe(map(resp => resp.json() as Blog));

 }
}
