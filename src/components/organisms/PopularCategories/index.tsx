import { PopularCategoriesUI } from "./PopularCategoriesUI";
import { usePopularCategories } from "./usePopularCategories";

export function PopularCategories() {
  const props = usePopularCategories();

  return <PopularCategoriesUI {...props} />;
}
