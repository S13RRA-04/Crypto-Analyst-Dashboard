import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoralisService } from '../../services/moralis.service';
import { getChainHex, chainMapping } from '../../interfaces/chain-mapping';


@Component({
  selector: 'app-moralis-tool',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './moralis-tool.component.html',
  styleUrls: ['./moralis-tool.component.scss']
})
export class MoralisToolComponent {
  walletAddress = '';
  selectedChain = 'ethereum'; // Default chain
  result: any = null;
  error = '';
  loading = false;
  errorMessage: string = '';
  chains = Object.keys(chainMapping);

  constructor(private moralis: MoralisService) {}

  lookup() {
     const chainHex = getChainHex(this.selectedChain);
    if (!chainHex) {
      this.error = 'Invalid chain selected';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = '';
    this.result = null;
    
    this.moralis.getAllData(this.walletAddress, chainHex).subscribe({
      next: (data) => {
        this.result = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to retrieve data from Moralis';
        this.errorMessage = err.message || 'Unknown error';
        this.loading = false;
      }
    });
  }
}
