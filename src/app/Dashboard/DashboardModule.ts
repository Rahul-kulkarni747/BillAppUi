import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { dashboardComponent } from './DashboardComponent';
import { DashboardRoutingModule } from './DashboardRoutingModule';
import { CommonModule } from '@angular/common';
import { SafeHtml } from '../pipes/safeHtml';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatExpansionModule, MatCardModule, MatButtonModule,
        MatIconModule, MatChipsModule, MatGridListModule, MatDividerModule, MatTooltipModule } from '@angular/material';
import { FilterPipe } from '../pipes/filter';
import { ProductListComponent } from './productList.component';
import { DashboardService } from './productFetch.service';

@NgModule({
  declarations: [
    dashboardComponent,
    SafeHtml,
    FilterPipe,
    ProductListComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [ DashboardService ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class DashboardModule {}
