import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { AdminPerformanceAgentPageRoutingModule } from './admin-performance-agent-routing.module';

import { AdminPerformanceAgentPage } from './admin-performance-agent.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    AdminPerformanceAgentPageRoutingModule
  ],
  declarations: [AdminPerformanceAgentPage],
  providers:[
    NavParams
  ]
})
export class AdminPerformanceAgentPageModule {}
