import React, { useLayoutEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import MEALS from '../data/meals';
import CATEGORIES from '../data/categories';
import { useRoute } from '@react-navigation/native';

const CategoryMealsScreen = ({ navigation }) => {
  const route = useRoute();
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
  
  const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
      headerStyle: {
        backgroundColor: '#f5f5dc', // Màu hồng đậm cho header
      },
      headerTintColor: 'black', // Màu chữ của tiêu đề và nút
      headerRight: () => (
        <Button
          title="Yêu thích"
          onPress={() => {
            // Thêm hành động cho nút yêu thích
            console.log('Đã thêm vào yêu thích!');
          }}
        />
      ),
    });
  }, [navigation, categoryTitle]);

  const renderMealItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.mealItem}
        onPress={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id });
        }}
        activeOpacity={0.7} // Thêm hiệu ứng nhấn
      >
        <Image source={{ uri: itemData.item.imageUrl }} style={styles.mealImage} />
        <Text style={styles.title}>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#8B4513', // Màu nền cho màn hình
  },
  mealItem: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5dc', // Màu nền nhẹ cho món ăn
    elevation: 5, // Tăng độ bóng đổ
    shadowColor: '#000', // Màu bóng
    shadowOffset: { width: 0, height: 2 }, // Độ cao của bóng
    shadowOpacity: 0.1, // Độ mờ của bóng
    shadowRadius: 6, // Đường kính của bóng
  },
  mealImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10, // Thêm khoảng cách dưới hình ảnh
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold', // Thêm đậm cho tiêu đề
    color: '#333', // Màu chữ tối cho tiêu đề
    marginTop: 5,
  },
});

export default CategoryMealsScreen;