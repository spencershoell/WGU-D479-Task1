import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { BeachesComponent } from './beaches/beaches.component';
import { NgModule } from '@angular/core';
import { FaqsComponent } from './faqs/faqs.component';
import { HarborComponent } from './harbor/harbor.component';
import { RainforestsComponent } from './rainforests/rainforests.component';
import { MountainsComponent } from './mountains/mountains.component';
import { VolcanoComponent } from './volcano/volcano.component';
import { TanitiCityComponent } from './taniti-city/taniti-city.component';
import { LodgingComponent } from './lodging/lodging.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TransportationComponent } from './transportation/transportation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'beaches', component: BeachesComponent },
    { path: 'harbor', component: HarborComponent },
    { path: 'rainforests', component: RainforestsComponent },
    { path: 'mountains', component: MountainsComponent },
    { path: 'volcano', component: VolcanoComponent },
    { path: 'taniti-city', component: TanitiCityComponent },
    { path: 'lodging', component: LodgingComponent },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'transportation', component: TransportationComponent },
    { path: 'faqs', component: FaqsComponent },
    // Here add new pages component

    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }