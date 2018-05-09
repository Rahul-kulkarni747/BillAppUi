import { Cart } from './cart';
import { UserInfo } from './domain/userInfo';
import { Injectable } from '@angular/core';
import { trigger, animate, style, group, animateChild, query, stagger, transition, AnimationTriggerMetadata } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.1s ease-in-out', style({ transform: 'translateY(-100%)' }))
      ], { optional: true }),
    ])
  ])
])

export const GlobalVariable = Object.freeze({
     BASE_API_URL: 'http://localhost:8081/billapp/',
 });

@Injectable()
export class Globals { 
  cart: Cart = new Cart();
  userInfo: UserInfo = new UserInfo();
}
