import { Component, OnInit } from '@angular/core';
import { ApiContactService } from '../services/api-contact.service';
import { AlertController } from '@ionic/angular';
import { Contact } from '../interfaces/all';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  contact: Contact;

  public Object: any = {
    name: ''
  };
  constructor(private service: ApiContactService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.service.getContact()
    .subscribe(resp => {
      console.log('contact', resp);
      this.contact = resp;
    });
  }
  add() {
    this.service.addContact(this.Object.name).subscribe();
    console.log('I add');
  }
  delete(id: number) {
    this.service.deleteContact(id).subscribe();
    console.log('I delete');
  }

  async Editar(editValor: number) {
    const alertInput = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Edit your data',
      message: 'once upon your data is edited, you cant back',
      inputs: [{
        name: 'Name',
        type: 'text',
        placeholder: 'Write your name'
      }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('No');
          }
        }, {
          text: 'Submit',
          handler: (datos) => {
            this.service.editContact(editValor, datos.Name)
              .subscribe();

            console.log('Yes!');
          }
        }
      ]
    });
    await alertInput.present();
  }
}
