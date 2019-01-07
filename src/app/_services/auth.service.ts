import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    });
   }

  login(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password).
    then(user => {
      this.router.navigate(['/todotask']);
    }).catch( err => {
      console.log(err);
    });
  }

  signup(email: string, password: string) {
    this.angularFire.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password).
    then(user => {
      this.router.navigate(['/todotask']);
  });
}
logout() {
  this.angularFire.auth.signOut();
}
}
