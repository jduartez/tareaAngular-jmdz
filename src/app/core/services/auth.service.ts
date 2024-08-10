import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setAuthUser, unsetAuthUser } from '../store/auth/auth.actions';
import { RootState } from '../store';
import { environment } from '../../environments/environment';
import { User } from '../../features/dashboard/users/models';
import { NotifierService } from './notifier.service';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private VALID_TOKEN = 'lksfdjglfdkgjklfdkjgldfjisdhfjsdfsdk';

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<RootState>,
    private notifier: NotifierService    
  ) {}

  login(data: { email: string; password: string }) {
    this.http
      .get<User[]>(environment.apiUrl + '/users', {
        params: {
          email: data.email,
          password: data.password,
        },
      })
      .subscribe({
        next: (response) => {
          if (!response.length) {
            alert('Usuario o password invalido');
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this.store.dispatch(setAuthUser({ payload: authUser }));

            this.router.navigate(['dashboard', 'home']);
          }
        },
        error: (err) => {
          this.notifier.sendNotification('Error al iniciar sesion...' + JSON.stringify(err));
        },
      });
  }


  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthUser());

    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(false);
    }
    return this.http
      .get<User[]>(environment.apiUrl + '/users', {
        params: {
          token,
        },
      })
      .pipe(
        map((response) => {
          if (!response.length) {
            return false;
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this.store.dispatch(setAuthUser({ payload: authUser }));

            return true;
          }
        })
      );
  }

}
