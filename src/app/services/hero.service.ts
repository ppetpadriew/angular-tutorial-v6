import {Injectable} from '@angular/core';
import {Hero} from '../model/Hero';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    public constructor() {
    }

    public getHeroes(): Observable<Hero[]> {
        const data = [
            {'name': 'Hero 1', 'alterText': '', 'power': 'test power'},
            {'name': 'Hero 2', 'alterText': '', 'power': 'test power'},
            {'name': 'Hero 3', 'alterText': '', 'power': 'test power'},
        ];
        const heroes: Hero[] = [];
        data.forEach(function (d) {
            heroes.push(new Hero(d.name, d.alterText, d.power));
        });

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
            }, 2000);
        });
    }

}
