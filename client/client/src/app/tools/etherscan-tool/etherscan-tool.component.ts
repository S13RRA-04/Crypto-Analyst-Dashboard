import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtherscanService } from '../../services/etherscan.service';

@Component({
  selector: 'app-etherscan-tool',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etherscan-tool.component.html',
  styleUrls: ['./etherscan-tool.component.scss']
})
export class EtherscanToolComponent {
  walletAddress = '';
  loading = false;
  error = false;
  errorMessage = '';
  result: any = null;

  constructor(private etherscan: EtherscanService) {}

  lookup() {
    this.loading = true;
    this.error = false;
    this.result = null;

    this.etherscan.getBalance(this.walletAddress).subscribe({
      next: (data) => {
        this.result = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = true;
        this.errorMessage = 'Error retrieving data';
        this.loading = false;
      }
    });
  }
}
