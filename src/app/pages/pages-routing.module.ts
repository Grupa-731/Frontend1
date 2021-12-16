import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {PegPageComponent} from "./components/peg-page/peg-page.component";

const routes: Routes = [{
  path: '',
  component: UserComponent, // pagina date user
  children: [{
    path: 'peg',
    component: PegPageComponent
  },
    {
    path: 'feedback',
    component: PegPageComponent // feedback personal
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
