import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface IWithdrawResponse {
  amount: number;
  bills: number[];
}

@Injectable()
export class AtmService {
  private readonly API_URL = environment.baseApiUrl;

  withdrawCash(amount: number): Observable<IWithdrawResponse> {
    // TODO: implement backend call
    return null;
  }
}
