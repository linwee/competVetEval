import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RotationsListPage } from './rotations-list.page'

const routes: Routes = [
  {
    path: '',
    component: RotationsListPage,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotationsListPageRoutingModule {}