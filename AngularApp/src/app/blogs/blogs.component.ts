import { Component, OnInit } from '@angular/core';

import { BlogsService } from '../shared/blogs.service'
import { Blogs } from '../shared/blogs.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [BlogsService]
})
export class BlogsComponent implements OnInit {

  constructor(public blogsService: BlogsService) { }

  ngOnInit(){
    this.resetForm();
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
    this.blogsService.postBlogs(form.value).subscribe((res) =>{
      this.resetForm(form);
    });
    alert("Blog has been sent!");
  }
}
