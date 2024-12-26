import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  myVal:string;
  st:string;
  constructor() { 
    console.log("Constructor Called");
  }

  ngOnInit() {
    console.log("ngOnInit Called");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck Called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy Called");
  }
}
