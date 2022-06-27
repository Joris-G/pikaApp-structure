import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
const MODULES = [
  {
    name: 'execution',
    type: 'core',
    path: 'execution'
  }
];
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public modules = MODULES;
  constructor(private navCtrl: NavController) { }

  navigate(url: string) {
    this.navCtrl.navigateForward(url);
  }

}
