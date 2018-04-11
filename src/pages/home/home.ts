import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { WxpagePage } from '../../pages/wxpage/wxpage'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wx_page = WxpagePage;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) { 
    this.getUsers();

  }

  users: any;
  place:any;
  wind_speed:any;
  wind_deg:any;

  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data['weather'];
        console.log(data)
        console.log(this.users)
        // console.log(this.users['coord'])
        for( var i in data['weather']){
          console.log(this.users[i]);
        }
        console.log(data['name'])
        this.place=(data['name'])
        this.wind_speed=(data['wind']['speed'])
        this.wind_deg = (data['wind']['deg'])
        console.log(this.wind_speed)
        console.log(this.wind_deg)


        // console.log(this.users,"dsdfsdfsdfsfsf");
      });
  }

}
