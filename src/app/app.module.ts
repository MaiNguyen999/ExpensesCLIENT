import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//services
import {EntryService} from './entry.service';
import { AppRouterModule } from './app-router.module';
import {  HttpClientModule } from '@angular/common/http';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { NewEntryComponent } from './new-entry/new-entry.component';

//forms
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, MatButtonModule, MatTableModule,MatToolbarModule,
    ReactiveFormsModule,
    MatInputModule,MatCardModule,MatSelectModule, MatDialogModule,
    AppRouterModule,
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
