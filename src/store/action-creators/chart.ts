import { ChartAction, ChartActionTypes } from "../../types/chart";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchChartData = (id: string) => {
  return async (dispatch: Dispatch<ChartAction>) => {
    try {
      dispatch({ type: ChartActionTypes.FETCH_CHART_DATA });
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
      );
      dispatch({
        type: ChartActionTypes.FETCH_CHART_DATA_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: ChartActionTypes.FETCH_CHART_DATA_ERROR,
        payload: "Error",
      });
    }
  };
};

export const fetchChartToken = (id: string) => {
  return async (dispatch: Dispatch<ChartAction>) => {
    try {
      dispatch({ type: ChartActionTypes.FETCH_CHART_TOKEN });
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${id}`
      );
      dispatch({
        type: ChartActionTypes.FETCH_CHART_TOKEN_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: ChartActionTypes.FETCH_CHART_TOKEN_ERROR,
        payload: "Error",
      });
    }
  };
};
