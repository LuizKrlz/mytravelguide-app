import { Image } from "react-native";

export function usePopularCategories() {
  const data = [
    {
      id: 1,
      title: "Trips",
      imageUri: Image.resolveAssetSource(
        require("../../../../assets/categories/plane.png")
      ).uri,
    },
    {
      id: 2,
      title: "Hotel",
      imageUri: Image.resolveAssetSource(
        require("../../../../assets/categories/hotel.png")
      ).uri,
    },
    {
      id: 3,
      title: "Transport",
      imageUri: Image.resolveAssetSource(
        require("../../../../assets/categories/transport.png")
      ).uri,
    },
    {
      id: 4,
      title: "Events",
      imageUri: Image.resolveAssetSource(
        require("../../../../assets/categories/events.png")
      ).uri,
    },
  ];
  return {
    data,
  };
}
