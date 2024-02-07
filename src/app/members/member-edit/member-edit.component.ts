import { Component } from '@angular/core';
import { IMember } from 'src/app/_models/imember';
import { take } from 'rxjs';
import { UserInterface } from 'src/app/_models/userInterface';
import { AccountService } from 'src/app/services/account.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent {
  member: IMember | undefined;
  user: UserInterface | null = null;

  constructor(private accountService: AccountService
    , private memberService: MembersService){
      this.accountService.currentUser$.pipe(take(1)).subscribe({
        next: user => this.user = user 
      })
    
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    if(!this.user) return; 
    this.memberService.getMember(this.user.userName).subscribe({
      next: member => this.member = member
    })
  }
}
