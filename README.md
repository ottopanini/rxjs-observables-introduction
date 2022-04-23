![](assets/rxjs.png)
# RxJS 7 and Observables: Introduction
## Overview
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

 ## Quick Start
 
