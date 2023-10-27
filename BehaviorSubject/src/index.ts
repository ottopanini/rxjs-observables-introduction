import { BehaviorSubject, fromEvent, withLatestFrom } from 'rxjs';

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement =
    document.querySelector('button#print-state');

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));

const isLoggedInAsObservable$ = isLoggedIn$.asObservable();

// Navigation bar
isLoggedInAsObservable$.subscribe(
    (isLoggedIn) => (loggedInSpan.innerText = isLoggedIn.toString())
);

// Buttons
isLoggedInAsObservable$.subscribe((isLoggedIn) => {
    logoutButton.style.display = isLoggedIn ? 'block' : 'none';
    loginButton.style.display = !isLoggedIn ? 'block' : 'none';
});

fromEvent(printStateButton, 'click')
    .pipe(withLatestFrom(isLoggedInAsObservable$))
    .subscribe(([event, isLoggendIn]) =>
        console.log('User is logged in: ', isLoggendIn)
    );