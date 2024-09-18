import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'; // Tạo màn hình yêu thích
import SettingsScreen from '../screens/SettingsScreen'; // Tạo màn hình cài đặt
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const getDrawerItemIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
);

const getTabBarIcon = icon => ({ color }) => ( 
  <MaterialIcons name={icon} size={26} style={{ color: color }} /> 
);

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MealCategories" 
            options={{ headerShown: false }} // Ẩn tiêu đề
            component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Meals">
        <Drawer.Screen name="Meals" component={MealsNavigator} 
          options={{
            drawerIcon: getDrawerItemIcon('list'),
          }}       
        /> 
        <Drawer.Screen name="Favorites" component={FavoritesScreen} 
          options={{
            drawerIcon: getDrawerItemIcon('star'),
          }}  
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} 
          options={{
            drawerIcon: getDrawerItemIcon('person'),
          }}  
        />
        {}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Màu sắc khi tab được chọn
        tabBarInactiveTintColor: 'gray', // Màu sắc khi tab không được chọn
        tabBarStyle: {
          backgroundColor: '#8B4513', // Màu nền nâu gỗ cho thanh tab
        },
      }}
    >
      <Tab.Screen 
        name="Categories" 
        component={MealsNavigator} 
        options={{
          tabBarIcon: getTabBarIcon('local-restaurant'), // Thêm biểu tượng cho tab
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{
          tabBarIcon: getTabBarIcon('favorite'),
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: getTabBarIcon('settings'),
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;