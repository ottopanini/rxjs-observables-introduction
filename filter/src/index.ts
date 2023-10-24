import { Observable } from 'rxjs';
import { filter } from 'rxjs';

interface NewsItem {
    category: 'Business' | 'Sports';
    content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
    setTimeout(
        () => subscriber.next({ category: 'Business', content: 'A' }),
        1000
    );
    setTimeout(() => subscriber.next({ category: 'Sports', content: 'B' }), 3000);
    setTimeout(
        () => subscriber.next({ category: 'Business', content: 'C' }),
        4000
    );
    setTimeout(() => subscriber.next({ category: 'Sports', content: 'D' }), 6000);
    setTimeout(
        () => subscriber.next({ category: 'Business', content: 'E' }),
        7000
    );
});

newsFeed$
    .pipe(filter((item) => item.category === 'Sports'))
    .subscribe((item) => console.log(item.content));