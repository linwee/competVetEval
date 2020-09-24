import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs'
import { retry, map, catchError } from 'rxjs/operators'
import { AuthEndpoints } from 'src/app/shared/endpoints/auth.endpoints'
import { ServerEndpoints } from 'src/app/shared/endpoints/server.endpoints'
import { LoginResult } from 'src/app/shared/models/auth.model'
import { CevUser } from 'src/app/shared/models/cev-user.model'

@Injectable({
  providedIn: 'root',
})
export class HttpAuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const formData: FormData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('service', 'moodle_mobile_app')

    return this.http.post(AuthEndpoints.login, formData).pipe(
      map((res: any) => {
        return new LoginResult(res)
      }),
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  getUserProfile() {
    const formData: FormData = new FormData()
    formData.append('moodlewssettingfilter', 'true')
    formData.append('moodlewssettingfileurl', 'true')
    formData.append('wsfunction', 'core_webservice_get_site_info')

    // wstoken: this.authService.accessToken,

    return this.http.post(ServerEndpoints.server, formData).pipe(
      map((res) => {
        return new CevUser(res)
      }),
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
}
