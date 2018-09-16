import {Injectable} from '@angular/core';
import {Hero} from '../model/Hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    public constructor(private messageService: MessageService) {
    }

    public getHeroes(): Observable<Hero[]> {
        const data = [
            {'name': 'Batman', 'alterText': '', 'power': 'Rich'},
            {'name': 'Superman', 'alterText': '', 'power': 'Steel Body'},
            {'name': 'Thor', 'alterText': '', 'power': 'Roaring Thunder'},
        ];
        const heroes: Hero[] = [];
        data.forEach(function (d) {
            heroes.push(new Hero(d.name, d.alterText, d.power));
        });
        this.messageService.add('Fetching Heroes');

        // Basically convert any value into Observable object
        // This is use ful when we want to mock some Observable objects
        // Then the client can consume the Observable object like it does when we
        // Call the actual API
        // return of(heroes);

        // When calling the actual API, it should look something similar to the following
        // But in real app, you wouldn't do like this. You normally call your API via HttpModule
        // provided by Angular
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(heroes);
                this.messageService.add('Heroes fetched.');
            }, 2000);
        });
    }

}
