import {Component, OnInit} from '@angular/core';
import {HeroService} from '../services/hero.service';
import {Hero} from '../model/Hero';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes = heroes);
    }
}
