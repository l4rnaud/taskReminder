import PropTypes from "prop-types";
import { View, TextInput, Text, StyleSheet } from "react-native";

const TaskDetails = (props) => {
	const { title, description, creationDate } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<TextInput
				style={styles.description}
				clearButtonMode="unless-editing"
				multiline={true}
			>
				{description}
			</TextInput>
			<Text style={styles.creationDate}>Ajouté le {creationDate}</Text>
		</View>
	);
};

TaskDetails.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	creationDate: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 15,
		padding: 25,
		borderRadius: 8,
		elevation: 1,
		backgroundColor: "#fff",
		height: "80%",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
	},
	description: {
		padding: 10,
		fontSize: 16,
		marginVertical: 2,
		height: "70%",
		backgroundColor: "#eee",
	},
	creationDate: {
		fontSize: 14,
		color: "#bcbcbc",
		textAlign: "right",
	},
});

export default TaskDetails;
