import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BlankImageComponent } from './blank-image/blank-image.component';
import { TryingEventsComponent } from './trying-events/trying-events.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BlankImageComponent,
    TryingEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
