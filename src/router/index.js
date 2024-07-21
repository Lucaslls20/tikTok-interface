import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Search from "../pages/search";
import New from "../pages/new";
import Profile from "../pages/Profile";
import InBox from "../pages/inBox";
import {Icon} from 'react-native-vector-icons/FontAwesome'
import ButtonNew from "../components/ButtonNew";

const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator 
         screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:'#000',
                borderTopWidth:0
            },

            tabBarActiveTintColor: '#FFF'
         }}
         >
            <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({focused,size,color}) => {
               if(focused){
                return <Icon name="home" size={size} color={color} />
               }
               return <Icon name="home-outline" size={size} color={color} />
                }
            }}
            />
            <Tab.Screen 
            name="Search"
            component={Search}
            options={{
                tabBarIcon: ({focused,size,color}) => {
               if(focused){
                return <Icon name="search" size={size} color={color} />
               }
               return <Icon name="search-outline" size={size} color={color} />
                }
            }}
            />
            
            <Tab.Screen 
            name="New"
            component={New}
            options={{
                tabBarIcon: ({size}) =>{
                return <ButtonNew size={size} />
                }
            }}
            />
            
            
            <Tab.Screen 
            name="InBox"
            component={InBox}
            options={{
                tabBarIcon: ({focused,size,color}) => {
               if(focused){
                return <Icon name="ios-chatbubble-ellipses" size={size} color={color} />
               }
               return <Icon name="ios-chatbubble-ellipses-outline" size={size} color={color} />
                }
            }}
            />
            <Tab.Screen 
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({focused,size,color}) => {
               if(focused){
                return <Icon name="person" size={size} color={color} />
               }
               return <Icon name="person-outline" size={size} color={color} />
                }
            }}
            />
        </Tab.Navigator>
    )
}