import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, LoadingController, ToastController } from '@ionic/angular';
import { Platform } from '@angular/cdk/platform';
import { CharacterService } from '../../service/character.service';
import { MovieDetailsPage } from '../movie-details/movie-details.page';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  @Input() character: any;
  randomMovieByCharacter: any = {};
  constructor(
    public platform: Platform,
    public params: NavParams,
    public modalCtrl: ModalController,
    public characterService: CharacterService,
    public loadingController: LoadingController,
    public toastController: ToastController,

  ) {
    this.character = this.params.get('characterDetails');
  }

  ngOnInit() {
  }

  dismiss() {
    this.character = undefined;
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async pickARandomMovieByCharacter() {
    let loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.characterService.pickRandomMovieByCharacter(this.character).subscribe(
      res => {
        loading.dismiss();
        if (res == null) {
          this.presentErrorToast();
        } else {
          this.randomMovieByCharacter.data = res;
          this.presentMovieModal(this.randomMovieByCharacter);
        }
      }
    );
    
  }

  async presentMovieModal(movie) {
    const movieModal = await this.modalCtrl.create({
      component: MovieDetailsPage,
      componentProps: { movieDetails: movie }
    });
    return await movieModal.present();
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'No movie found for this character !!',
      duration: 2000,
      position: 'middle',
      color: 'danger',
      showCloseButton: true
    });
    toast.present();
  }

}
