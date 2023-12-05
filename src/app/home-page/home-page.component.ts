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
  moviesCache: movies[];

  form: FormGroup;

  showFilters: boolean = false;

  showOrder: boolean = false;

  optionsOrder = [
    {
      value: 'newRelease',
      label: 'Lançamento (novo)'
    },
    {
      value: 'oldRelease',
      label: 'Lançamento (antigo)'
    },
    {
      value: 'titleAZ',
      label: 'Título (A-Z)'
    },
    {
      value: 'titleZA',
      label: 'Título (Z-A)'
    },
  ]

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) {

    this.form = new FormGroup({
      name: new FormControl(),
      order: new FormControl()
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
        this.movies = this.moviesCache.filter(obj => obj.name.toLowerCase().includes(value.toLowerCase()))
        console.log( this.movies)
      })
  }

  search(){
    let order = this.form.controls['order'].value;
    this.resetName();
    switch(order){
      case 'newRelease': {
        this.movies = this.moviesCache.sort((a, b) => {
          return b.ano - a.ano;
        });
        break;
      }

      case 'oldRelease': {
        this.movies = this.moviesCache.sort((a, b) => {
          return a.ano - b.ano;
        });
        break;
      }

      case 'titleAZ': {
        this.movies = this.moviesCache.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
      }

      case 'titleZA': {
        this.movies = this.moviesCache.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        break;
      }

      case 'null': {
        this.getMovies();
        break;
      }
    }




  }

  resetName(){
    this.form.controls['name'].setValue('');
  }

  getMovies() {
    this.moviesService.getMovies()
    .subscribe((data: any) => {
      this.movies = data;
      this.moviesCache = this.movies;
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
    this.form.controls['order'].setValue(null);
  }
}
