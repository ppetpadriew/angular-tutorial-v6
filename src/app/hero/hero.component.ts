import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../model/Hero';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    @Input()
    public hero: Hero;

    @Input('name')
    public aliasTest: string;

    constructor() {
    }

    ngOnInit() {
    }

}
