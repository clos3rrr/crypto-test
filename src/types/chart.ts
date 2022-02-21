import { IToken } from "./token";
export interface ChartState {
  chartData: ICharthData;
  loading: boolean;
  error: null | string;
  token: null | IToken;
}
export enum ChartActionTypes {
  FETCH_CHART_DATA = "FETCH_CHART_DATA",
  FETCH_CHART_DATA_SUCCESS = "FETCH_CHART_DATA_SUCCESS",
  FETCH_CHART_DATA_ERROR = "FETCH_CHART_DATA_ERROR",
  FETCH_CHART_TOKEN = "FETCH_CHART_TOKEN",
  FETCH_CHART_TOKEN_SUCCESS = "FETCH_CHART_TOKEN_SUCCESS",
  FETCH_CHART_TOKEN_ERROR = "FETCH_CHART_TOKEN_ERROR",
}
interface FetchChartDataAction {
  type: ChartActionTypes.FETCH_CHART_DATA;
}
interface FetchChartDataSuccessAction {
  type: ChartActionTypes.FETCH_CHART_DATA_SUCCESS;
  payload: any[];
}
interface FetchChartDataErrorAction {
  type: ChartActionTypes.FETCH_CHART_DATA_ERROR;
  payload: string;
}

interface FetchChartTokenAction {
  type: ChartActionTypes.FETCH_CHART_TOKEN;
}
interface FetchChartTokenSuccessAction {
  type: ChartActionTypes.FETCH_CHART_TOKEN_SUCCESS;
  payload: any;
}
interface FetchChartTokenErrorAction {
  type: ChartActionTypes.FETCH_CHART_TOKEN_ERROR;
  payload: string;
}

export interface ICharthResponse {
  priceUsd: string;
  time: Date;
  date: string;
}

export interface ICharthData {
  labels: string[];
  datasets: ICharthDataSet[];
}

export interface ICharthDataSet {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

export type ChartAction =
  | FetchChartDataAction
  | FetchChartDataSuccessAction
  | FetchChartDataErrorAction
  | FetchChartTokenAction
  | FetchChartTokenSuccessAction
  | FetchChartTokenErrorAction;
