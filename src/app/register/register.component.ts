import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // @Input() usersFromHomeComponent: any; // significa que somos capaces de recibir de otro componente o lugar un valor 
  @Output() cancelRegister = new EventEmitter(); // emite eventos o seniales para que los demás componentes lo puedan recibir 
  // accountService: AccountService 

  model: any = {};
  
  constructor (
    private accountService: AccountService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {

  }
  
  register(): void{
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel(); 
      }, 
      error : error => this.toastr.error(error.error)
    })
  }

  cancel(): void {
    this.cancelRegister.emit(false)
  }

}
