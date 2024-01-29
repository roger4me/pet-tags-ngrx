import { Action, createReducer, on } from '@ngrx/store';
import { PetTag, initialTag } from './pet-tag.model';
import * as actions from './pet-tag.actions';
export interface PetTagState {
  shape: string;
  font: string;
  text: string;
  clip: boolean;
  gems: boolean;
  complete: boolean;
}

export const initPetTagState: PetTagState = {
  ...initialTag,
};

export const petTagReducer = createReducer(
  initPetTagState,
  on(actions.getPetTag, (state) => {
    return state;
  }),
  on(actions.getPetTagShape, (state, action) => {
    const { petTagShape } = action;
    return { ...state, shape: petTagShape };
  }),
  on(actions.getPetTagFont, (state, action) => {
    const { petTagFont } = action;
    return { ...state, font: petTagFont };
  }),
  on(actions.getPetTagText, (state, action) => {
    const { petTagText } = action;
    console.log('get pet tag text............');
    return { ...state, text: petTagText };
  }),
  on(actions.getPetTagClip, (state, action) => {
    const { petTagClip } = action;
    return { ...state, clip: petTagClip };
  }),
  on(actions.getPetTagGems, (state, action) => {
    const { petTagGems } = action;
    return { ...state, gems: petTagGems };
  }),
  on(actions.getPetTagCompleted, (state) => {
    return { ...state, complete: true };
  }),
  on(actions.getPetTagReset, () => {
    return initPetTagState;
  }),
  on(actions.getPetTagTextDone, (state) => {
    console.log('get pet tag text done!!!!!!!!!!!!!!!!!!!!!!!!!');
    return state;
  })
);
