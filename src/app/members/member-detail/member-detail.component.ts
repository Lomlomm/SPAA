import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMember } from 'src/app/_models/imember';
import { MembersService } from 'src/app/services/members.service';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-member-detail',
  standalone: true, 
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
  imports: [CommonModule, TabsModule, GalleryModule],
  
})
export class MemberDetailComponent implements OnInit{
  member: IMember | undefined; 
  images: GalleryItem[] = [];

  constructor(private membersService: MembersService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.loadMember();
  }
  
  loadMember(){
    const username = this.route.snapshot.paramMap.get("username"); 
    if(!username) return;
    this.membersService.getMember(username).subscribe({
      next: member =>{
        this.member = member,
        this.getImages()
      }
    });
  }
  getImages() {
    if (!this.member) return;
    for (const photo of this.member?.Photos) {
      this.images.push(new ImageItem({ src: photo.Url, thumb: photo.Url }));
      this.images.push(new ImageItem({ src: photo.Url, thumb: photo.Url }));
    }
  }
}
