import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private alertController: AlertController, private toastController: ToastController) { }

  async showMessageAlert(titleAlert: string, messageAlert: string) {
    const alert = await this.alertController.create({
      header: titleAlert,
      message: messageAlert,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showMessageToast(mess: string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }
}
