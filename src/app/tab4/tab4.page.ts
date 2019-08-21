import { Component, OnInit } from '@angular/core';
import { ApiCountriesService } from '../services/api-countries.service';
import { Countries } from '../interfaces/all';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  countries: Countries;
  public Object: any = {
    country: '',
    border: '',
    continent: ''
  };
  constructor(private service: ApiCountriesService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.service.getCountry()
    .subscribe(resp => {
      console.log('country', resp);
      this.countries = resp;
    });
  }
  add() {
    this.service.addCountry(this.Object.country, this.Object.border, this.Object.continent).subscribe();
    console.log('I add');
  }
  delete(id: number){
    this.service.deleteCountry(id).subscribe();
    console.log('I delete');
  }
  async Editar(editValor: number) {
    const alertInput = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Edit Country data',
      message: 'once upon your data is edited, you cant back',
      inputs: [{
        name: 'Name',
        type: 'text',
        placeholder: 'Write country'
      },
      {
        name: 'Border',
        type: 'text',
        placeholder: 'Write border'
      }
      ,
      {
        name: 'Contient',
        type: 'text',
        placeholder: 'Write continent'
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
            this.service.editCountry(editValor, datos.Name, datos.Border, datos.Contient)
              .subscribe();

            console.log('Yes!');
          }
        }
      ]
    });
    await alertInput.present();
  }

}
