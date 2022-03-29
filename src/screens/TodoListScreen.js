import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TaskCard from "../components/TaskCard";
import { colors } from "../constants/theme";
import { DATA } from "../constants/data";
import { save, getAll } from "../helpers/AsynStorageHelper";

const TodoListScreen = ({ navigation, route }) => {
	const renderItem = ({ item }) => (
		<TaskCard navigation={navigation} details={item} />
	);

	const [allTaskData, setAllTaskData] = useState(DATA);
	useEffect(() => {
		async function getAllTasks() {
			await getAll();
		}

		if(allTaskData.)
		getAllTasks();
	}, []);

	
	useEffect(() => {
		async function addNewTask() {
			const newTask = {
				id: route.params.id,
				title: route.params.title,
				description: route.params.description,
				creationDate: route.params.creationDate,
			};
			const elements = [...allTaskData, newTask];
			await save(newTask);
			setAllTaskData(elements);
		}
		if (route.params?.id) {
			addNewTask();
		}
	}, [
		allTaskData,
		route.params?.creationDate,
		route.params?.description,
		route.params?.id,
		route.params?.title,
	]);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={allTaskData}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
			<Pressable
				style={styles.fabButton}
				onPress={() =>
					navigation.navigate("AddTaskScreen", {
						setAllTaskData: "toto",
					})
				}
			>
				{({ pressed }) => (
					<MaterialCommunityIcons
						name="plus-circle"
						size={70}
						color={
							pressed ? colors.SECONDARY_COLOR_LIGHT : colors.SECONDARY_COLOR
						}
					/>
				)}
			</Pressable>
		</SafeAreaView>
	);
};

TodoListScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	route: PropTypes.shape({
		params: PropTypes.object,
	}).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	fabButton: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		right: 30,
		bottom: 30,
	},
});

export default TodoListScreen;
