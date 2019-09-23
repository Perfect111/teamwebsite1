import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporatePageComponent  } from './pages/corporate-page/corporate-page.component';

const routes: Routes = [
  { path:  '', component:  CorporatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
