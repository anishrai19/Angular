import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment5';
  newPerson = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams = 0;
  Teams:string[][]=[]
  addMember() {
    if (!this.newPerson) {
      this.errorMessage = 'Please enter the name';
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newPerson);
    this.newPerson = '';
  }

  onInput(member: string) {
    this.newPerson = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeam(){
    if(!this.numberOfTeams|| this.numberOfTeams<=0){
      this.errorMessage='Invalid Input'
      return
    }
    if(this.members.length<this.numberOfTeams){
       this.errorMessage='Not Enough input'; 
    }
    this.errorMessage = '';
    const newMembers=[...this.members];
    
   while(newMembers.length){
     for (let i = 0; i < this.numberOfTeams; i++) {
       const randomIndex = Math.floor(Math.random() * newMembers.length);
       const member = newMembers.splice(randomIndex, 1)[0];
       if(!member)break;
       if (this.Teams[i]) {
         this.Teams[i].push(member);
       } else {
         this.Teams[i] = [member];
       }
     }
   }
    this.members=[];
    // this.numberOfTeams="";
  }
}
