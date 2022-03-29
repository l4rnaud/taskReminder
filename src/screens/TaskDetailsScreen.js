import PropTypes from "prop-types";
import { SafeAreaView, StyleSheet, Pressable, Text, View } from "react-native";
import TaskDetails from "../components/TaskDetails";
import { colors } from "../constants/theme";

const TaskDetailsScreen = ({ route, navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<TaskDetails navigation={navigation} {...route.params} />
			<View style={styles.buttonContainer}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("TodoListScreen")}
				>
					<Text>Retour</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

TaskDetailsScreen.propTypes = {
	route: PropTypes.shape({
		params: PropTypes.object,
	}).isRequired,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "flex-end",
	},
	button: {
		borderRadius: 20,
		marginTop: 20,
		marginRight: 20,
		paddingVertical: 10,
		paddingHorizontal: 30,
		backgroundColor: colors.SECONDARY_COLOR,
		color: colors.SECONDARY_COLOR_TEXT,
	},
});
export default TaskDetailsScreen;
