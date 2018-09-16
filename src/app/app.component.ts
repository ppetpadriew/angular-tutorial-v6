import {Component, OnInit} from '@angular/core';
import {HeroService} from './services/hero.service';
import {Hero} from './model/Hero';
import {MessageService} from './services/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;

    public heroes: Hero[];

    public constructor(public heroService: HeroService, private messageService: MessageService) {
    }

    public ngOnInit() {
        this.getHeroes();
    }

    public getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes;
            this.selectedHero = this.heroes[0];
        });
    }

    public sayHello(click: boolean) {
        if (click) {
            this.messageService.add('Hello World!!!. The button has been clicked.');
            return;
        }
        this.messageService.add('Nothing happen !!');
    }
}
