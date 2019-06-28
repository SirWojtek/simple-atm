import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IWithdrawResponse {
  amount: number;
  notes: number[];
}

@Injectable()
export class AtmService {
  private readonly API_URL = environment.baseApiUrl;
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  withdrawCash(amount: number): Observable<IWithdrawResponse> {
    return this.httpClient
      .post(this.API_URL + '/withdraw', { amount }, this.httpOptions)
      .pipe(map(res => res as IWithdrawResponse));
  }
}
