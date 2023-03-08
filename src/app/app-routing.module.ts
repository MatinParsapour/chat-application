import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrancementComponent } from './components/entrancement/entrancement.component';

const routes: Routes = [{ path: '', component: EntrancementComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
