import { Component, OnInit, Input } from '@angular/core';
import { Platform, NavParams, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  @Input() movie: any;
  shownDetail = false;

  posterBasePath: string = environment.api.poster;
  apiKeyParam: string = environment.api.keyParams;
  getImgPath: any = function (path: string) {
    return this.posterBasePath + path + this.apiKeyParam;
  };

  createArray: any = function (voteAvg) {
    return Array(Math.round(voteAvg / 2));
  };

  constructor(
    public platform: Platform,
    public params: NavParams,
    public modalCtrl: ModalController
  ) {
    this.movie = this.params.get('movieDetails');
  }

  ngOnInit() {
  }

  dismiss() {
    this.movie = undefined;
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  toggleDetail(detail) {
    if (this.isDetailShown(detail)) {
      this.shownDetail = null;
    } else {
      this.shownDetail = detail;
    }
  }

  isDetailShown(detail) {
    return this.shownDetail === detail;
  }

}
