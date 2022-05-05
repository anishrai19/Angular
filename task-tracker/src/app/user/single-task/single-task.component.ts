import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
})
export class SingleTaskComponent implements OnInit {
  fileName = '';
  title = 'File Upload';
  fileSubmitModal: boolean = false;
  completedTaskId: string = '';
  userData = '';
  cycleId = '';
  file!: File;
  tasks: any[] = [];
  cycles: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe((response: any) => {
      this.userData = response.data;
      // console.log(this.userData);
      this.cycleId = response.data.cycle[0]._id;
      // console.log(this.cycleId);
    });
  }

  uploadForm = new FormGroup({
    fileName: new FormControl(''),
    certificationDate: new FormControl(''),
  });

  get formUploadValue() {
    return this.uploadForm.get('fileName');
  }
  get formUploadDate() {
    return this.uploadForm.get('certificationDate');
  }


  onFileSelected(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('activityId', this.completedTaskId);
    console.log(formData);

    this.userService.sendTaskData(formData).subscribe(
      (response: any) => {
        console.log(response);
        alert(response.data);

      }
      // (error: HttpErrorResponse) => {
      //   alert(error.error.error.message);
      // },
    );
    this.uploadForm.reset();
    this.fileSubmitModal = false;
    
  //  window.location.reload();
  }

  openModal(taskId: any) {
    console.log('cmkdsn');
    console.log(taskId);
    this.fileSubmitModal = true;
    this.completedTaskId = taskId;
  }

  onCloseModal() {
    this.fileSubmitModal = false;
  }
}
