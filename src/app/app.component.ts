import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyAEh9WJ5ksWnq2Sno5zW34-pQhXBHXFfc4",
      authDomain: "bibliotheque-91e95.firebaseapp.com",
      databaseURL: "https://bibliotheque-91e95.firebaseio.com",
      projectId: "bibliotheque-91e95",
      storageBucket: "bibliotheque-91e95.appspot.com",
      messagingSenderId: "1071055794008"
    };
    firebase.initializeApp(config);
  }
}
