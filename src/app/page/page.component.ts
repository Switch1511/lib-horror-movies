import { Component, OnInit } from '@angular/core';
import { movies } from '../shared/interfaces/movies.interface';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  movies?: movies[];

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
}
