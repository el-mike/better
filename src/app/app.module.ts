import {
  BrowserModule,
} from '@angular/platform-browser';

import {
  NgModule,
} from '@angular/core';

import {
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';

import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';

import {
  StoreModule,
} from '@ngrx/store';

import {
  EffectsModule,
} from '@ngrx/effects';

import {
  StoreDevtoolsModule,
} from '@ngrx/store-devtools';

import {
  TranslateModule,
  TranslateLoader,
} from '@ngx-translate/core';

import {
  TranslateHttpLoader,
} from '@ngx-translate/http-loader';

import {
  CoreModule,
} from './core';

import {
  THEMES_CONFIG,
  LANGUAGES_CONFIG,
  ENVIRONMENT,
  BETS_CONFIG,
} from './common';

import {
  themesConfig,
  languagesConfig,
  betsConfig,
} from './configs';

import { appReducers } from './+state';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    CoreModule,
  ],
  providers: [
    { provide: THEMES_CONFIG, useValue: themesConfig || [] },
    { provide: LANGUAGES_CONFIG, useValue: languagesConfig || [] },
    { provide: ENVIRONMENT, useValue: environment },
    { provide: BETS_CONFIG, useValue: betsConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
