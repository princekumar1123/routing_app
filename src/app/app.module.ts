import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { EditUserPageComponent } from './edit-user-page/edit-user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DeleteDialogBoxComponent } from './delete-dialog-box/delete-dialog-box.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    UserListPageComponent,
    UserDetailsPageComponent,
    EditUserPageComponent,
    HomePageComponent,
    DeleteDialogBoxComponent,
    WildCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
