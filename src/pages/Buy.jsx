//Components
import BuyFilters from "../components/filters/Containers/BuyFilters";
import { QyParamsCtxtProvider } from "../context/QyParamsCtxt";
const Buy = () => {
  return (
    <QyParamsCtxtProvider>
      <BuyFilters />
    </QyParamsCtxtProvider>
  );
};

export default Buy;
