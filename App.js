import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { Colors } from "./constants/colors";
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from "./screens/Login/RegisterScreen";
import AppContextProvider, { AppContext } from './store/app-context';
import { getRequest } from './util/http';
import LoadingOverlay from './components/UI/LoadingOverlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GardensMapScreen from './screens/App/GardensMapScreen';
import GardensListScreen from './screens/App/GardensListScreen';
import GardenDetailsScreen from './screens/App/GardenDetailsScreen';
import GardenChatScreen from './screens/App/GardenChatScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Gardens() {

	const appContext = useContext(AppContext);

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

						<Pressable
							style={({ pressed }) => [{ paddingHorizontal: 25 }, pressed && { opacity: 0.7 }]}
							onPress={appContext.auth.logout}
						>
							<Ionicons name='exit-outline' color='white' size={25} />
						</Pressable>
					);
				}

			}}
		>
			<BottomTabs.Screen
				name="GardensMap"
				component={GardensMapScreen}
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
				component={GardensListScreen}
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

function Garden({route, navigation}) {

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
				component={GardenDetailsScreen}
				options={{

					title: 'Detalhes',
					headerTitleAlign: 'center',
					tabBarLabel: 'Detalhes',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="information-circle-sharp" size={size} color={color} />
					),
				}}
				initialParams={{...route.params}}
			/>
			<BottomTabs.Screen
				name="GardenChat"
				component={GardenChatScreen}
				options={{

					title: 'Chat',
					headerTitleAlign: 'center',
					tabBarLabel: 'Chat',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="chatbox" size={size} color={color} />
					),
				}}
				initialParams={{...route.params}}
			/>
		</BottomTabs.Navigator>
	);
}

function AuthStack() {

	return (
		<Stack.Navigator
			screenOptions={{

				headerStyle: { backgroundColor: Colors.primary500 },
				headerTintColor: 'white',
				contentStyle: { backgroundColor: Colors.primary100 },

			}}
		>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Register"
				component={RegisterScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

function AuthenticatedStack() {

	return (

		<Stack.Navigator
			screenOptions={{

				headerStyle: { backgroundColor: Colors.primary500 },
				headerTintColor: 'white',
				contentStyle: { backgroundColor: Colors.primary100 },
			}}
		>
			<Stack.Screen
				name="Gardens"
				component={Gardens}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Garden"
				component={Garden}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

function Navigation() {

	const appContext = useContext(AppContext);
	return (

		<NavigationContainer>
			{!appContext.auth.isAuthenticated && <AuthStack />}
			{appContext.auth.isAuthenticated && <AuthenticatedStack />}
		</NavigationContainer>
	);
}

function Root() {

	const [isTryingToLogin, setIsTryingToLogin] = useState(true);

	const appContext = useContext(AppContext);

	useEffect(() => {

		(async () => {

			const storedToken = await AsyncStorage.getItem('token');

			if (!!storedToken) {

				const user = (await getRequest("/api/user", storedToken)).data;
				// console.log(user);

				await appContext.auth.authenticate({token: storedToken, user: user});
			}

			setIsTryingToLogin(false);
		})();
	}, []);

	return isTryingToLogin ? <LoadingOverlay /> : <Navigation />;

	// return <Navigation />
}

export default function App() {

	return (

		<AppContextProvider>
			<StatusBar style="light" />
			<Root />
		</AppContextProvider>
	);
};
