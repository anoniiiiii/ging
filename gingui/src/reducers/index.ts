import {combineReducers} from 'redux';
import flashCardReduver from './FlashCardReducer';

export default combineReducers({flashCard: flashCardReduver});