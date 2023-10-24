import { fromEvent, debounceTime, map } from 'rxjs';

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input')
    .pipe(
        debounceTime(2000),
        map((evt) => evt.target['value'])
    )
    .subscribe((val) => console.log(val));