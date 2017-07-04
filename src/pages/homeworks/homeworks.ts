import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-homeworks',
  templateUrl: 'homeworks.html'
})
export class HomeworksPage {
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {

  }

  pressHomework(): void {
      let actionSheet = this.actionSheetCtrl.create({
      title: 'Action sur un devoir',
      buttons: [
        {
          text: 'Supprimer',
          role: 'destructive',
          handler: () => {
            console.log('Supression du devoir');
            this.showConfirm();
          }
        },{
          text: 'Modifier',
          handler: () => {
            console.log('Modification du devoir');
            this.showPrompt();
          }
        },{
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Annulation');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Modification du devoir',
      inputs: [
        {
          name: 'homework',
          placeholder: 'Nom du devoir'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Annulation de la modification');
          }
        },
        {
          text: 'Enregistrer',
          handler: data => {
            console.log('Sauvegarde de la modification');
          }
        }
      ]
    });
    prompt.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Suppression du devoir',
      message: 'Voulez-vous vraiment supprimer ce devoir ?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Annulation de la suppression');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            console.log('Suppression du devoir');
          }
        }
      ]
    });
    confirm.present();
  }
}
