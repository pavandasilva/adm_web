/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */

import { Reducer } from 'redux';
import { produce } from 'immer';
import {
  Attendance, AttendanceState, AttendanceTypes, StartAttendanceParams,
} from './actions';

const INITIAL_STATE: AttendanceState = {
  data: {
    CustomerIdOnFocus: 1,
    1: {
      currentButtonActive: 'general',
      customer: {
        id: 1,
        name: 'Meu cliente',
        address: 'Teste de rua',
        contact: {
          id: 1,
          name: 'Nome do contato',
        },
      },
    },
  } as Attendance,
};

const reducer: Reducer<AttendanceState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AttendanceTypes.START_ATTENDANCE:
      const { currentButtonActive, customer } = action?.payload as StartAttendanceParams;

      return produce(state, (draftState) => {
        draftState.data.CustomerIdOnFocus = customer.id;

        draftState.data[customer.id] = {
          currentButtonActive,
          customer,
        };
      });
    default:
      return state;
  }
};

export default reducer;
