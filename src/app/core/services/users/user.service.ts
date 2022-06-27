import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subject, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../interfaces/user';
import { LoadingService } from '../loading/loading.service';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private requestSerice: RequestService,
    private navCtrl: NavController,
    private loadingService: LoadingService
  ) { }



  login(user: User): void {
    //TODO Créer la route pour la connexion
    this.requestSerice.createPost('users/authenticate', user)
      .subscribe(
        (data) => {
          console.log(data);
          // this.loadingService.isLoading.next(false);
          this.navCtrl.navigateRoot(['home']);
        },
        (err) => {
          console.error(err);
        }
      );
  }


  logout(): void {
    this.navCtrl.navigateRoot('login');
    // TODO Créer la route pour la déconnexion
    this.requestSerice.createPost(environment.apiBaseUrl, null)
      .subscribe(
        (data) => {
          console.log(data);
          // this.loadingService.isLoading.next(false);
          this.navCtrl.navigateRoot(['login']);
        },
        (err) => {
          console.error(err);
        }
      );
  }

  register(user: User) {
    const timer$ = timer(250);
    timer$.subscribe(() => {
    });
    //TODO Créer la route pour l'enregistrement
    const register$ = this.requestSerice.createPost(`users/register`, user);
    register$.subscribe(
      (data) => {
        console.log(data);
        this.navCtrl.navigateRoot(['login']);
      },
      (err) => {
        // this.loadingService.stopLoading();
        console.error(err);
      }
    );
    // const concat$ = concatAll();
  }

}

