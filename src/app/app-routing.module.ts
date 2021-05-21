import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationsContainerComponent } from './medications-container/medications-container.component';

const routes: Routes = [
  { path: 'medications', component: MedicationsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
