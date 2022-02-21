import {
  PortfolioAction,
  PortfolioActionTypes,
  IPortfolio,
} from "../../types/portfolio";
import { Dispatch } from "redux";

export const addToken = (payload: IPortfolio) => {
  return (dispatch: Dispatch<PortfolioAction>) => {
    dispatch({ type: PortfolioActionTypes.ADD_ITEM, payload });
  };
};

export const removeToken = (payload: IPortfolio) => {
  return (dispatch: Dispatch<PortfolioAction>) => {
    dispatch({ type: PortfolioActionTypes.REMOVE_ITEM, payload });
  };
};

export const updatePrice = (payload: {
  token: IPortfolio;
  newPrice: number;
}) => {
  return (dispatch: Dispatch<PortfolioAction>) => {
    dispatch({ type: PortfolioActionTypes.UPDATE_PRICE, payload });
  };
};

export const refreshAmount = () => {
  return (dispatch: Dispatch<PortfolioAction>) => {
    dispatch({ type: PortfolioActionTypes.REFRESH_AMOUNT });
  };
};
