import PropTypes from "prop-types";
import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { colors } from "../constants/theme";
import uuid from "react-native-uuid";
import { getFullDateOfToday } from "../utils/DateUtils";

const AddCardScreen = ({ navigation }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: "",
			description: "",
		},
	});

	const onSubmit = (data) => {
		navigation.navigate("TodoListScreen", {
			id: uuid.v4(),
			title: data.title,
			description: data.description,
			creationDate: getFullDateOfToday(),
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Titre</Text>
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name="title"
			/>
			{errors.title && <Text>Le titre est obligatoire</Text>}

			<Text style={styles.label}>Decription</Text>
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.description}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						multiline={true}
					/>
				)}
				name="description"
			/>

			<View style={styles.buttonContainer}>
				<Pressable
					onPress={() => navigation.navigate("TodoListScreen")}
					style={styles.buttonCancel}
				>
					<Text style={styles.buttonText}>Annuler</Text>
				</Pressable>
				<Pressable onPress={handleSubmit(onSubmit)} style={styles.buttonSave}>
					<Text style={styles.buttonText}>Enregistrer</Text>
				</Pressable>
			</View>
		</View>
	);
};

AddCardScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		margin: 15,
	},
	label: {
		fontSize: 20,
		fontWeight: "bold",
	},
	input: {
		fontSize: 16,
		padding: 10,
		marginVertical: 2,
		backgroundColor: "#fff",
		borderRadius: 6,
	},
	description: {
		padding: 10,
		fontSize: 16,
		marginVertical: 2,
		height: "70%",
		backgroundColor: "#fff",
		textAlignVertical: "top",
		borderRadius: 6,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	buttonCancel: {
		backgroundColor: colors.SECONDARY_COLOR_LIGHT,
		color: colors.SECONDARY_COLOR_TEXT,
		borderRadius: 40,
		paddingVertical: 20,
		width: "40%",
	},
	buttonSave: {
		backgroundColor: colors.SECONDARY_COLOR,
		color: colors.SECONDARY_COLOR_TEXT,
		borderRadius: 40,
		paddingVertical: 20,
		width: "40%",
	},
	buttonText: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 16,
	},
});

export default AddCardScreen;
