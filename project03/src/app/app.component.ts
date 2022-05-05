import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project03';

  images = [
    {
      img: 'Toyota 4 door truck',
      src: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'ford',
    },
    {
      img: 'On top of the mountains',
      src: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'background',
    },
    {
      img: 'working table',
      src: 'https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'keyboard',
    },
  ];

  info = '';
  src = '';
  alt = '';
}
