import {Component, OnInit} from '@angular/core';
import {HeroService} from './services/hero.service';
import {Hero} from './model/Hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'angular-v6';

    public heroes: Hero[];

    public constructor(public heroService: HeroService) {
    }

    public ngOnInit() {
        this.getHeroes();
    }

    public getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }
}
