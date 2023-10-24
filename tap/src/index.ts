import { filter, map, of, tap } from 'rxjs';

of(1, 7, 3, 6, 2)
    .pipe(
        filter((val) => val > 5),
        tap((val) => console.log('spy: ', val)),
        map((val) => val * 2)
    )
    .subscribe((val) => console.log('output: ', val));