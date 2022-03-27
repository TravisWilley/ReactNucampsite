import {CAMPSITES} from '../shared/campsites';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import {PARTNERS} from '../shared/partners';

export const initialState = {
  campsites: CAMPSITES,
  partners: PARTNERS,
  promotions: PROMOTIONS,
  comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
