import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieService } from './service/movie.service';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { Authgaurd } from './authgaurd.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MoviedetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [Authgaurd] },
      { path: 'movie', component: MoviedetailComponent, canActivate: [Authgaurd] }
    ])
  ],
  providers: [MovieService, Authgaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
