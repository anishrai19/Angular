import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sallonservice } from '../sallon.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ITableData } from '../tableData';

interface serviceBy {
  name: string;
}
interface ratings {
  value: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private saloneService: Sallonservice) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  tableData!: MatTableDataSource<ITableData>;

  // services: any = [];
  // serviceby: any = [];
  filterData = [];
  selectedValue: string = '';
  person = [];
  service = [];
  dataTable: any = [
    // {
    //   name: 'anish',
    //   age: 23,
    //   email: 'anish@gmail.com',
    //   seviceRating: 4,
    //   ambienceRating: 3,
    //   cleanlinessRating: 3,
    //   comments: 'cneojrn',
    //   overallAverage: 3,
    // },
  ];

  services: any = [
    // { name: 'Hair cut', _id: 'niifuer' },
    // { name: 'Shave', _id: '898240984' },
    // { name: 'Full Body Massage', _id: '20980498' },
    // { name: 'Hair Spa', _id: '2898409849' },
  ];

  serviceby: any = [
    // { name: 'rohan', _id: 'cgchghjg' },
    // { name: 'rahul', _id: '987987' },
    // { name: 'rajesh', _id: '879809809' },
    // { name: 'ramesh', _id: '767988789' },
  ];

  ngOnInit(): void {
    this.saloneService
      .get(this.saloneService.url + 'user/display')
      .subscribe((response: any) => {
        this.serviceby = response.data;
      });

    this.saloneService
      .get(this.saloneService.url + 'service/display')
      .subscribe((response: any) => {
        this.services = response.data;
      });

    // this.saloneService
    //   .get(this.saloneService.url + 'form/filteraverage')
    //   .subscribe((response: any) => {
    //     console.log(response.data);
    //     this.dataTable = response.data;
    //   });

    this.saloneService
      .sendToken('form/filteraverage')
      .subscribe((response: any) => {
        this.dataTable = new MatTableDataSource(response.data);
        console.log(response.data);
      });
  }

  searchForm = new FormGroup({
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    serviceBy: new FormControl(''),
    servicesAvailed: new FormControl(''),
    overallAverage: new FormControl(''),
  });

  displayedColumns: string[] = [
    'Customer-Name',
    'Customer-Age',
    'Customer-Email',
    'Service-Rating',
    'Ambience-Rating',
    'Cleanliness-Rating',
    'Comments',
    'Created-At',
    'Overall-Average',
  ];

  onSubmit() {
    this.filterData = this.searchForm.value;
    console.log(this.filterData);
    this.saloneService
      .tableData(this.searchForm.value)
      .subscribe((tabRes: any) => {
        this.dataTable = new MatTableDataSource(tabRes.data); 
      });
  }
  selectedValue1 = 0;

  ratings: ratings[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];
}
