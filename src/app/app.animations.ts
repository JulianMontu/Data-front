import {
    animate,
    animateChild,
    group,
    query,
    style,
    transition,
    trigger
  } from '@angular/animations';
  
  // Basic
  export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ],{ optional: true })
    ]),
  ]);
  
  // Positioned
  export const slider = trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('* => SameRight', slideTo('right')),
    transition('* => SameLeft', slideTo('left')),
  ]);
  
  function slideTo(direction:any) {
    const value = '100vw';
    const duration = '800ms';
    return [
      query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%', [direction]: 0 }), { optional: true }),
      query(':enter', style({ transform: `translateX(${direction === 'left' ? '-' : ''}${value})` }), { optional: true }),
      group([
        query(':leave', [
          style({ [direction]: '0%' }),
          animate(`${duration} ease-in-out`, style({ transform: `translateX(${direction !== 'left' ? '-' : ''}${value})` }))
        ], { optional: true }),
        query(':enter', [
          animate(`${duration} ease-in-out`, style({ transform: 'translateX(0%)' })),
          animateChild()
        ], { optional: true })
      ]),
    ];
  }
  