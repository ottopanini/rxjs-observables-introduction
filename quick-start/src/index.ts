import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

// emits 3 values
name$.subscribe(value => console.log(value)); 

// storeDataOnServer returns an observable. nothing happens so far
storeDataOnServer('Some value');
