import {Input} from '@angular/core';

export class Hero {
    public constructor(@Input() public name: string, public alterText = '', public power) {
    }

}
