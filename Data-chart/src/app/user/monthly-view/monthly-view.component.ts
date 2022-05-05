import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { io } from 'socket.io-client';
import { UserService } from '../user.service';

@Component({
  selector: 'app-monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.scss'],
})
export class MonthlyViewComponent implements OnInit, AfterViewInit {
  rawData: any[] = [];
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
      borderColor: 'blue',
      backgroundColor: 'rgba(106, 90, 205,0.3)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  data: any;
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  constructor(private userService: UserService, private router: Router) {}

  ngAfterViewInit(): void {
    this.getMonthlyData();
  }

  ngOnInit(): void {
    const socket = io('http://fa0c-1-22-124-182.ngrok.io/');

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('monthly-data', (res: any) => {
      console.log(res);
      this.lineChartData[0].data.shift();
      this.lineChartLabels.shift();
      this.lineChartData[0].data.push(res.sales);
      this.lineChartLabels.push(res.date);
      this.data.push(res);
      this.chart.chart?.update();
    });
  }

  getMonthlyData() {
    this.userService.getMonthlyCharts().subscribe((response: any) => {
      console.log(response);
      this.rawData = response.data;
      this.rawData.reverse();
      for (let data of this.rawData) {
        this.lineChartData[0].data.push(data.sales);
        this.lineChartLabels.push(data.day);
      }
      console.log(this.lineChartData[0].data);
      console.log(this.lineChartLabels);
      this.chart.chart?.update();
    });
  }

  onLogout() {
    this.userService.logout();
  }
}
