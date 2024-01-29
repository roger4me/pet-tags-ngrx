import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PetTagState } from './pet-tag.reducer';
import { petTagKey } from './constant';

export const selectFeatureState = createFeatureSelector<PetTagState>(petTagKey);

export const constGetPetTagDataSelector = createSelector(
  selectFeatureState,
  (state) => state
);
