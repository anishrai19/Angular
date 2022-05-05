import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project05';
  leaves=
  [
    {date:'18-03-2022',day:'saturday',name:'Holi'},
    {date:'12-04-2022',day:'sunday',name:'dewali'},
    {date:'1-06-2022',day:'wednesday',name:'makasankranti'},
    {date:'8-07-2022',day:'friday',name:'rakshabandhan'},
    {date:'25-08-2022',day:'wednesday',name:'mahashivratri'}
  ];
  date='';
  day='';
  name='';
}
