import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
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
    ToastrModule
  ]
})
export class SharedModule { }
