import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { MatMenuModule, MatSnackBarModule, MatDialogModule,MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import { DashboardModule } from './Dashboard/DashboardModule';
import { SettingsModule } from './Settings/settings.module';
import { CartModule } from './Cart/cart.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { Globals } from './globalVariables';
import { Dialog } from './Dialog/dialog.component';
import { SnackBar } from './SnackBar/snackbar.component';
import { LoginComponent } from './Login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    Dialog,
    SnackBar,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    DashboardModule,
    SettingsModule,
    CartModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
  entryComponents: [ Dialog, SnackBar ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
