import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// toPromice is alreayd included in observable
import { Blogs } from './blogs.model'

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  selectedBlogs: Blogs;
  blogs: Blogs[];

  readonly baseURL = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) { }

  postBlogs(blg: Blogs) {
    return this.http.post(this.baseURL, blg);
  }

  getBlogsList() {
    return this.http.get(this.baseURL);
  }

  putBlog(blg : Blogs){
    return this.http.put(this.baseURL + `/${blg._id}` , blg);
  }

  deleteBlog(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
