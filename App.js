import { createStackNavigator } from 'react-navigation'
import Welcome from './components/Welcome'
import Authentication from './components/Authentication'
import LogIn from './components/LogIn'
import Stations from './components/Stations'
import Register from './components/Register'
import MapScreen from './components/MapScreen'
const App = createStackNavigator(
    {
        Welcome: { screen: Welcome },
        Authentication: { screen: Authentication },
        LogIn: { screen: LogIn },
        Stations: { screen: Stations },
        Register: { screen: Register },
        MapScreen: { screen: MapScreen }
    },
    {
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0
            }
        })
    }
)

export default App
