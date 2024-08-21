export function useForgotPasswordScreen(navigation) {
  const handleBack = () => navigation.goBack();

  const handleGoToSignIn = () => navigation.navigate("Login");

  return {
    handleBack,
    handleGoToSignIn,
  };
}
