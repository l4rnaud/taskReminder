import PropTypes from "prop-types";
import { View, Text, Pressable } from "react-native";

const CustomDrawerContent = ({ navigation }) => {
	return (
		<View>
			<Pressable onPress={navigation.navigate("Favoris")}>
				<Text>Test</Text>
			</Pressable>
		</View>
	);
};

CustomDrawerContent.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

export default CustomDrawerContent;
