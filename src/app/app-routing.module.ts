import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmitGuptaComponent } from './amit-gupta/amit-gupta.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: 'home/:id', component: AppComponent },
  { path: 'ppplayer/:videoId/:userName/:flag', component: AmitGuptaComponent },
  { path: 'ppplayer', component: AmitGuptaComponent },
  { path: 'ppplayer/:videoId/:userName', component: AmitGuptaComponent },
  { path: 'ppplayer/:videoId/:userName', component: AmitGuptaComponent },
  // { path: '**',redirectTo:"ppplayer/:id", component: AppComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
