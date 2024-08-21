import { CityDetailsUI } from "./CityDetailsUI";
import { useCityDetailsScreen } from "./useCityDetailsScreen";

export default function CityDetailsScreen({ navigation }) {
  const props = useCityDetailsScreen(navigation);

  return <CityDetailsUI {...props} />;
}
