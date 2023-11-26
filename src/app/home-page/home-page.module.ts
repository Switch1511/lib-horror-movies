import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule { }
