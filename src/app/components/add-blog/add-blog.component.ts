import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog} from '../../models/Blog';
import { FlashMessagesService} from 'angular2-flash-messages';
import { BlogService } from '../../services/blog.service';
// import { InMemoryService } from '../../services/in-memory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

    public  blog: Blog = {
      blogId : '',
     blogTopic: '', blogDescription : '' , blogHost : ''
     };



  @ViewChild('blogForm') form: any;
  constructor(private flashMessage: FlashMessagesService,
              private blogService: BlogService,
              // private inMemoryService: InMemoryDataService,
              private router: Router) {

              }

  ngOnInit() {

  }

  onSubmit({value, valid}: {value: Blog, valid: boolean}) {
     if (!valid) {
        // Show error
        this.flashMessage.show('Please fill out the form correctly!!', {
          cssClass: 'alert-danger', timeout: 4000
        });
     } else {
               // Add new Client
                this.blogService.newBlog(value).subscribe( resp => {

                  this.blogService.blogs.push(resp) ;

               }
             );
               // Show Message
               this.flashMessage.show('New Blog added!!', {
                cssClass: 'alert-success', timeout: 4000
              });

              // Redirect to dashboard
              this.router.navigate(['/']);
     }
  }

}
