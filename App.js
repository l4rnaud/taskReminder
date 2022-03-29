import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigator from "./src/navigator/DrawerNavigator";
import { colors } from "./src/constants/theme";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<DrawerNavigator />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: colors.PRIMARY_COLOR,
	},
});
