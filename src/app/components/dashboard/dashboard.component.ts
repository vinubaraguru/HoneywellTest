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
  filteredMoviesList: any[];
  movieImage:'https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg'

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {

    this.movieService.getListofStarwarMovies()
      .subscribe(results => {
        this.filteredMoviesList = this.starwarMoviesList = results;
      })
  }

  fliter(query: string) {
    this.filteredMoviesList = (query) ?
      this.starwarMoviesList.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.starwarMoviesList;
  }

  viewStarwarmovieDetail(starwarmovie,i){
    this.router.navigate(['/movie'],
      {
        queryParams:
          { 
            name:starwarmovie.title,
            id:(i+1) 
          }
      });
  }

  logout(){
    localStorage.removeItem('logindata');
    this.router.navigate(['/'])
  }
}
