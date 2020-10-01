import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { ApplicationIsLoadedGuard } from './core/guards/application-is-loaded.guard'
import { AuthenticatedGuard } from './core/guards/authenticated.guard'
import { GuestGuard } from './core/guards/guest.guard'
import { SchoolGuard } from './core/guards/school.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rotations-list',
    pathMatch: 'full',
  },
  {
    path: 'school-choice',
    loadChildren: () =>
      import('./pages/school-choice/school-choice.module').then(
        (m) => m.SchoolChoicePageModule
      ),
    canLoad: [ApplicationIsLoadedGuard],
    canActivate: [GuestGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canLoad: [ApplicationIsLoadedGuard],
    canActivate: [SchoolGuard, GuestGuard],
  },
  {
    path: 'rotations-list',
    loadChildren: () =>
      import('./pages/rotations-list/rotations-list.module').then(
        (m) => m.RotationsListPageModule
      ),
    canLoad: [ApplicationIsLoadedGuard],
    canActivate: [SchoolGuard, AuthenticatedGuard],
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
