import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

const modprimeNg: any = [
  ButtonModule

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
