import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtherscanToolComponent } from './tools/etherscan-tool/etherscan-tool.component';
import { MoralisToolComponent } from './tools/moralis-tool/moralis-tool.component';
import { GraphsenseToolComponent } from './tools/graphsense-tool/graphsense-tool.component';
import { ShodanToolComponent } from './tools/shodan-tool/shodan-tool.component';
import { DuneToolComponent } from './tools/dune-tool/dune-tool.component';
import { InvestigationLogsComponent } from './tools/investigation-logs/investigation-logs.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'etherscan', pathMatch: 'full' },
      { path: 'etherscan', component: EtherscanToolComponent },
      { path: 'moralis', component: MoralisToolComponent },
      { path: 'graphsense', component: GraphsenseToolComponent },
      { path: 'shodan', component: ShodanToolComponent },
      { path: 'dune', component: DuneToolComponent },
      { path: 'logs', component: InvestigationLogsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
