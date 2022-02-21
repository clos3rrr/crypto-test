import { TokenAction, TokenActionTypes } from "../../types/token";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchTokens = () => {
  return async (dispatch: Dispatch<TokenAction>) => {
    try {
      dispatch({ type: TokenActionTypes.FETCH_TOKENS });
      const response = await axios.get("https://api.coincap.io/v2/assets");
      dispatch({
        type: TokenActionTypes.FETCH_TOKENS_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: TokenActionTypes.FETCH_TOKENS_ERROR,
        payload: "Error",
      });
    }
  };
};
