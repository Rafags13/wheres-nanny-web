import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../pages/Home';
import NannyInformations from '../../../pages/NannyInformations';

const Stack = createNativeStackNavigator();

export default function HomeNavigationPages() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='home'
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="nannyInformation" component={NannyInformations} />
        </Stack.Navigator>
    )
}