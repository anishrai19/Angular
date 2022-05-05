import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
})
export class FilesComponent implements OnInit {
  fileUrl = '';
  files: any = '';
  data: any = '';
  blob: any = '';
 
  constructor(
    private service: StorageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.data = params['data'];
    });
  }

  ngOnInit(): void {
    this.service.getAllFileInFolder(this.data).subscribe((res: any) => {
      console.log('this is response');
      console.log(res);
      this.files = res.data[0];
      console.log(this.files);
    });
  }

  downloadFile(fileUrl: any,fileName:any) {
    console.log(fileUrl);
    this.service
      .onDownload(`user/download?fileUrl=${fileUrl}`)
      .subscribe((res: any) => {
        console.log(res);
        this.blob = new Blob([res], { type: 'text/plain' });
        var link = document.createElement('a');
        var url = window.URL.createObjectURL(res);
        link.href = url;
        link.download = fileName;
        link.click();
      });
  }

  formData: FormData | null = null;
  deleteFile(fileName: any) {
    console.log(this.data);
    console.log(fileName);
    const obj = {
      folderName: this.data,
      fileName: fileName,
    }
    console.log(obj);
    this.service.onDelete(obj).subscribe((res: any) => {
      console.log(res);
      alert(res.data);
        this.service.getAllFileInFolder(this.data).subscribe((res: any) => {
          console.log('this is response');
          console.log(res);
          this.files = res.data[0];
          console.log(this.files);
        });
      // window.location.reload();
    });
  }
}
