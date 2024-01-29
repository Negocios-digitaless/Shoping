import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

const modprimeNg: any = [
  ButtonModule,
  CardModule,
  InputTextModule

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modprimeNg
  ], exports: [
    modprimeNg

  ]
})
export class PrimengModule { }
