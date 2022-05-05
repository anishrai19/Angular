import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {

  @Input() team:string[]=[]
  @Input() index=0;
  constructor() { }

  ngOnInit(): void {
  }

}
