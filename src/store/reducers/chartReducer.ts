import { ICharthDataSet } from './../../types/chart';
import { ChartAction, ChartActionTypes, ChartState } from "../../types/chart";

const initialState: ChartState = {
  chartData: {labels: [], datasets: []},
  loading: false,
  error: null,
  token: null
};

export const chartReducer = (
  state = initialState,
  action: ChartAction
): ChartState => {
  switch (action.type) {
    case ChartActionTypes.FETCH_CHART_DATA:
      return {...state, loading: true, error: null };
    case ChartActionTypes.FETCH_CHART_DATA_SUCCESS:
      {
        const newLabels: string[] = [];
        const newDataSet: ICharthDataSet = {
          label: "Price (USD)",
          data: [],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        };
        for (let i: number = 0; i <= action.payload.length - 1; i += 5) {
          const date = new Date(action.payload[i].date);
          newLabels.push(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`);
          newDataSet.data.push(Number(action.payload[i].priceUsd));
        }
        return {...state, loading: false, error: null, chartData: {labels: newLabels, datasets: [newDataSet]}};
      }
    case ChartActionTypes.FETCH_CHART_DATA_ERROR:
      return {...state, loading: false, error: action.payload};
    case ChartActionTypes.FETCH_CHART_TOKEN:
        return {...state, loading: true, error: null, token: null}
    case ChartActionTypes.FETCH_CHART_TOKEN_SUCCESS:
        return {...state, loading: false, error: null, token: action.payload}
    case ChartActionTypes.FETCH_CHART_TOKEN_ERROR:
        return {...state, loading: false, error: action.payload, token: null}
    default:
      return state;
  }
};
