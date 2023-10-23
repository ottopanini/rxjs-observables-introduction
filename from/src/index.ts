import { of, from } from 'rxjs';

from(of('Alice', 'Ben', 'Charlie')).subscribe((val) => console.log(val));
