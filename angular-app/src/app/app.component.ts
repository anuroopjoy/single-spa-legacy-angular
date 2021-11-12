import {
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, DoCheck {
  title = 'angular-app';
  ngOnInit(): void {
    console.log(
      'newAngularApp status',
      (window as any).singleSpa.getAppStatus('newAngularApp')
    );
  }
  ngOnDestroy(): void {
    console.log(
      'newAngularApp status',
      (window as any).singleSpa.getAppStatus('newAngularApp')
    );
  }
  ngDoCheck(): void {
    console.log(
      'newAngularApp status',
      (window as any).singleSpa.getAppStatus('newAngularApp')
    );
  }
}
