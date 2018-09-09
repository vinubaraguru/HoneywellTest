import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  starwarMovieDetail: any;
  getStarwarMovieDetailErrorMessage;
  starwarMovieDetailError;
  isOnline: boolean = navigator.onLine

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.queryParamMap.get('id')
    if (this.isOnline) {
    this.movieService.getMovieDetails(id)
      .subscribe(result => {
        this.starwarMovieDetail = result;
      },
      error => {
        this.getStarwarMovieDetailErrorMessage = 'Something went wrong. Please Try again'
        this.starwarMovieDetailError = true;
      });
    }else{
      this.getStarwarMovieDetailErrorMessage = 'No Internet connection. Please enable and try again'
      this.starwarMovieDetailError = true;
    }
  }

  logout() {
    localStorage.removeItem('logindata');
    this.router.navigate(['/'])
  }

}
