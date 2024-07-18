import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () => import('./components/private/private.module').then(m => m.PrivateModule),
  },
  {
    path: '',
    loadChildren: () =>import('./components/public/public.module').then(m => m.PublicModule),
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
