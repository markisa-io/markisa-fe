import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'myprofile', loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyProfileModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
