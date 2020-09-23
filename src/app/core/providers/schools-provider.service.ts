import { Injectable } from '@angular/core'

import { School } from 'src/app/shared/models/school.model'

@Injectable({
  providedIn: 'root',
})
export class SchoolsProviderService {
  constructor() {}

  getSchoolsList(): School[] {
    return [
      {
        id: 'enva',
        name: 'EnvA',
        logo: 'xxx',
        moodleUrl: 'xxx',
      },
      {
        id: 'oniris',
        name: 'Oniris',
        logo: 'xxx',
        moodleUrl: 'xxx',
      },
    ]
  }

  getSchoolFromId(id: string) {
    return this.getSchoolsList().find((school) => {
      return school.id === id
    })
  }
}