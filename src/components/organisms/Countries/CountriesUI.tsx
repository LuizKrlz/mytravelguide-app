import { Box } from "../../atoms";
import { CountriesFilter } from "./CountriesFilter";
import { FlatList } from "react-native";
import { CountryCard } from "./CountryCard";

export function CountriesUI({ data, handleGoToDetailsCity }) {
  return (
    <Box>
      <CountriesFilter />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        style={{ maxHeight: 260 }}
        contentContainerStyle={{
          paddingLeft: 16,
          paddingTop: 20,
        }}
        keyExtractor={(item) => `${item?.id}`}
        renderItem={({ item }) => (
          <CountryCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            onPress={handleGoToDetailsCity}
            isFavorite={item.isFavorite}
          />
        )}
      />
    </Box>
  );
}
