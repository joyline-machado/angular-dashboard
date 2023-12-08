import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from '@angular/fire/auth';
import { initializeApp } from '@angular/fire/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  message!: string
  errorMessage!: string



  constructor(
    // private fireAuth: AngularFireAuth,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {

    const firebaseConfig = { "projectId": "angular-dashboard-b0325", "appId": "1:836644170834:web:90f9edfa91716c0c7dc38b", "databaseURL": "https://angular-dashboard-b0325-default-rtdb.firebaseio.com", "storageBucket": "angular-dashboard-b0325.appspot.com", "apiKey": "AIzaSyDigGQUcTBBgVfQ3K2x0UwtnZx5AxDwesA", "authDomain": "angular-dashboard-b0325.firebaseapp.com", "messagingSenderId": "836644170834", "measurementId": "G-LRMSEJF65E" };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

  }

  

  async login(email: string, password: string) {

    
    await this.fireAuth.signInWithEmailAndPassword(email, password).then((res) => {
      // localStorage.setItem('token', 'Token');
      // this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user))
      this.router.navigate(['']);
      // this.toastr.success('Logged In Successfully!', 'Success!');

    }, err => {
      // alert(err.message);
      // console.log(err.message);
      if (err.message == 'Firebase: Error (auth/invalid-login-credentials).') {
        this.message = 'Invalid Login Credentials, Please Try Again ...'
      }

      if (err.message == 'Firebase: Error (auth/too-many-requests).') {
        this.message = 'Something went wrong, Please Try Again Later...'
      }

      if (err.message == 'Firebase: The supplied auth credential is incorrect, malformed or has expired. (auth/invalid-credential).') {
        this.message = 'Invalid Login Credentials, Please Try Again ...'
      }
      else {
        this.message = 'Something went wrong, Please Try Again Later...'
      }
      this.toastr.error('Failed to Log-In!, Please try again ', 'Failed!');
      this.errorMessage = err.message;
      this.router.navigate(['/login'])
      return this.message, this.errorMessage;
    })
  }

  // signout
  logout() {
    this.fireAuth.signOut().then(() => {
      this.router.navigate(['login'])
      localStorage.removeItem('user');
      this.toastr.warning('Signed Out successfully ');
      
    }, err => {
      alert(err.message);
    })
  }
}
