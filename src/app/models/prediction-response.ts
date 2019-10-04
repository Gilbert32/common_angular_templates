export interface PredictionResponse {
  data: Array<Prediction>;
}

export interface Prediction {
  class: string;
  accuracy: number;
}

export interface Models {
  data: Array<string>;
}
