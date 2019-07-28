import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { environment } from 'src/environments/environment.prod';
import { MovieDetailsPage } from '../modal/movie-details/movie-details.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  movies: any[] = [];
  posterBasePath: string = environment.api.poster;
  apiKeyParam: string = environment.api.keyParams;
  movieDetailsURL: string = environment.api.getMovieDetails;

  responseData: any;
  currentPage = 1;

  getImgPath: any = function (path: string) {
    return this.posterBasePath + path + this.apiKeyParam;
  };

  createArray: any = function (voteAvg) {
    return Array(Math.round(voteAvg / 2));
  };

  constructor(
    public movieService: MovieService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  async showMovieDetails(movie) {
    let loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    let movieDetails: any = {};
    this.movieService.getMovieDetail(movie.id).subscribe(
      res => {
        movieDetails.data = res;
        loading.dismiss();
        this.presentMovieModal(movieDetails);
      }
    );
    
  }

  async presentMovieModal(movieDetails) {
    const movieModal = await this.modalCtrl.create({
      component: MovieDetailsPage,
      componentProps: { movieDetails: movieDetails }
    });
    return await movieModal.present();
  }

  async getMovies() {
    let loading = null;
    if (this.currentPage < 2) {
      loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();
    }
    await this.movieService.getMovies(this.currentPage).subscribe(
      res => {
        ++this.currentPage;
        this.responseData = res;
        Array.prototype.push.apply(this.movies, res.results);
        if (loading) {
          loading.dismiss();
        }
      },
      err => {
        console.log(err);
        if (loading) {
          loading.dismiss();
        }
      }
    );
  }

  loadData(event) {
    setTimeout(() => {
      this.getMovies();
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.movies.length === this.responseData.total_results) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
