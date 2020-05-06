import React from "react";
import { View } from "react-native";
import Notification from "./../../components/FlatListNotifications";

function Config() {
	return (
		<View style={{
			flex: 1,
			backgroundColor: '#fff',
		}}>
			<Notification />
		</View>
	);
}

export default Config;
