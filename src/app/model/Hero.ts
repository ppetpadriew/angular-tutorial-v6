export class Hero {
    public constructor(private name: string, private alterText = '', private power) {
    }

    public getName(): string {
        return this.name;
    }

    public getAlterText(): string {
        return this.alterText;
    }

    public getPower(): string {
        return this.power;
    }
}
