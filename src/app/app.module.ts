import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the RangeNavigatorModule for the RangeNavigator component
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService} from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RangeNavigatorModule, ChartModule
  ],
  providers: [AreaSeriesService, DateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
