import { NgModule } from '@angular/core';
import { ServicelibComponent } from './servicelib.component';
import { DemoMaterialModule } from './modules/material-module';
import { AddeditServiceComponent ,Modal} from './Component/addedit-service/addedit-service.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload-lib-influxiq';

@NgModule({
  declarations: [ServicelibComponent,AddeditServiceComponent,Modal],
  imports: [
    DemoMaterialModule,
    HttpClientModule,
    RouterModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    ListingModule,
    FileUploadModule
  ],
  exports: [ServicelibComponent,AddeditServiceComponent,Modal],
  entryComponents:[Modal]
})
export class ServicelibModule { }
