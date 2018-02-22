import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the AddRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {

  //Declare these variables before the constructor for hold data object and Firebase database reference.
  data = { roomname:'' };
  ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addRoom;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }

  //Add this function to the constructor for saving a new Room data to Firebase Database.
  addRoom() {
    let newData = this.ref.push();
    newData.set({
      roomname:this.data.roomname
    });
    this.navCtrl.pop();
  }

}
