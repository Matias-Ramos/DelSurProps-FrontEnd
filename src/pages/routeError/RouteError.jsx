import { useRouteError } from "react-router-dom";
const RouteError = () => {
  const error = useRouteError();
  return (
    <div>
      Route Error
      <p>{error.statusText && error.statusText}</p>
      <p>{error.message && error.message}</p>
    </div>
  );
};

export default RouteError;
