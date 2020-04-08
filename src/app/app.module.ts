import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BlankImageComponent } from './blank-image/blank-image.component';
import { TryingEventsComponent } from './trying-events/trying-events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { FirstDirectiveComponent } from './first-directive/first-directive.component';
import { UseConditionsComponent } from './use-conditions/use-conditions.component'

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BlankImageComponent,
    TryingEventsComponent,
    TwoWayBindingComponent,
    FirstDirectiveComponent,
    UseConditionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
