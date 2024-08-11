import { CountriesUI } from "./CountriesUI";
import { useCountries } from "./useCountries";

export function Countries() {
  const props = useCountries();

  return <CountriesUI {...props} />;
}
