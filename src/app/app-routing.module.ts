import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/product/create/create.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { ListComponent } from './components/product/list/list.component';
import { UpdateComponent } from './components/product/update/update.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'update', component: UpdateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
