import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ModelCardComponent} from './components/model/model-card/model-card.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";

import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupComponent } from './components/signup/signup.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelCardComponent,
    AdminPanelComponent,
    HeaderComponent,
    LoginComponent,
    VideosListComponent,
    VideoPlayerComponent,
    LoginFormComponent,
    SignupComponent,
    FavoritesComponent,
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserModule,
    RouterLink,
    RouterOutlet,
    RouterModule.forRoot([
      // {path: 'modeldetails', component: ModeldetailsComponent},
      {path: 'home', component: HomeComponent},
      {path: 'favorites', component: FavoritesComponent},
      {path: 'videos', component: VideosListComponent},
     {path: 'login', component: LoginComponent},
     {path: 'login-form', component: LoginFormComponent},
     {path: 'signup', component: SignupComponent},
      {path: 'admin', component: AdminPanelComponent},
      {path: 'videoplayer', component: VideoPlayerComponent},
      // {path: 'profile', component: UserProfileComponent},
      {path: '**', redirectTo: '/home'},
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
