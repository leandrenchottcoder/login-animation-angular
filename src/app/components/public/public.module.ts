import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicComponent, LoginComponent],
  imports: [CommonModule, PublicRoutingModule, ReactiveFormsModule],
})
export class PublicModule { }
