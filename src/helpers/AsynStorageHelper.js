import AsyncStorage from "@react-native-async-storage/async-storage";

export async function save(item) {
	try {
		const storageKey = item.id;
		const jsonValue = JSON.stringify(item);
		await AsyncStorage.setItem(storageKey, jsonValue);
	} catch (e) {
		alert("erreur lors de l enregistrment de la tache");
	}
}

export async function getAll() {
	let keys = [];
	let tasks = [];
	try {
		keys = await AsyncStorage.getAllKeys();
		keys.forEach(async (key) => {
			tasks.push(await AsyncStorage.getItem(key));
		});
		alert("go : " + JSON.stringify(tasks));
	} catch (e) {
		alert("erreur lors de la récupéraation des taches" + e);
	}
}
