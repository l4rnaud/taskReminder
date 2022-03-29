import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TodoStackNavigator from "./TodoStackNavigator";
import DoneListScreen from "../screens/DoneListScreen";
import packageJson from "../../package.json";
import { colors } from "../constants/theme";

const Drawer = createDrawerNavigator();

// const drawerContent = (navigation) => {
//   return (
//     <View>
//       <Pressable onPress={navigation.navigate("Favoris")}>
//         <Text>Test</Text>
//       </Pressable>
//     </View>
//   );
// };

const DrawerNavigator = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Home"
				screenOptions={{
					drawerStyle: { backgroundColor: colors.PRIMARY_COLOR },
					drawerLabelStyle: { color: colors.PRIMARY_COLOR_TEXT },
					headerTintColor: colors.PRIMARY_COLOR_TEXT,
					drawerActiveBackgroundColor: colors.SECONDARY_COLOR,
				}}
			>
				<Drawer.Screen
					name="Home"
					component={TodoStackNavigator}
					options={{
						headerTitle: packageJson.name,
						headerTitleAlign: "center",
						headerTitleStyle: { color: colors.PRIMARY_COLOR_TEXT },
						headerStyle: { backgroundColor: colors.PRIMARY_COLOR },
					}}
				/>
				<Drawer.Screen
					name="Favoris"
					component={DoneListScreen}
					options={{
						headerTitle: packageJson.name,
						headerTitleAlign: "center",
						headerTitleStyle: { color: colors.PRIMARY_COLOR_TEXT },
						headerStyle: { backgroundColor: colors.PRIMARY_COLOR },
					}}
				/>
				<Drawer.Screen
					name="Historique"
					component={DoneListScreen}
					options={{
						headerTitle: packageJson.name,
						headerTitleAlign: "center",
						headerTitleStyle: { color: colors.PRIMARY_COLOR_TEXT },
						headerStyle: { backgroundColor: colors.PRIMARY_COLOR },
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default DrawerNavigator;
