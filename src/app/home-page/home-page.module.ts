import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ]
})
export class HomePageModule { }
