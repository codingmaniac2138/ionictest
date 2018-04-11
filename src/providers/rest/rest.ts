import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=60d278ac2e391ebe8212d817a7882a34';
  forecast_apiUrl = "http://samples.openweathermap.org/data/2.5/weather?q=";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }




  get_forecast(city,id) {

    return new Promise(resolve => {
      this.http.get(this.forecast_apiUrl+city['name']+"&appid=b6907d289e10d714a6e88b30761fae22").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });



    // console.log(city,id,"ppppppppppppppppppppppp")
    // return new Promise((resolve, reject) => {
       
    //   this.http.get(this.forecast_apiUrl+city['name']+"&appid=b6907d289e10d714a6e88b30761fae22",{
    //     headers: new HttpHeaders().set('Authorization', 'my-auth-token'),

    //   })
    //     .subscribe(res => {
    //       resolve(res);
    //       console.log(res)
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
  }

  // this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
  //   headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
  //   params: new HttpParams().set('id', '3'),
  // })
  // .subscribe(res => {
  //   resolve(res);
  // }, (err) => {
  //   reject(err);
  // });

}
