import { TagTextComponent } from './tag-text/tag-text.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, map, take } from 'rxjs';
import {
  getPetTagClip,
  getPetTagCompleted,
  getPetTagFont,
  getPetTagGems,
  getPetTagShape,
  getPetTagText,
} from 'src/app/core/pet-tag.actions';
import { PetTag } from 'src/app/core/pet-tag.model';
import { PetTagState } from 'src/app/core/pet-tag.reducer';
import { constGetPetTagDataSelector } from 'src/app/core/pet-tag.selector';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit, OnDestroy {
  tagState$!: Observable<PetTagState>;
  petTagStatusInfo: string = '';
  private tagStateSubscription: Subscription = new Subscription();
  petTag!: PetTagState;
  done: boolean = false;

  constructor(private store: Store<PetTagState>) {
    this.tagState$ = store.pipe(
      select(constGetPetTagDataSelector),
      map((x) => {
        return x;
      })
    );
  }
  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
      this.done = !!(this.petTag?.shape && this.petTag.text);
      this.petTagStatusInfo = JSON.stringify(state);
    });
  }

  ngOnDestroy(): void {
    this.tagStateSubscription.unsubscribe();
  }

  selectPetTagHandler(shape: string) {
    this.store.dispatch(getPetTagShape({ petTagShape: shape }));
  }

  addTextHandler(text: string) {
    this.store.dispatch(getPetTagText({ petTagText: text }));
  }
  selectFontHandler(font: string) {
    this.store.dispatch(getPetTagFont({ petTagFont: font }));
  }

  toggleGemsHandler(gems: boolean) {
    this.store.dispatch(getPetTagGems({ petTagGems: gems }));
  }

  toggleClipHandler(clip: boolean) {
    this.store.dispatch(getPetTagClip({ petTagClip: clip }));
  }

  submit() {
    this.store.dispatch(getPetTagCompleted());
  }
}
