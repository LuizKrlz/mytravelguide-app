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
import { useSafeAreaInsets } from "react-native-safe-area-context";

function ForgotPasswordScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const handleBack = () => navigation.goBack();

  const handleGoToSignIn = () => navigation.navigate("Login");

  return (
    <ExternalLayout handleBack={handleBack}>
      <Text style={styles.title}>Reset a new Password</Text>

      <View style={styles.containerInput}>
        <TextInput placeholder="Email" style={styles.input} />
      </View>

      <View style={styles.containerSignin}>
        <Text style={styles.signInTitle}>Send Code</Text>
        <TouchableOpacity onPress={() => {}} style={styles.signInButton}>
          <IonicIcons name="arrow-forward" size={30} color={"white"} />
        </TouchableOpacity>
      </View>

      <View style={[styles.containerLinks, { paddingBottom: insets.bottom }]}>
        <Link onPress={handleGoToSignIn}>Sign in</Link>
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
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    maxHeight: 200,
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
    marginTop: 40,
  },
});

export default ForgotPasswordScreen;
