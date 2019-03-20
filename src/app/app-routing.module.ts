import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseFinderComponent } from './components/house-finder/house-finder.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', component: HouseFinderComponent, pathMatch: 'full' },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
