import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}
  ngAfterViewInit(): void {
    // DATA TABLE
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    // AUTOCOMPLETE
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );

    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }

  title = 'material-demo';
  // BADGES
  notifications = 0;

  // SPINNER
  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  // SIDENAV
  opened = false;

  log(state: string) {
    console.log(state);
  }

  // TABS
  logChange(index: number | null) {
    console.log(index);
  }

  // SELECT
  selectedValue: string = '';

  // AUTOCOMPLETE

  myControl = new FormControl();
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' },
  ];
  filteredOptions: Observable<string[]> | undefined;

  displayFn(subject: any) {
    console.log(subject);
    return subject ? subject.name : undefined;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  // DATEPICKER
  minDate = new Date();
  maxDate = new Date(2099, 1, 25);

  dateFilter = (date: Date | null) => {
    const day = date?.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  // SNACKBAR

  openSnackBar(message: string, action: string) {
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      duration: 2000,
    });
  }

  // DIALOG
  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {
      data: { name: 'Vishwas' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // DATA TABLE
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // displayedColumnsData: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  logData(row: any) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // VIRTUAL SCROLLING
  numbers: any[] = [];
}

@Component({
  selector: 'custom-snackbar',
  template: `<span style="color: orange">Custom Snackbar</span>`,
})
export class CustomSnackBarComponent {}

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DialogExampleComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
