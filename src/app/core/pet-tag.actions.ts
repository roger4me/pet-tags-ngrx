import { createAction, props } from '@ngrx/store';

export const getPetTag = createAction('Get pet tag shape');

export const getPetTagShape = createAction(
  'Get pet tag shape',
  props<{ petTagShape: string }>()
);

export const getPetTagFont = createAction(
  'Get pet tag font',
  props<{ petTagFont: string }>()
);

export const getPetTagText = createAction(
  'Get pet tag text',
  props<{ petTagText: string }>()
);

export const getPetTagTextDone = createAction(
  'Get pet tag text done',
  props<{ petTagText: string }>()
);

export const getPetTagClip = createAction(
  'Get pet tag clip',
  props<{ petTagClip: boolean }>()
);

export const getPetTagGems = createAction(
  'Get pet tag gems',
  props<{ petTagGems: boolean }>()
);

export const getPetTagCompleted = createAction('Get pet tag completed');

export const getPetTagReset = createAction('Get pet tag reset');
