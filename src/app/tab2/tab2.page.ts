import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUniversitiesService } from '../services/api-universities.service';
import { AlertController } from '@ionic/angular';
import { Universities } from '../interfaces/all';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  universities: Universities;
  public Objeto: any = {
    university: '',
    country: '',
    website: ''
  };
  constructor(private service: ApiUniversitiesService, private alertCtrl: AlertController) {}
  ngOnInit() {
    this.service.getUniversity()
    .subscribe(resp => {
      console.log('university', resp);
      this.universities = resp;
    });
  }
  add() {
    this.service.addUniversity(this.Objeto.university, this.Objeto.website, this.Objeto.country).subscribe();
    console.log('I add');
  }
  delete(id: number){
    this.service.deleteUniversity(id).subscribe();
    console.log('I delete');

  }
  async Editar(editValor: number) {
    const alertInput = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Edit university data',
      message: 'once upon your data is edited, you cant back',
      inputs: [{
        name: 'Name',
        type: 'text',
        placeholder: 'Write university'
      },
      {
        name: 'Website',
        type: 'text',
        placeholder: 'Write website'
      }
      ,
      {
        name: 'Country',
        type: 'text',
        placeholder: 'Write country'
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
            this.service.editUniversity(editValor, datos.Name, datos.Website, datos.Country)
              .subscribe();

            console.log('Yes!');
          }
        }
      ]
    });
    await alertInput.present();
  }


}
