import Dashboard from "./screens/Dashboard";
import LoginPage from "./screens/LoginPage";
import login2 from "./screens/login2"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
        // options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login2"
          component={login2}
        // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
