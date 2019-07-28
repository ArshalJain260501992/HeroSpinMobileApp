import { Component } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { MovieDetailsPage } from '../modal/movie-details/movie-details.page';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pickedMovie: any = {};

  constructor(public modalCtrl: ModalController, public movieService: MovieService, public loadingController: LoadingController) {
  }

  async pickARandomMovie() {
    let loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.movieService.getRandomMovie().subscribe(
      res => {
        this.pickedMovie.data = res;
        loading.dismiss();
      }
    );
    this.presentMovieModal(this.pickedMovie);
  }

  async presentMovieModal(movie) {
    const movieModal = await this.modalCtrl.create({
      component: MovieDetailsPage,
      componentProps: { movieDetails: movie }
    });
    return await movieModal.present();
  }
}
