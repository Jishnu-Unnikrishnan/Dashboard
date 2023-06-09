
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() sideBarToggle = new EventEmitter ()

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.sideBarToggle.emit()
    setTimeout(()=>{
      Window:dispatchEvent(
       new Event('resize')
      )
   },300)

  }

}
