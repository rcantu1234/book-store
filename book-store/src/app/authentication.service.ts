import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }
  authenticate(username, password) {
    if (username === 'roel.cantu' && password === 'password') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      alert('The username and password do not match!!!!')
      return false;
    }
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}
