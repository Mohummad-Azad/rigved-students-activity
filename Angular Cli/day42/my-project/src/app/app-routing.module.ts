import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchComponent } from './fetch/fetch.component';
import { StoreComponent } from './store/store.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {path: "", component : StoreComponent},
  {path: "store", component : StoreComponent},
  {path: "fetch", component : FetchComponent},
  {path: "update", component : UpdateComponent},
  {path: "delete", component : DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
