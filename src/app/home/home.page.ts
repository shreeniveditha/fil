import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  people$;

constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase) {
  this.people$ = afDatabase.list('/random');
  console.log(this.people$);
}
pickEyeColor(eyeColor: string){
  this.people$ = this.afDatabase.list('random',
    ref => ref.orderByChild('eyeColor').equalTo(eyeColor));
}
pick(eyeColor: string){
  this.people$ = this.afDatabase.list('random',
    ref => ref.orderByChild('eyeColor').equalTo(eyeColor));
}
pickOlderPeople(age){
  this.people$ = this.afDatabase.list('random',
    ref => ref.orderByChild('age').startAt(parseInt(age)));
}
}