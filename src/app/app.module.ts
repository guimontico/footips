import { fixtureReducer } from './state/fixtures/fixture.reducer';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TipsComponent } from './pages/tips/tips.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FixturesEffects } from './state/fixtures/fixture.effects';
import { InputComponent } from './components/input/input.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { SelectorComponent } from './components/selector/selector.component';
import { SearchComponent } from './features/search/search.component';
import { FixtureListComponent } from './features/fixture-list/fixture-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TipsComponent,
    InputComponent,
    DatepickerComponent,
    SelectorComponent,
    SearchComponent,
    FixtureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    StoreModule.forRoot({ fixtures: fixtureReducer}, {}),
    EffectsModule.forRoot([FixturesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
