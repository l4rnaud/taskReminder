import PropTypes from "prop-types";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputText = (props) => {
	const { label, text, onChangeText } = props;

	return (
		<View>
			<Text>{label}</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
			/>
		</View>
	);
};

InputText.propTypes = {
	label: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onChangeText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default InputText;
