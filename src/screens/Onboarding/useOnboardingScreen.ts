export function useOnboardingScreen(navigation) {
  const handleGoToWelcome = () => navigation.navigate("Welcome");

  return {
    handleGoToWelcome,
  };
}
