import { Component, Input } from '@angular/core';
interface Idetails{
  info:string;
  src:string;
  alt:string;

}

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.scss']
})
export class LeaveDetailComponent {

  @Input() details:Idetails[]=[];
  detailsOfImage='';
  onClickInformation(index:number){
   this.detailsOfImage=this.details[index].info;
  }

}
