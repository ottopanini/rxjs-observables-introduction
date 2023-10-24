import { forkJoin } from 'rxjs';
// Mike is from New Delhi and likes to eat pasta.

import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs';

const randomName$ = ajax<any>(
    'https://random-data-api.com/api/name/random_name'
).pipe(map((response) => response.response.first_name));

const randomNation$ = ajax<any>(
    'https://random-data-api.com/api/nation/random_nation'
).pipe(map((response) => response.response.capital));

const randomFood$ = ajax<any>(
    'https://random-data-api.com/api/food/random_food'
).pipe(map((response) => response.response.dish));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
    ([first_name, capital, dish]) =>
        console.log(`${first_name} is from ${capital} and likes to eat ${dish}.`)
);
