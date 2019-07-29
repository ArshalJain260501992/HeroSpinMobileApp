// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    listAllHeroes: 'http://localhost:1234/heroSpin/heroes/list/offset/',
    listAllSuperheroMovies: 'http://localhost:1234/heroSpin/movies/list/page/',
    poster: 'http://localhost:1234/heroSpin/movies/poster',
    getMovieDetails: 'http://localhost:1234/heroSpin/movies/movieID/',
    getRandomMovieForHero: 'http://localhost:1234/heroSpin/movies/findRelevantRandomMovie/',
    getRandomMovie: 'http://localhost:1234/heroSpin/movies/findRandomMovie/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
