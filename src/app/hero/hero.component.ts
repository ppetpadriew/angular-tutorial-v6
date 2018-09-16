import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../model/Hero';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    @Input()
    public hero: Hero;

    @Output()
    public isClicked = new EventEmitter<boolean>();

    @Input('name')
    public aliasTest: string;

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.hero = this.heroService.selected;
    }

    public onClick() {
        this.isClicked.emit(true);
    }

}
