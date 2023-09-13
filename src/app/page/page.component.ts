import { Component, OnInit } from '@angular/core';
import { movies } from '../shared/interfaces/movies.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  movies?: movies[];

  constructor() { }

  ngOnInit(): void {
    this.movies = [
      {
        id: 0,
        name: 'Filme 0',
        imgLink: 'https://canvas.tubitv.com/08ea6038-ad60-4a74-84dd-d1ce53cdade8/-9llDV?w=408&h=583',
        ano: 2018
    },
      {
        id: 1,
        name: 'Filme 1',
        imgLink: 'https://canvas.tubitv.com/08ea6038-ad60-4a74-84dd-d1ce53cdade8/-9llDV?w=408&h=583',
        ano: 2018
      },
      {
        id: 2,
        name: 'Filme 2',
        imgLink: 'https://canvas.tubitv.com/08ea6038-ad60-4a74-84dd-d1ce53cdade8/-9llDV?w=408&h=583',
        ano: 2018
      },
      {
        id: 3,
        name: 'Filme 3',
        imgLink: 'https://canvas.tubitv.com/08ea6038-ad60-4a74-84dd-d1ce53cdade8/-9llDV?w=408&h=583',
        ano: 2018
      },
      {
        id: 4,
        name: 'Filme 4',
        imgLink: 'https://canvas.tubitv.com/08ea6038-ad60-4a74-84dd-d1ce53cdade8/-9llDV?w=408&h=583',
        ano: 2018
      },
      {
        id: 5,
        name: 'Filme 5',
        imgLink: 'https://canvas.tubitv.com/08ea6038-ad60-4a74-84dd-d1ce53cdade8/-9llDV?w=408&h=583',
        ano: 2018
      }
    ]
  }
}
