import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './core/app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './core/pet-tag.reducer';
import { TagShapeComponent } from './pages/create/tag-shape/tag-shape.component';
import { FormsModule } from '@angular/forms';
import { petTagKey } from './core/constant';
import { TagTextComponent } from './pages/create/tag-text/tag-text.component';
import { TagExtrasComponent } from './pages/create/tag-extras/tag-extras.component';
import { TagPreviewComponent } from './tag-preview/tag-preview.component';
import { PetTagEffect } from './core/pet-tag.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
    TagTextComponent,
    TagExtrasComponent,
    TagPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ petTagKey: petTagReducer }),
    EffectsModule.forRoot(PetTagEffect),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
