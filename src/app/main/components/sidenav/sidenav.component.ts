import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  @Input() open = false; 
  @Output() escapedKeyPressed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.escapedKeyPressed.emit();
  }
}
