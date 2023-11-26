import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../shared/services/movies.service';
import { movies } from '../shared/interfaces/movies.interface';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  routeSub: any;
  movie?: movies;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if(params['id'])
        this.getMovieId(params['id']);
      else
        this.router.navigateByUrl('/');
    });
  }

  async getMovieId(id: number){
    this.moviesService.getMovieId(id)
    .subscribe((data: any) => {
      this.movie = data[0]
      console.log(this.movie)
    });
  }
}
