import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

// emits 3 values
name$.subscribe(value => console.log(value)); 

// storeDataOnServer returns an observable. nothing happens so far
storeDataOnServer('Some value');

// with subscription...
storeDataOnServer('Some value').subscribe(value => console.log(value));
// it stores the value

// add error handler the old way via callbacks
storeDataOnServerError('Some value').subscribe(
  value => console.log(value),
  err => console.log('Error when saving: ', err.message)
);

// use the observer object instead
storeDataOnServerError('Some value').subscribe({
  next: value => console.log(value),
  error: err => console.log('Error when saving: ', err.message)
});




