export function useCityDetailsScreen(navigation) {
  const handleGoBack = () => navigation.goBack();
  return {
    handleGoBack,
  };
}
