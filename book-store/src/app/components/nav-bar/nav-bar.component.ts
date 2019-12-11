import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Order } from 'src/app/models/order';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  login: LoginComponent;

  temp = '';
  superUser = 'roel.cantu';
  AdinUser = 'yasuhiro';
  userLogged = false;
  constructor(private loginService: AuthenticationService) { }
  ngOnInit() {
  }

  onLogin(temp): boolean {
    // this.superUserLogged  = false;
    // this.schoolAdminLogged = false;
    // this.teacherLogged = false;
    switch (this.temp) {
        case 'roel.cantu':
            return this.userLogged = true;
            break;
        case 'yasuhiro':
            return this.userLogged = true;
            break;
        case 'john.doe':
          return this.userLogged = false;
        // case 'Teacher':
        //     this.teacherLogged = true;
        //     break;
}


}
}
