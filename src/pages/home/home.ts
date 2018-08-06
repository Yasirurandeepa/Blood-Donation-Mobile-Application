import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  signIn(){
    this.navCtrl.push(LoginPage);
  }

  signUp(){
    this.navCtrl.push(RegisterPage);
  }

}
