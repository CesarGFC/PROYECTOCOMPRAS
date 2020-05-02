import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirestoreUtilsService } from '../../../services/service/firestore-utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private signInGroup: FormGroup;

  constructor(private fb: FormBuilder, private firestore: FirestoreUtilsService) {
    this.firestore.currentUser();
  }

  ngOnInit() {
    this.signInGroup = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  signIn() {
    const email = this.signInGroup.get('email').value;
    const password = this.signInGroup.get('password').value;

    this.firestore.signIn(email, password);
  }

}
