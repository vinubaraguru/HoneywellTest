import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  starwarMoviesList: any;
  movieImage:'https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg'

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {

    this.movieService.getListofStarwarMovies()
      .subscribe(results => {
        this.starwarMoviesList = results;
        console.log(this.starwarMoviesList);
      })
  }

  viewStarwarmovieDetail(starwarmovie){
    this.router.navigate(['/movie'],
      {
        queryParams:
          { name:starwarmovie.title }
      });
    console.log('cominghereeeeeeeeeeeeeeee')
  }

  logout(){
     this.router.navigate(['/'])
  }
}
