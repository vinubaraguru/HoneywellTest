import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  starwarMovieDetail: any;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.getMovieDetails()
      .subscribe(result => {
        this.starwarMovieDetail = result;
      })
  }

  logout() {
    this.router.navigate(['/'])
  }

}
