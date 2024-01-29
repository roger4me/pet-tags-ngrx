import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PetTagState } from 'src/app/core/pet-tag.reducer';
import { constGetPetTagDataSelector } from 'src/app/core/pet-tag.selector';
import {
  getPetTagCompleted,
  getPetTagReset,
  getPetTagText,
} from 'src/app/core/pet-tag.actions';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css'],
})
export class CompleteComponent implements OnInit, OnDestroy {
  tagState$!: Observable<PetTagState>;
  private tagStateSubscription: Subscription = new Subscription();
  petTag!: PetTagState;

  constructor(private store: Store<PetTagState>) {
    this.tagState$ = store.pipe(
      select(constGetPetTagDataSelector),
      map((x) => {
        return x;
      })
    );
  }

  ngOnInit(): void {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }
  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }
  newTag() {
    this.store.dispatch(getPetTagReset());
  }
}
