import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BlankImageComponent } from './blank-image/blank-image.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BlankImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
