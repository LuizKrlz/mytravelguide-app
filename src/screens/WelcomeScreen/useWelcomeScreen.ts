export function useWelcomeScreen(navigation) {
  const handleGoToLogin = () => navigation.navigate("Login");

  return {
    handleGoToLogin,
  };
}
