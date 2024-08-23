import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { User } from './users/models';
import { selectAuthUser } from '../../core/store/auth/auth.selectors';
import { environment } from '../../environments/environment.development';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss', 

})
export class DashboardComponent implements OnInit {
  showFiller = false;

  authUser$: Observable<User | null>;

  nombreEntorno = environment.envName;

  tpousuario: any;

  constructor(
    private authService: AuthService,
    private store: Store<RootState>
  ) {
    this.authUser$ = this.store.select(selectAuthUser);
  }
  ngOnInit(): void {
    this.tpousuario = localStorage.getItem('tpousuairo');
  }

  logout() {
    this.authService.logout();
  }

}
