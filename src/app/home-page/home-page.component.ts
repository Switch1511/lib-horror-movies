import { Component, OnInit } from '@angular/core';
import { movies } from '../shared/interfaces/movies.interface';
import { MoviesService } from '../shared/services/movies.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})

export class HomePageComponent implements OnInit {

  movies: movies[];

  form: FormGroup;

  showFilters: boolean = false;

  showOrder: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) {

    this.form = new FormGroup({
      name: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getMovies();

    this.form.get("name")?.valueChanges
      .pipe(
        map(value => value.trim()),
        debounceTime(200),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        if(value){
          this.movies = this.movies.filter(obj => obj.name.toLowerCase().includes(value.toLowerCase()))
        } else {
          this.getMovies();
        }
      })
  }

  getMovies() {
    this.moviesService.getMovies()
    .subscribe((data: any) => {
      this.movies = data;

    });
  }

  filterMovies(name: string) {
    this.moviesService.getMoviesByName(name)
    .subscribe((data: any) => {
      this.movies = data;
    });
  }

  routerMovie(id: number) {
    this.router.navigateByUrl('movies/' + id);
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  toggleOrder() {
    this.showOrder = !this.showOrder;
  }
}
