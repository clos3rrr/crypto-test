export interface TokenState {
  tokens: IToken[];
  loading: boolean;
  error: null | string;
}
export enum TokenActionTypes {
  FETCH_TOKENS = "FETCH_TOKENS",
  FETCH_TOKENS_SUCCESS = "FETCH_TOKENS_SUCCESS",
  FETCH_TOKENS_ERROR = "FETCH_TOKENS_ERROR",
}
interface FetchTokensAction {
  type: TokenActionTypes.FETCH_TOKENS;
}
interface FetchTokensSuccessAction {
  type: TokenActionTypes.FETCH_TOKENS_SUCCESS;
  payload: any[];
}
interface FetchTokensErrorAction {
  type: TokenActionTypes.FETCH_TOKENS_ERROR;
  payload: string;
}
export interface IToken {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export type TokenAction =
  | FetchTokensAction
  | FetchTokensSuccessAction
  | FetchTokensErrorAction;
