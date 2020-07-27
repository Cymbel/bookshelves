import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDrCY_90CLfxJ2ILZey_qH9sUXtHdeWVO4",
      authDomain: "bookshelves-8830a.firebaseapp.com",
      databaseURL: "https://bookshelves-8830a.firebaseio.com/",
      projectId: "bookshelves-8830a",
      storageBucket: "bookshelves-8830a.appspot.com",
      messagingSenderId: "270685947146",
      appId: "1:270685947146:web:d602036a6d9071c08aa6f3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   }
}
