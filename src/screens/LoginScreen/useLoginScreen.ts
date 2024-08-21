import { useCallback } from "react";

export function useLoginScreen(navigation) {
  const handleBack = () => navigation.goBack();
  const onSubmit = () => {
    navigation.navigate("Home");
  };

  const handleGoToRegister = useCallback(
    () => navigation.navigate("Register"),
    [navigation],
  );

  const handleGoToForgotPassword = useCallback(
    () => navigation.navigate("ForgotPassword"),
    [navigation],
  );

  return {
    handleBack,
    onSubmit,
    handleGoToRegister,
    handleGoToForgotPassword,
  };
}
