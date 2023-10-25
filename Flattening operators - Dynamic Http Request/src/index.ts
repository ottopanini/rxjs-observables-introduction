import { concatMap, fromEvent, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const endpointInput: HTMLInputElement =
    document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

fromEvent(fetchButton, 'click')
    .pipe(
        map(() => endpointInput.value),
        concatMap((value) =>
            ajax(`https://random-data-api.com/api/${value}/random_${value}`)
        )
    )
    .subscribe({
        next: (val) => console.log(val),
        error: (err) => console.log('Error: ', err),
    });
