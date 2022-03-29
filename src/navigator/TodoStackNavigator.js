import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTaskScreen from "../screens/AddTaskScreen";
import TodoListScreen from "../screens/TodoListScreen";
import TaskDetailsScreen from "../screens/TaskDetailsScreen";

const Stack = createNativeStackNavigator();

const TodoStackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="TodoListScreen">
			<Stack.Screen
				name="TodoListScreen"
				component={TodoListScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="AddTaskScreen"
				component={AddTaskScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="TaskDetailsScreen"
				component={TaskDetailsScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default TodoStackNavigator;
