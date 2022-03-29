import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DoneListScreen from "../screens/DoneListScreen";
import TodoStackNavigator from "./TodoStackNavigator";
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
	return (
		<NavigationContainer>
			<TopTab.Navigator initialRouteName="TodoStackNavigator">
				<TopTab.Screen
					name="TodoStackNavigator"
					component={TodoStackNavigator}
					options={{ tabBarLabel: "A Lire" }}
				/>
				<TopTab.Screen
					name="DoneListScreen"
					component={DoneListScreen}
					options={{ tabBarLabel: "Termine" }}
				/>
			</TopTab.Navigator>
		</NavigationContainer>
	);
};
export default TopTabNavigator;
