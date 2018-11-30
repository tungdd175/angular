import {ForecastTemp} from './forecastTemp';
import {ForecastWeather} from './forecastWeather';

export class ForecastDaily {
  dt: number;
  temp: ForecastTemp;
  pressure: number;
  weather: ForecastWeather;
  speed: number;
  deg: number;
  clouds: number;
}
