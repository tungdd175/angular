import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {ForecastModel} from '../models/forecastModel';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) {
  }

  private API_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Ha%20Noi&mode=json&units=metric&cnt=7&lang=vi&APPID=421612f4c4fd7e87a2399806a781659c';

  getForecasts(): Observable<any> {
    return this.http.get<ForecastModel>(this.API_URL).pipe(
      tap(data => console.log(`getForecasts ${JSON.stringify(data)}`)),
      catchError(error => of(null))
    );
  }
}
