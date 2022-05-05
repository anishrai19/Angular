import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit {
  modalHeader = 'New Folder';
  fileName = '';
  response: any = '';
  files: any[] = [];
  folders: any[] = [];
  folderModalOpen = false;
  fileModalOpen = false;
  configOpen = false;
  deleteModalOpen = false;
  errors: String = '';
  delete: boolean = false;
  deleteIndex: number = -1;
  // delete:any []=[];

  folderForm = new FormGroup({
    folderName: new FormControl('', Validators.required),
  });

  fileForm = new FormGroup({
    folderName: new FormControl('', Validators.required),
    fileName: new FormControl('', Validators.required),
  });

  configForm = new FormGroup({
    requestedMaxNumberOfFiles: new FormControl('', Validators.required),
    requestedMaxSizeOfFiles: new FormControl('', Validators.required),
  });

  constructor(private service: StorageService, private route: Router) {}

  ngOnInit(): void {
    this.service.getFolderName().subscribe((response: any) => {
      this.folders = response.data;
      console.log('show all folders');
      console.log(this.folders);
    });
  }

  onOpenModal = (type: string) => {
    switch (type) {
      case 'file':
        this.modalHeader = 'New File';
        this.fileModalOpen = true;
        this.folderModalOpen = false;
        this.configOpen = false;
        break;
      case 'folder':
        this.modalHeader = 'New Folder';
        this.fileModalOpen = false;
        this.folderModalOpen = true;
        this.configOpen = false;
        break;

      case 'config':
        this.modalHeader = 'Request new Configuration';
        this.fileModalOpen = false;
        this.folderModalOpen = false;
        this.configOpen = true;
        break;

      default:
    }
  };

  onCloseModal = (type: string) => {
    switch (type) {
      case 'file':
        this.fileModalOpen = false;
        break;
      case 'folder':
        this.folderModalOpen = false;
        break;
      case 'config':
        this.configOpen = false;
        break;

      default:
    }
  };

  formData: FormData | null = null;
  onFileSelected(event: any) {
    const file: any = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.formData = new FormData();
      this.formData.append('file', file);
      this.formData.append('folderName', this.fileForm.value.folderName);
      console.log(file);
      console.log(this.fileForm.value.folderName);
    }
  }

  onFolderFormSubmit() {
    console.log(this.folderForm.value);
    this.service.onFolderSubmit(this.folderForm.value).subscribe(
      (res: any) => {
        console.log(res);
        alert('Folder Created Successfully');
        this.folderForm.reset();

        this.service.getFolderName().subscribe((response: any) => {
          this.folders = response.data;
          console.log('show all folders');
          console.log(this.folders);
        });
      
      },
      (error: any) => {
        this.errors = error.error.error.errors[0].msg;
        alert(this.errors);
        this.folderForm.reset();
        console.log(this.errors);
      }
    );
  }

  onFileSubmit() {
    console.log(this.formData);
    this.service.FileSubmit(this.formData).subscribe(
      (res: any) => {
        console.log(res.data);
        alert(res.data);
      },
      (error: any) => {
        this.errors = error.error.error;
        alert(this.errors);
        console.log(this.errors);
      }
    );
  }

  onConfigFormSubmit() {
    console.log(this.configForm.value);
    this.service.configFormSubmit(this.configForm.value).subscribe(
      (res: any) => {
        // alert('configuration sent sucessfully');

        this.response = res.data;
        // console.log(res.data);
        alert(res.data);
      },
      (error: any) => {
        this.errors = error.error.error;
        alert(this.errors);
        // window.location.reload();
        console.log(this.errors);
      }
    );
  }

  getAllFiles(data: any) {
    this.service.getAllFileInFolder(data).subscribe((res: any) => {
      console.log(res);
      this.files = res.data;
      console.log(this.files);
    });
    this.route.navigate(['files', data]);
  }

  onRightClick(index: any) {
    // event.preventDefault();
    this.deleteIndex = index;
    this.delete = true;
  }

  deleteFolder(folder: string) {
    const obj = {
      folderName: folder,
    };
    this.service.deleteFolder(obj).subscribe((res: any) => {
      console.log(res);

      this.service.getFolderName().subscribe((response: any) => {
        this.folders = response.data;
        console.log('show all folders');
        console.log(this.folders);
      });
      
    });
  }
}
