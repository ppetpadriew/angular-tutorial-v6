import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroComponent} from './hero/hero.component';

const routes: Routes = [
    {path: 'heroes', component: HeroListComponent},
    {path: 'hero/:id', component: HeroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
