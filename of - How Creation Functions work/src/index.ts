import { of } from 'rxjs';

of('Alice', 'Ben', 'Charlie').subscribe((value) => console.log(value));