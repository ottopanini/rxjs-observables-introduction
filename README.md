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
Subscribing is just like running a regular function with an observer object as argument.

*--> Warm-up Observable - multiple Subscriptions*










