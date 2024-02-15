import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../styles/theme";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { Link } from "../components/atoms";
import { ExternalLayout } from "../components/layouts";

function LoginScreen({ navigation }) {
  const handleBack = () => navigation.goBack();

  const onSubmit = () => {
    navigation.navigate("Home");
  };

  const handleGoToRegister = () => navigation.navigate("Register");
  const handleGoToForgotPassword = () => navigation.navigate("ForgotPassword");

  return (
    <ExternalLayout handleBack={handleBack}>
      <Text style={styles.title}>Welcome to word</Text>
      <Text style={styles.titleMark}>explorer</Text>

      <View style={styles.containerInput}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>

      <View style={styles.containerSignin}>
        <Text style={styles.signInTitle}>Sign in</Text>
        <TouchableOpacity onPress={onSubmit} style={styles.signInButton}>
          <IonicIcons name="arrow-forward" size={30} color={"white"} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerLinks}>
        <Link onPress={handleGoToRegister}>Register</Link>

        <Link onPress={handleGoToForgotPassword}>Forgot Password?</Link>
      </View>
    </ExternalLayout>
  );
}

const styles = StyleSheet.create({
  containerSignin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  containerInput: {
    marginTop: 100,
    gap: 30,
  },
  title: {
    color: theme.fullBlack,
    fontSize: 28,
    fontFamily: "Nunito-Bold",
    marginTop: 40,
  },
  titleMark: {
    color: theme.brandAccent,
    fontSize: 28,
    fontFamily: "Nunito-Bold",
  },
  input: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 15,
    height: 50,
    borderBottomColor: theme.mediumBlack,
    borderBottomWidth: 1,
  },
  signInTitle: {
    fontSize: 28,
    fontFamily: "Nunito-Bold",
    color: theme.fullBlack,
  },
  signInButton: {
    backgroundColor: theme.brandAccent,
    width: 65,
    height: 65,
    borderRadius: 32.5,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 80,
  },
});

export default LoginScreen;
