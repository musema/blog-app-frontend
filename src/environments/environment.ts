// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDd9yoWZgE74V1oaKa0vRzJKg9jakB5Shs',
    authDomain: 'blogspanelprod.firebaseapp.com',
    databaseURL: 'https://blogspanelprod.firebaseio.com',
    projectId: 'blogspanelprod',
    storageBucket: 'blogspanelprod.appspot.com',
    messagingSenderId: '87680226733'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
