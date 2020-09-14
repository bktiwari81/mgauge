import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigate = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
    this.sideMenu();
    this.initializeApp();
  }
  ngOnInit() {
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =
      [
        {
          title: "Account Dashboard",
          url: "/login/home",
          icon: "home"
        },
        {
          title: "Account Top Achievers",
          url: "/login/accountview",
          icon: "eye"
        },
        {
          title: "Self Assessment",
          url: "/login/selfassess",
          icon: "ribbon"
        },
        {
          title: "About Us",
          url: "/login/aboutus",
          icon: "information"
        },
        {
          title: "Contact Us",
          url: "/login/contactus",
          icon: "chatbubbles"
        }
        , {
          title: "Logout",
          icon: "log-out-outline"
        }
      ]
  }
}
