import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs'

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
