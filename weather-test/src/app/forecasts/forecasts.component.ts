import {Component, OnInit} from '@angular/core';
import {ForecastDaily} from '../../models/forecastDaily';
import {ForecastService} from '../forecast.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {

  constructor(public forecastService: ForecastService) {
  }

  forecastDaily: ForecastDaily;

  ngOnInit() {
    this.forecastService.getForecasts().subscribe(data => this.forecastDaily = data.list);
  }

}
