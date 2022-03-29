import PropTypes from "prop-types";
import { Text, Pressable, StyleSheet, Image, View } from "react-native";

const TaskCard = (props) => {
	const { navigation } = props;
	const cardDetails = props.details;
	return (
		<View style={styles.mainContainer}>
			<Pressable
				style={({ pressed }) => [
					{ backgroundColor: pressed ? "#c3cfe2" : "#f5f7fa" },
					styles.cardContainer,
				]}
				onPress={() => {
					navigation.navigate("TaskDetailsScreen", cardDetails);
				}}
			>
				<Image source={require("../images/teaser1.jpg")} style={styles.image} />
				<View style={styles.textContainer}>
					<Text style={styles.title}>{cardDetails.title}</Text>
					<Text style={styles.description}>{cardDetails.description}</Text>
					<Text style={styles.creationDate}>
						Ajouté le {cardDetails.creationDate}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};

TaskCard.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	details: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		creationDate: PropTypes.string.isRequired,
	}),
};

const styles = StyleSheet.create({
	mainContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	cardContainer: {
		padding: 15,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 8,
		elevation: 4,
		display: "flex",
		flexDirection: "row",
	},
	image: {
		flex: 1,
		height: "100%",
		borderRadius: 8,
		resizeMode: "cover",
	},
	textContainer: {
		display: "flex",
		flex: 3,
		marginLeft: 15,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
	},
	description: {
		fontSize: 14,
		marginVertical: 2,
	},
	creationDate: {
		fontSize: 14,
		color: "#bcbcbc",
	},
});

export default TaskCard;
