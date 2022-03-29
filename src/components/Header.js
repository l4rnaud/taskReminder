import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const Header = () => {
	return (
		<View style={styles.container}>
			<Text>Header</Text>
			<Image source={{ uri: "../images/teaser1.jpg" }} style={styles.image} />
			<Pressable
				style={[styles.button, styles.buttonClose]}
				onPress={() => alert("ferme la modal")}
			>
				<Text style={styles.textStyle}>Fermer</Text>
			</Pressable>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		padding: 70,
		flexDirection: "row",
		backgroundColor: "#ECF0F1",
		justifyContent: "space-between",
	},
	image: {
		width: 50,
		height: 50,
	},
});
