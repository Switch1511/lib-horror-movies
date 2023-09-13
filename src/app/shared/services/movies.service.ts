import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  api = "http://localhost:3000/movies";

  getMovies(){
    return this.http.get<any>(this.api);
  }
}
