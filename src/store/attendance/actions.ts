/* eslint-disable no-shadow */
import { action } from 'typesafe-actions';

/**
 * Action types
 */

export enum AttendanceTypes {
  // eslint-disable-next-line no-unused-vars
  START_ATTENDANCE = 'attendence/START'
}

/**
 * Data types
 */

 type CurrentButtonActive = 'attendance' | 'general'

 interface Customer {
  id: number,
  name: string,
  address: string,
  contact: Contact
 }

 interface Contact {
   id: number,
   name: string
 }

 interface Order {
   id?: number,
   customer: Customer
   contact: Contact,
   total: number,
   itens: []
 }

export interface Attendance {
  CustomerIdOnFocus?: number,
  [customerId: number]: {
    currentButtonActive: CurrentButtonActive
    customer: Customer
    openOrders?: Order[]
    order?: Order
  }
 }

/**
  * State type
  */

export interface AttendanceState {
   readonly data: Attendance
 }

export interface StartAttendanceParams {
   customer: Customer
   currentButtonActive: CurrentButtonActive
 }

export const startAttendance = (data: StartAttendanceParams) => action(AttendanceTypes.START_ATTENDANCE, data);
