import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortUrlListComponent } from './pages/short-url/short-url-list/short-url-list.component';

const routes: Routes = [
  {
    path: "short-url",
    component: ShortUrlListComponent,
    data: {
      title: "short url",
    },
  },
  { path: "**", redirectTo: "short-url" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
