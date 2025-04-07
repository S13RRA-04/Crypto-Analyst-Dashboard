import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EtherscanService {
  constructor(private http: HttpClient) {}

  getBalance(address: string) {
    return this.http.get(`/api/etherscan/balance/${address}`).pipe(
      catchError(err => {
        console.error('[EtherscanService Error]', err);
        return of({ error: 'Failed to load balance' });
      })
    );
  }
}
