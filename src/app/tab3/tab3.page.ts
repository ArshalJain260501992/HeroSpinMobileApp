import { Component, OnInit, ViewChild } from "@angular/core";
import { LoadingController, IonInfiniteScroll } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "../service/movie.service";
import { environment } from "src/environments/environment.prod";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  movies: any[] = [];
  posterBasePath: string = environment.api.poster;
  apiKeyParam: string = environment.api.keyParams;
  responseData: any;
  currentPage: number = 1;

  getImgPath: any = function(path: string) {
    return this.posterBasePath + path + this.apiKeyParam;
  };

  createArray: any = function(voteAvg) {
    return Array(Math.round(voteAvg/2));
  };

  constructor(
    public movieService: MovieService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getMovies();
  }

  async getMovies() {
    let loading = null;
    if (this.currentPage < 2) {
      loading = await this.loadingController.create({
        message: "Loading..."
      });
      await loading.present();
    }
    await this.movieService.getMovies(this.currentPage).subscribe(
      res => {
        ++this.currentPage;
        this.responseData = res;
        Array.prototype.push.apply(this.movies, res.results);
        console.log(this.movies);
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
      console.log("Done");
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
