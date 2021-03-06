import { Injectable } from '@angular/core'

import { throwError, BehaviorSubject } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { Criterion } from '../../shared/models/criterion.model'
import { MoodleApiService } from '../http-services/moodle-api.service'

@Injectable({
  providedIn: 'root',
})
export class CriteriaService {
  constructor(private moodleApiService: MoodleApiService) {
    // Retrieve situations from localStorage if any ?
  }

  criteria = new BehaviorSubject<Criterion[]>([])

  get getCriteria(): Criterion[] {
    return this.criteria.getValue()
  }

  retrieveCriteria() {
    return this.moodleApiService.getCriteria().pipe(
      map((criteria: Criterion[]) => {
        this.criteria.next(criteria)
        return criteria
      }),
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  public getLabelForCriteria(critid) {
    this.criteria.getValue()
  }
}
