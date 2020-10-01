import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { SharedModule } from 'src/app/shared/shared.module'
import { RotationsListPageRoutingModule } from './rotations-list-routing.module'
import { RotationsListPage } from './rotations-list.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RotationsListPageRoutingModule,
    SharedModule,
  ],
  declarations: [RotationsListPage],
})
export class RotationsListPageModule {}
