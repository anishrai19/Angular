import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/master.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  TaskContainerComponent = TaskContainerComponent;
  // constructor(private router:Router){}
  static index0: any;
  static index1: any;
  static index2: any;
  tasks: any[] = [];
  cycles: any[] = [];
  disabled: boolean = true;
  status = {
    COMPLETED: 'Completed',
    PENDING: 'Pending',
  };
  nextCycleStatus: boolean = false;
  // modalOpen:any;
  @Output() modalOpen = new EventEmitter();
  constructor(
    private userService: UserService,
    private router: Router,
    private masterService: MasterService
  ) {
    TaskContainerComponent.index0 = 0;
    TaskContainerComponent.index1 = 1;
    TaskContainerComponent.index2 = 2;
  }

  ngOnInit(): void {
    // this.userService.getUserData().subscribe((response: any) => {
    //   console.log(response);
    //   this.cycles = response.data.cycle;
    //   console.log(this.cycles);

    //   this.tasks = this.cycles[0].activity;
    //   console.log(this.tasks);
    // });
    this.userService.nextCycle().subscribe((response: any) => {
      console.log(response);
      this.cycles = response.data;
      console.log(this.cycles);

      this.tasks = this.cycles[0].activity;
      console.log(this.tasks);
      this.checkNextCycle();
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  onOpenTask(activityId: string) {
    console.log(activityId);
    this.modalOpen.emit(activityId);
  }
  subCycle(index: number) {
    // this.masterService.setCycle(index);
    this.userService.getUserData().subscribe((response: any) => {
      console.log(response);
      this.cycles = response.data.cycle;
      this.tasks = this.cycles[index].activity;
      console.log(this.tasks);
    });
  }
  checkNextCycle() {
    this.userService.checkNextCycle().subscribe((res: any) => {
      this.nextCycleStatus = res.data;
    });
  }
  nextCycleData() {
    this.userService.nextCycle().subscribe((response: any) => {
      this.cycles = response.data.cycle;
      this.tasks = this.cycles[0].activity;
    });
  }
  nextCycle() {
    this.userService.nextCycleData().subscribe((response: any) => {
      // console.log('dsadasd'+response);
      this.nextCycleData();
      
    });
  }
}
