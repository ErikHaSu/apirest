import { Component, OnInit } from '@angular/core';
import { ApiRService } from '../services/api-r.service';
import { RespuestaUsuarios, User } from '../interfaces/all';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  user: User;
  public Objeto: any = {
    name: '',
    email: ''
  };
  constructor( private service: ApiRService, private alertCtrl: AlertController) {}

  ngOnInit() {

    this.service.getUser()
    .subscribe(resp => {
      console.log('user', resp);
      this.user = resp;
    });
  }
  add() {
    this.service.addUser(this.Objeto.name, this.Objeto.email).subscribe();
    console.log('I add');
  }

  delete(id: number) {
    this.service.deleteUser(id).subscribe();
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
      },
      {
        name: 'Email',
        type: 'text',
        placeholder: 'Write your email'
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
            this.service.editUser(editValor, datos.Name, datos.Email)
              .subscribe();

            console.log('Yes!');
          }
        }
      ]
    });
    await alertInput.present();
  }

  /* edit(editVal: number) {

    console.log('I edit');
  } */
}
