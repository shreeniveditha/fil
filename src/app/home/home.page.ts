import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public people: AngularFireList<any>;

constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase) {
  this.people = afDatabase.list('/random');
}
pickEyeColor(eyeColor: string){
  this.people = this.afDatabase.list('random',
    ref => ref.orderByChild('eyeColor').equalTo(eyeColor));
}
pick(eyeColor: string){
  this.people = this.afDatabase.list('random',
    ref => ref.orderByChild('eyeColor').equalTo(eyeColor));
}
pickOlderPeople(age){
  this.people = this.afDatabase.list('random',
    ref => ref.orderByChild('age').startAt(parseInt(age)));
}
}