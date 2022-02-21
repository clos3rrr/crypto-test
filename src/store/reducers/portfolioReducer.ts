import {
  PortfolioAction,
  PortfolioActionTypes,
  PortfolioState,
  IPortfolio,
} from "../../types/portfolio";

const initialState: PortfolioState = {
  tokens: JSON.parse(localStorage.getItem("PORTFOLIO") || "[]"),
  amount: Number(JSON.parse(localStorage.getItem("AMOUNT") || "0")),
  result: 0,
  resultPercent: 0,
};

export const portfolioReducer = (
  state = initialState,
  action: PortfolioAction
): PortfolioState => {
  switch (action.type) {
    case PortfolioActionTypes.ADD_ITEM: {
      const existsInArray = state.tokens.some(
        (token: IPortfolio) => token.id === action.payload.id
      );
      const result: number =
        state.amount +
        action.payload.count * action.payload.price -
        state.amount;
      const resultPercent: number =
        state.amount !== 0 ? (result * 100) / state.amount : 100;
      if (!existsInArray) {
        localStorage.setItem(
          "PORTFOLIO",
          JSON.stringify([...state.tokens, action.payload])
        );
        return {
          ...state,
          tokens: [...state.tokens, action.payload],
          result,
          resultPercent,
        };
      } else {
        localStorage.setItem(
          "PORTFOLIO",
          JSON.stringify(
            state.tokens.map((token: IPortfolio) =>
              token.id === action.payload.id
                ? { ...token, count: token.count + action.payload.count }
                : token
            )
          )
        );
        return {
          ...state,
          tokens: state.tokens.map((token: IPortfolio) =>
            token.id === action.payload.id
              ? { ...token, count: token.count + action.payload.count }
              : token
          ),
          result,
          resultPercent,
        };
      }
    }
    case PortfolioActionTypes.REMOVE_ITEM: {
      localStorage.setItem(
        "PORTFOLIO",
        JSON.stringify(
          state.tokens.filter(
            (token: IPortfolio) => token.id !== action.payload.id
          )
        )
      );
      const result: number =
        state.amount -
        action.payload.count * action.payload.price -
        state.amount;
      const resultPercent: number =
        state.amount !== 0 ? (result * 100) / state.amount : 100;
      return {
        ...state,
        tokens: state.tokens.filter(
          (token: IPortfolio) => token.id !== action.payload.id
        ),
        result,
        resultPercent,
      };
    }
    case PortfolioActionTypes.UPDATE_PRICE: {
      return {
        ...state,
        tokens: state.tokens.map((token: IPortfolio) =>
          token.id === action.payload.token.id
            ? { ...token, price: action.payload.newPrice }
            : token
        ),
      };
    }
    case PortfolioActionTypes.REFRESH_AMOUNT: {
      const newAmount = state.tokens.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.count * currentValue.price,
        0
      );
      return { ...state, amount: newAmount };
    }

    default:
      return state;
  }
};
