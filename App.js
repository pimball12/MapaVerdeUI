import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GardensList from './screens/App/GardensList';
import { Ionicons } from '@expo/vector-icons';
import GardensMap from './screens/App/GardensMap';
import { Colors } from "./constants/colors";
import Login from "./screens/Login/Login"
import GardenDetails from './screens/App/GardenDetails';
import GardenChat from './screens/App/GardenChat';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Gardens() {

	// return <Login />

	return (

		<BottomTabs.Navigator
			screenOptions={{

				headerStyle: {

					backgroundColor: Colors.primary400
				},
				headerTintColor: Colors.primary100,
				tabBarInactiveTintColor: Colors.primary700,
				// tabBarLabelPosition: 'beside-icon',
				tabBarLabelStyle: {

					fontSize: 20,
				},
				tabBarStyle: {

					backgroundColor: Colors.primary400,
					height: 70,
					paddingTop: 11
				},
				tabBarItemStyle: {

					height: 50
				},
				tabBarActiveTintColor: Colors.primary100,
				headerRight: () => {

					return (

						<Pressable style={({ pressed }) => [{ paddingHorizontal: 25 }, pressed && { opacity: 0.7 }]}>
							<Ionicons name='ellipsis-vertical' color='white' size={25} />
						</Pressable>
					);
				}

			}}
		>
			<BottomTabs.Screen
				name="GardensMap"
				component={GardensMap}
				options={{

					title: 'Explorar Hortas',
					headerTitleAlign: 'center',
					tabBarLabel: 'Mapa',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="map" size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="GardensList"
				component={GardensList}
				options={{

					title: 'Hortas próximas',
					headerTitleAlign: 'center',
					tabBarLabel: 'Lista',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="list" size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
}

function Garden() {

	return (

		<BottomTabs.Navigator
			screenOptions={{

				headerStyle: {

					backgroundColor: Colors.primary400
				},
				headerTintColor: Colors.primary100,
				tabBarInactiveTintColor: Colors.primary700,
				// tabBarLabelPosition: 'beside-icon',
				tabBarLabelStyle: {

					fontSize: 20,
				},
				tabBarStyle: {

					backgroundColor: Colors.primary400,
					height: 70,
					paddingTop: 11
				},
				tabBarItemStyle: {

					height: 50
				},
				tabBarActiveTintColor: Colors.primary100
			}}
		>
			<BottomTabs.Screen
				name="GardenDetails"
				component={GardenDetails}
				options={{

					title: 'Detalhes',
					headerTitleAlign: 'center',
					tabBarLabel: 'Detalhes',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="information-circle-sharp" size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="GardenChat"
				component={GardenChat}
				options={{

					title: 'Chat',
					headerTitleAlign: 'center',
					tabBarLabel: 'Chat',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="chatbox" size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
}

export default function App() {

	// return <Login/>

	return (

		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator>
					{/* <Stack.Screen
						name="Garden"
						component={Garden}
						options={{ headerShown: false }}
					/> */}
					<Stack.Screen
						name="Gardens"
						component={Gardens}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};