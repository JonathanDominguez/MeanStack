import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BlogsService } from '../shared/blogs.service'
import { Blogs } from '../shared/blogs.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [BlogsService],
  encapsulation: ViewEncapsulation.None
})
export class BlogsComponent implements OnInit {

  constructor(public blogsService: BlogsService) { }

  ngOnInit(){
    this.resetForm();
    this.refreshBlogList();
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
    }
    this.blogsService.selectedBlogs = {
      _id:"",
      title:"",
      date:null,
      content:""
    }
  }

  onSubmit(form: NgForm){
    if(form.value._id ==""){
      this.blogsService.postBlogs(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.refreshBlogList();
      });
      alert("Blog has been sent!");
    }
    else{
      this.blogsService.putBlog(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.refreshBlogList();
      });
      alert("Updated Successfully");
    }
  }

  refreshBlogList(){
    // what does the .subscribe do
    this.blogsService.getBlogsList().subscribe((res)=>
    {
      this.blogsService.blogs = res as Blogs[];
    });
  }

  onEdit(blg:Blogs){
    this.blogsService.selectedBlogs = blg;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.blogsService.deleteBlog(_id).subscribe((res) => {
        this.refreshBlogList();
        this.resetForm(form);
      });
    }
  }

}
