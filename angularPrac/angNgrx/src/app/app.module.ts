import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildNewComponent } from './child-new/child-new.component';

import { HeaderComponent } from './header/header.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewServerComponent } from './new-server/new-server.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemDrivenComponent } from './tem-driven/tem-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import{ HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AuthInterceptor } from './auth.interceptor';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter-reducer';
import { CounterComponent } from './counter/counter.component';
import { appReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildNewComponent,
    HeaderComponent,
    CockpitComponent,
    ServerComponent,
    NewServerComponent,
    ServerStatusComponent,
    HomeComponent,
    ServerComponent,
    ServersComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    TemDrivenComponent,
    ReactiveFormComponent,
    HttpRequestComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //RecipesModule,
    //ShoppingListModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
    //StoreModule.forRoot({counter: counterReducer}),
    //AuthModule
  ],
  // providers: [ {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
