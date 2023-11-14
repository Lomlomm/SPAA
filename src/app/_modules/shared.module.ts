import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    TabsModule.forRoot(), 
    ToastrModule.forRoot(
      {
        timeOut: 100000, 
        positionClass: 'toast-bottom-right', 
        preventDuplicates: true,
        progressBar: true, 
      }
    ),
  ], 
  exports: [
    ToastrModule, 
    TabsModule, 
  ]
})
export class SharedModule { }
