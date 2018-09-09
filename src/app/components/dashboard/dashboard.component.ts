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
  getStarwarMovieErrorMessage;
  starwarMovieError;
  isOnline: boolean = navigator.onLine;
  loadingGif: '../assets/icon/loader1_gif.gif'
  movieImage:'https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg'

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.isOnline = navigator.onLine;
    if (this.isOnline) {
    this.movieService.getListofStarwarMovies()
      .subscribe(results => {
        this.filteredMoviesList = this.starwarMoviesList = results;
      },
      error => {
        this.getStarwarMovieErrorMessage = 'Something went wrong. Please Try again'
        this.starwarMovieError = true;
      });
    }else{
      this.getStarwarMovieErrorMessage = 'No Internet connection. Please enable and try again'
      this.starwarMovieError = true;
    }
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

  sortMovieList(){
    this.filteredMoviesList.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      else return 0;
    });
  }

  removeMovie(index){
    let result = confirm("Are sure you want Delete?");
    if (result){
      this.starwarMoviesList.splice(index, 1)
    }
  }

  logout(){
    localStorage.removeItem('logindata');
    this.router.navigate(['/'])
  }
}
