import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {

  }

  pressNote(): void {
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
      title: 'Modification de la note',
      inputs: [
        {
          name: 'desc',
          placeholder: 'Description de la note'
        },
        {
          name: 'note',
          type: 'number',
          placeholder: 'Note obtenue'
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
      title: 'Suppression de la note',
      message: 'Voulez-vous vraiment supprimer cette note ?',
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
            console.log('Suppression de la note');
          }
        }
      ]
    });
    confirm.present();
  }
}
