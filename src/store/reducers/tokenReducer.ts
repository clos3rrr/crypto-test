import { TokenAction, TokenActionTypes, TokenState } from "../../types/token";

const initialState: TokenState = {
  tokens: [],
  loading: false,
  error: null,
};

export const tokenReducer = (
  state = initialState,
  action: TokenAction
): TokenState => {
  switch (action.type) {
    case TokenActionTypes.FETCH_TOKENS:
      return { loading: true, error: null, tokens: [] };
    case TokenActionTypes.FETCH_TOKENS_SUCCESS:
      return { loading: false, error: null, tokens: action.payload };
    case TokenActionTypes.FETCH_TOKENS_ERROR:
      return { loading: false, error: action.payload, tokens: [] };
    default:
      return state;
  }
};
