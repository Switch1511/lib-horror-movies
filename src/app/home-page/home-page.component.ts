import { Component, OnInit } from '@angular/core';
import { movies } from '../shared/interfaces/movies.interface';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  movies?: movies[];

  movie?: movies[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.moviesService.getMovies()
    .subscribe((data: any) => {
      this.movies = data
    });
  }

  getMovieId(id: number){
    this.moviesService.getMovieId(id)
    .subscribe((data: any) => {
      this.movie = data
      console.log(this.movie)
    });
  }
}
