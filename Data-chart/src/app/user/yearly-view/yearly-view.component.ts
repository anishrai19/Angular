import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { UserService } from '../user.service';
@Component({
  selector: 'app-yearly-view',
  templateUrl: './yearly-view.component.html',
  styleUrls: ['./yearly-view.component.scss'],
})
export class YearlyViewComponent implements OnInit, AfterViewInit {
  rawData: any[] = [];
  yearData: any[] = [];
  salesData: any[] = [];

  lineChartType: ChartType = 'line';
  lineChartData: ChartDataset[] = [
    {
      data: [],
      label: 'Sales info',
    },
  ];
  lineChartLabels: any = [];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  constructor(private userService: UserService, private router: Router) {}

  ngAfterViewInit(): void {
    this.getYearlyData();
  }

  ngOnInit(): void {}

  getYearlyData() {
    this.userService.getYearlyCharts().subscribe((response: any) => {
      console.log(response);
      this.rawData = response.data;
      this.rawData.reverse();
      for (let data of this.rawData) {
        // console.log(data);
        this.lineChartData[0].data.push(data.sales);
        this.lineChartLabels.push(data.year);
      }
      this.chart.chart?.update();
    });
  }

  onLogout() {
    this.userService.logout();
  }
}
