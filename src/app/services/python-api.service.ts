import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Models, PredictionResponse} from '../models/prediction-response';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PythonApiService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  predict(model: string): Observable<PredictionResponse> {
    const formData: FormData = new FormData();
    formData.append('model', model);
    return this.http.post<PredictionResponse>( this.baseUrl + 'predict', formData);
  }

  load(): Observable<Models> {
    return this.http.get<Models>(this.baseUrl + 'load');
  }
}
