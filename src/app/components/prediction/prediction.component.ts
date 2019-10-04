import { Component, OnInit } from '@angular/core';
import {PythonApiService} from '../../services/python-api.service';
import {Models, PredictionResponse} from '../../models/prediction-response';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  constructor(private pythonService: PythonApiService) { }
  model = 'model1';
  predictionResponse: PredictionResponse;
  models: Models;

  ngOnInit() {
  }

  predict() {
    this.pythonService.predict(this.model).subscribe(data => {
      this.predictionResponse = data;
      console.log(this.predictionResponse.data[0].class);
    },
      () => alert('could not connect to API'));
  }

  load() {
    this.pythonService.load().subscribe(data => {
      this.models = data;
      console.log(this.models);
    },
      () => alert('could not connect to API'));
  }
}
