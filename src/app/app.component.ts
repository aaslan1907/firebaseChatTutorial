import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';

//Config data for our firebase db
const config = {
    apiKey: "AIzaSyDx7__EYVpT1x7yy-r_2RPmbOe6NbJ30uc",
    authDomain: "geotracker-f7884.firebaseapp.com",
    databaseURL: "https://geotracker-f7884.firebaseio.com",
    projectId: "geotracker-f7884",
    storageBucket: "geotracker-f7884.appspot.com",
    messagingSenderId: "1014166008038"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    //Init firebase db
    firebase.initializeApp(config);
  }
}

