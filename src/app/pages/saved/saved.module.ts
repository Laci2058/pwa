import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedRoutingModule } from './saved-routing.module';
import { SavedComponent } from './saved.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SavedRoutingModule,
    MatCardModule
  ]
})
export class SavedModule { }
