import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  /**
   *
   *
   * @private
   * @memberof LoadingService
   */
  public isLoading = new Subject<boolean>();
  /**
   * Creates an instance of LoadingService.
   *
   * @param  loadingController
   * @memberof LoadingService
   */
  constructor(private loadingController: LoadingController) {
    this.isLoading.subscribe((isLoading) => {
      if (isLoading) { this.startLoading(); }
      else { this.stopLoading(); }
    });
  }

  /**
   * Création d'un loader avec un message personalisé. Lancement du loader.
   *
   * @param message C'est le message que verra l'utilisateur pendant le chargement
   * @memberof LoadingService
   */
  private startLoading(message: string = 'Chargement ...') {
    this.loadingController.create({ spinner: 'lines', cssClass: 'my-custom-class', message, })
      .then((response) => { response.present(); });
  }


  /**
   * Arrête le loader
   *
   * @memberof LoadingService
   */
  private stopLoading() {
    this.loadingController.dismiss();
  }
}
