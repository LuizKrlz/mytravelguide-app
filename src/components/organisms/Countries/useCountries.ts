import { faker } from "@faker-js/faker";
import { useNavigation } from "@react-navigation/native";

export function useCountries() {
  const navigation = useNavigation();

  const data = [
    {
      id: faker.string.uuid(),
      title: "Taimahal, India",
      subtitle: "Starting at $2000",
      image: {
        uri: faker.image.urlLoremFlickr({
          category: "india,tajmahal",
        }),
      },
      isFavorite: true,
    },
    {
      id: faker.string.uuid(),
      title: "Paris, France",
      subtitle: "Starting at $2000",
      image: {
        uri: faker.image.urlLoremFlickr({
          category: "paris,eiffel",
        }),
      },
      isFavorite: false,
    },
    {
      id: faker.string.uuid(),
      title: "Taimahal, India",
      subtitle: "Starting at $2000",
      image: {
        uri: faker.image.urlLoremFlickr({
          category: "ireland,dublin",
        }),
      },
      isFavorite: false,
    },
  ];

  const handleGoToDetailsCity = () => navigation.navigate("City");

  return {
    data,
    handleGoToDetailsCity,
  };
}
