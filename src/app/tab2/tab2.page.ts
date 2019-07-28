import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { CharacterService } from '../service/character.service';
import { CharacterDetailsPage } from '../modal/character-details/character-details.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  characters: any[] = [];
  characterBasePath: string = environment.api.poster;
  responseData: any;
  apiKeyParam: string = environment.api.keyParams;
  currentOffset = 1; 
  randomMovieByCharacter: any = {};
  selectedHero = null;

  getImgPath: any = function(thumbnail: any) {
    return thumbnail.path + '.' + thumbnail.extension;
  };



  constructor(
    public characterService: CharacterService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.getCharacters();
  }


  async presentCharacterModal(character) {
    const characterModal = await this.modalCtrl.create({
      component: CharacterDetailsPage,
      componentProps: { characterDetails: character }
    });
    return await characterModal.present();
  }

  onChange(selectedHero) {
    this.selectedHero = selectedHero;
  }

  async getCharacters() {
    let loading = null;
    if (this.currentOffset < 1) {
      loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();
    }
    await this.characterService.getCharacters(this.currentOffset).subscribe(
      res => {
        this.currentOffset = this.currentOffset + res.data.count; //+ 100
        this.responseData = res;
        Array.prototype.push.apply(this.characters, res.data.results);
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
      this.getCharacters();
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.characters.length === this.responseData.total_results) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
