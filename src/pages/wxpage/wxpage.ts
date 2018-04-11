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
  id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WxpagePage');
  }



  saveUser(id) {
    console.log(id,"pppppppppppppppppppppppppppppppppppppppppppppppp")
    this.restProvider.get_forecast(this.city,id).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
