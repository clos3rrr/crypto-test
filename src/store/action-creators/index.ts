import * as TokenActionCreators from "./token";
import * as PortfolioActionCreators from "./portfolio";
import * as ChartActionCreators from "./chart";

export default {
  ...TokenActionCreators,
  ...PortfolioActionCreators,
  ...ChartActionCreators,
};
