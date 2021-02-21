import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';

//Services
import { CommentsService } from './services/comments.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TxtareaAutoresizeDirective } from './directives/txtarea-autoresize.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsComponent,
    TxtareaAutoresizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
