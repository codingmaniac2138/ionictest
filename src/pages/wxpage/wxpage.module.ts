import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WxpagePage } from './wxpage';

@NgModule({
  declarations: [
    WxpagePage,
  ],
  imports: [
    IonicPageModule.forChild(WxpagePage),
  ],
})
export class WxpagePageModule {}
