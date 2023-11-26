import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  API_URL = environment.url_api;

  getMovies(){
    return this.http.get<any>(this.API_URL + "movies");
  }

  getMovieId(id: any){
    return this.http.get<any>(this.API_URL + "movies?id=" + id);
  }

  getMoviesByName(name: string){
    return this.http.get<any>(this.API_URL + "movies?name=" + name);
  }
}
