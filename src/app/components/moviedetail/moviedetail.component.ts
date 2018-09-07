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

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.queryParamMap.get('id')
    this.movieService.getMovieDetails(id)
      .subscribe(result => {
        this.starwarMovieDetail = result;
      })
  }

  logout() {
    localStorage.removeItem('logindata');
    this.router.navigate(['/'])
  }

}
