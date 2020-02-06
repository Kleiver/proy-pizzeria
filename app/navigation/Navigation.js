import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import RestaurantsScreenStacks from './RestaurantsStack';
import TopListScreenStacks from './TopListStacks';
import SearchScreenStacks from './SearchStack';
import MyAccountScreenStacks from '../screens/Account/MyAccount';

const NavigationStacks = createBottomTabNavigator({

        Restaurants: {
        screen: RestaurantsScreenStacks,
         navigationOptions:()=>({
                tabBarLabel:"Restaurantes",
                tabBarIcon: ({tintColor}) => (
                        <Icon 
                        type="material-community" 
                        name="compass-outline"
                        size={22}
                        color={tintColor}
                        />
         )
            })
        },

        TopLists : {
            screen : TopListScreenStacks,
            navigationOptions : () => ({

                tabBarLabel:"Ranking",
                tabBarIcon: ({tintColor}) => (
                         <Icon 
                         type="material-community" 
                         name="start-outline"
                         size={22}
                         color={tintColor}
                         />
                        )
            })
        },

        Search : {
            screen : SearchScreenStacks,
            navigationOptions : () => ({

                tabBarLabel:"Search",
                tabBarIcon: ({tintColor}) => (
                        <Icon 
                        type="material-community" 
                        name="magnify"
                        size={22}
                        color={tintColor}
                        />
            )
            })
        },

        MyAccount : {
            screen : MyAccountScreenStacks,
            navigationOptions : () => ({

                tabBarLabel:"MyAccount",
                tabBarIcon: ({tintColor}) => (
                        <Icon 
                        type="material-community" 
                        name="account"
                        size={22}
                        color={tintColor}
                        />
            )
            })
        }

    },
    {
        initialRouteName:"MyAccount",
        order:["Restaurants","TopLists","Search","MyAccount"],
        tabBarOptions:{
            inactiveTintColor:"#646464",
            activeTintColor:"#00a680"
        }
    }
    
    )

export default createAppContainer(NavigationStacks);
