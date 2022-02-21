export interface PortfolioState {
  tokens: IPortfolio[];
  amount: number;
  result: number;
  resultPercent: number;
}
export enum PortfolioActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  UPDATE_PRICE = "UPDATE_PRICE",
  REFRESH_AMOUNT = "REFRESH_AMOUNT",
}
interface PortfolioAddAction {
  type: PortfolioActionTypes.ADD_ITEM;
  payload: IPortfolio;
}
interface PortfolioRemoveAction {
  type: PortfolioActionTypes.REMOVE_ITEM;
  payload: IPortfolio;
}
interface PortfolioUpdatePriceAction {
  type: PortfolioActionTypes.UPDATE_PRICE;
  payload: { token: IPortfolio; newPrice: number };
}
interface PortfolioRefreshAmountAction {
  type: PortfolioActionTypes.REFRESH_AMOUNT;
}

export interface IPortfolio {
  id: string;
  symbol: string;
  price: number;
  count: number;
}
export type PortfolioAction =
  | PortfolioAddAction
  | PortfolioRemoveAction
  | PortfolioUpdatePriceAction
  | PortfolioRefreshAmountAction;
