import { Component, Input } from '@angular/core';
interface Ileaves {
  day: string;
  name: string;
  date: string;
}

@Component({
  selector: 'app-leaves-formate',
  templateUrl: './leaves-formate.component.html',
  styleUrls: ['./leaves-formate.component.scss'],
})
export class LeavesFormateComponent {
  fday = '';
  fname = '';
  fdate = '';
  pday = '';
  pname = '';
  pdate = '';
  @Input() leaves: Ileaves[] = [];

  addToFloater(index: number | any) {
    this.fday = this.leaves[index].day;
    this.fdate = this.leaves[index].date;
    this.fname = this.leaves[index].name;
    // this.leaves[index].day = '';
    // this.leaves[index].date = '';
    // this.leaves[index].name = '';
  }
  addToPlanned(index: number) {
    this.pday = this.leaves[index].day;
    this.pdate = this.leaves[index].date;
    this.pname = this.leaves[index].name;
    // this.leaves[index].day = '';
    // this.leaves[index].date = '';
    // this.leaves[index].name = '';
  }
  // addToAllLeavesP(index: number) {
  //   this.leaves[index].day = this.pday;
  //   this.leaves[index].date = this.pdate;
  //   this.leaves[index].name = this.pname;
  //   this.pday = '';
  //   this.pdate = '';
  //   this.pname = '';
  // }
  // addToAllLeavesF(index: number) {
  //   this.leaves[index].day = this.fday;
  //   this.leaves[index].date = this.fdate;
  //   this.leaves[index].name = this.fname;
  //   this.fday = '';
  //   this.fdate = '';
  //   this.fname = '';
  // }
}
