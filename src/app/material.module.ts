import { NgModule } from '@angular/core';
import 'hammerjs';

import {
  MatButtonModule,
  MatMenuModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule
  ]
})
export class MaterialModule {}
