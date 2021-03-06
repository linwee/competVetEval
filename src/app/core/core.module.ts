import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { AngularSvgIconModule } from 'angular-svg-icon'
import { AddTokenInterceptor } from './interceptors/add-token.interceptor'
import { FormatRequestInterceptor } from './interceptors/format-request.interceptor'

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FormatRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
