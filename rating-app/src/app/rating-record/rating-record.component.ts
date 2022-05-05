import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RatingService } from '../rating.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-rating-record',
  templateUrl: './rating-record.component.html',
  styleUrls: ['./rating-record.component.scss'],
})
export class RatingRecordComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selectedValue = '';
  tracks: any[] = [];

  form = new FormGroup({
    track: new FormControl(''),
    // averageRating: new FormControl(''),
  });

  tableData = [];

  columnsToDisplay = [
    'name',
    'email',
    'logicRating',
    'communicationRating',
    'assignmentsRating',
    'proactivenessRating',
    'track',
    'action',
  ];
  constructor(
    private service: RatingService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  fetchFilteredReport() {
    return this.service
      .tableDataAccount(this.form.value, 'form/average?')
      .subscribe((res: any) => {
        console.log(res.data);
        this.tableData = res.data;
      });
  }
  updateRating(_id: string) {
    this.router.navigate(['./update', _id]);
    // this.dialog.open(UpdateComponent, {
    //   data: { id: _id },
    // });
  }
  viewHistory(_id: string) {
    this.router.navigate(['./details', _id]);
  }

  ngOnInit(): void {
    this.service
      .displayTrack()
      // .genericApi('get', this.service.url + 'track/display', '')
      .subscribe((res: any) => {
        console.log(res.data);
        this.tracks = res.data;
      });

    this.service
      .displayRecord()
      // .genericApi('get', this.service.url + 'form/average', this.form.value)
      .subscribe((res: any) => {
        console.log(res.data);
        this.tableData = res.data;
      });
  }
}
