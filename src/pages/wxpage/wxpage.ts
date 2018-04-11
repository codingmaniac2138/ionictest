import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the WxpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wxpage',
  templateUrl: 'wxpage.html',
})
export class WxpagePage {
  city = {};
  weather:any
  id:any;
  place:any;
  wind_speed:any;
  wind_deg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    ;

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WxpagePage');
  }



  saveUser(id) {
    console.log(id,"pppppppppppppppppppppppppppppppppppppppppppppppp")
    this.restProvider.get_forecast(this.city,id).then((result) => {
      console.log(result,"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
      this.weather = result['weather'];
      console.log(result)
      // console.log(this.users)
      // console.log(this.users['coord'])
      for( var i in result['weather']){
        // console.log(this.users[i]);
      }
      console.log(result['name'])
      this.place=(result['name'])
      this.wind_speed=(result['wind']['speed'])
      this.wind_deg = (result['wind']['deg'])
      console.log(this.wind_speed)
      console.log(this.wind_deg)
    }, (err) => {
      console.log(err);
    });
  }




}
