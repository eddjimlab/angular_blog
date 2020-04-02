import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {StorageModule} from '../admin/shared/lib/storage.module';

@NgModule({
  imports: [
    HttpClientModule,
    StorageModule.forRoot(),
    QuillModule.forRoot(),
  ],
  exports: [
    HttpClientModule,
    QuillModule,
    StorageModule,
  ]
})
export class SharedModule {

}
