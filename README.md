![](assets/rxjs.png)
# RxJS 7 and Observables: Introduction
## Getting Started
### Overview
**RxJS** = Reactive Extensions for Javascript

"RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the *Observable*, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections

    Think of RxJS as Lodash for events.

ReactiveX combines the *Observer pattern* with the *Iterator pattern* and *functional programming with collections* to fill the need for an ideal way of managing sequences of events."
(https://rxjs.dev/guide/overview)
      
The essential concepts in RxJS which solve async event management are:  
**Observable:** represents the idea of an invokable collection of future values or events.  
**Observer:** is a collection of callbacks that knows how to listen to values delivered by the Observable.  
**Subscription:** represents the execution of an Observable, is primarily useful for cancelling the execution.    
**Operators:** are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
**Subject:** is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.   
**Schedulers:** are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.  
(https://rxjs.dev/guide/overview)

### Quick Start
Lets try some things with observables. 

```ts
name$.subscribe(value => console.log(value)); 
```
emits 3 values.

```ts
storeDataOnServer('Some value');
```
storeDataOnServer returns an observable but nothing happens so far...

with added subscription...
```ts    
storeDataOnServer('Some value').subscribe(value => console.log(value));
```
... it stores the value.

add error handler the old way via callbacks
```ts
storeDataOnServerError('Some value').subscribe(
  value => console.log(value),
  err => console.log('Error when saving: ', err.message)
);
```

use an **observer object** instead:
```ts
storeDataOnServerError('Some value').subscribe({
  next: value => console.log(value),
  error: err => console.log('Error when saving: ', err.message)
});
```

## Observable - how does it work
### Array vs Stream

Array - immediate access to all members  
Stream - items can come at various points in time

--> reaktive Programming

### Key elements 

**Observable:**  
Simply put, an observable is just an object that holds the declaration of an asynchronous behaviour specified via 
callbacks.
When the Observable is executed there are 3 types of notifications/callbacks:  
*next*, *error* and *complete*. 
```ts
const observable$ = new Observable(subscriber => {
    subscriber.next('Alica');
    subscriber.next('Ben');
})
```

**Observer:**  
Describes the reaction to each emitted value.
```ts
const observer = {
    next: value => console.log(value)
}
```

**Subscription:**  
runs the observable and connects the **Observer** and the **Observable**. The subscription must be closed.
```ts
const subscription = observable$.subscribe(observer); 
...
subscription.unsubscribe(); 
```

Workflow:  
The *subscription* runs first. Then the callbacks of the *observable* are executed. This executes then on each next call the 
*observer* code. 

subscription (by subscribe on the observable) -> observable -> observer 

*--> Warm-up Observable - Observable, Observer, Subscription*

### Multiple Subscriptions

Each new subscription runs the code inside the observable independantly. 
Subscribing is just like running a regular function with an observer wrapped into a Subscriber object as argument 
passed to the Observable's logic (which is therefore executed).

*--> Warm-up Observable - multiple Subscriptions*

### Marbles

if nothing is emmitted:  
-------------------------------------------------> time

If A, B and C is emitted (via next):   
----A----B----------------C---------------------->

with complete (|):  
----A----B----------------C-----------|---------->

With error (X):  
----A----B----------------C-----------X---------->

getting an error notification.

Notification types:  

| Symbol | Name     | Description |
|--------|----------|-------------| 
| A      | next     | 0..many     | 
| X      | error    | 0..1        |
| \|     | complete | 0..1        |

#### illegal scenarios

----A----B-------|--------C---------------------->

----A----B-------X--------C---------------------->

----A----B-------X---|--------------------------->

#### Appearance

----A----B-------C--------D------E--------------->

Sometimes numbers are used when they show the logic of the operator in a better way:   
----5----8-------5-----(-1)------7--------------->

Sometimes Colors are used. Lastly marbles are presented in an ASCII form as I did it here :.)

#### Documentation

RxJS Marbles (https://rxmarbles.com/)  
RxJS (https://rxjs.dev/)

## Exercises: Observable, Observer and Subscription
### Subscription Lifecycle

`.subscribe()` creates a subscription (starts Observalbe execution).
Each `next` notification is handled by the Observers `next` handler.
When an `error` is emitted it is handled by the Observers `error` handler.
Finally the `complete` event will be handled by the Observers `complete` handler.

The `error` and `complete` events also run the *teardown* logic of the Observable (so that it can clean up after itself).
This is also done by calling `.unsubscribe()`. In fact the *teardown* logic will always be run.

### Execution Timing - Empty Observable

------------------------------------------------->  
*--> Execution Timing - Empty Observable*
```ts
import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
});

console.log('Before subscription');
observable$.subscribe();
console.log('After subdscribe');
```
Key takeaway is here that there is no asynchronous handling here. The code inside the Observable is executed immediately.

### Synchronous Emmission - Next Notification
A------------------------------------------------>  
*--> Synchronous Emmission - Next Notification*
```ts
import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Alice');
});

console.log('Before subscription');
observable$.subscribe((value) => console.log(value));
console.log('After subdscribe');
```

### Asynchronous Emmission - More Next Notification
AB----C------------------------------------------>  
*--> Asynchronous Emmission - More Next Notification*
```ts
import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(() => subscriber.next('Charlie'), 2000);
});

console.log('Before subscription');
observable$.subscribe((value) => console.log(value));
console.log('After subdscribe');
```
Charlie is now handled asynchronously.

### Teardown - Complete Notification
AB----C|----------------------------------------->  
*--> Teardown - Complete Notification*
```ts
import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(() => {
        subscriber.next('Charlie');
        subscriber.complete();
    }, 2000);

    return () => {
        console.log('Teardown');
    };
});

console.log('Before subscription');
observable$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
});
console.log('After subscribe');
```


