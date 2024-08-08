import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { unsetAuthUser } from '../store/auth/auth.actions';
import { RootState } from '../store';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private VALID_TOKEN = 'lksfdjglfdkgjklfdkjgldfjisdhfjsdfsdk';

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<RootState>
  ) {}

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthUser());

    this.router.navigate(['auth', 'login']);
  }

}
