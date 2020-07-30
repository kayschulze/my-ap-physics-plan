import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { PhysicsResourcesComponent } from './physics-resources/physics-resources.component';
import { KinematicsComponent } from './kinematics/kinematics.component';
import { FaqComponent } from './faq/faq.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AboutComponent,
    PhysicsResourcesComponent,
    KinematicsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
