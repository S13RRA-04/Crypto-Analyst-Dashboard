import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MoralisService {
  constructor(private http: HttpClient) {}

  // Fetch all data (transactions, ERC20 tokens, NFTs, etc.) for a given wallet address
  getAllData(address: string, selectedChain: string) {
    return this.http.get(`/api/moralis/all/${address}`);
  }
}