import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PetTagAction from './pet-tag.actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class PetTagEffect {
  constructor(private actions$: Actions) {}

  changePetTagText = createEffect(() =>
    this.actions$.pipe(
      ofType(PetTagAction.getPetTagText),
      switchMap(({ petTagText }) => petTagText),
      map((xxx) => PetTagAction.getPetTagTextDone({ petTagText: xxx }))
    )
  );
}
