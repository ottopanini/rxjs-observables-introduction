import { ajax } from 'rxjs/ajax';

ajax('https://random-data-api.com/api/name/random_name').subscribe((data) =>
    console.log(data)
);
