import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.scss'],
})
export class BarMenuComponent implements OnInit {
  @Output() driveAction = new EventEmitter();

  constructor(private router: ActivatedRoute, private route: Router,private service:StorageService) {}

  ngOnInit(): void {}

  onClick(type: string) {
    this.driveAction.emit(type);
    // console.log(type);
  }

  logOut(){
    this.service.logout();
  }
}
