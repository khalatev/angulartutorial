import { Component, Input, OnChanges, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit,OnChanges {
 @Input() myValProp: string;
 propChanges:string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Called");
  }
}
