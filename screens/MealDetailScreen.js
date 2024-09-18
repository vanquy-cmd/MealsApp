import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import MEALS from '../data/meals';
import { useRoute } from '@react-navigation/native';

const MealDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { mealId } = route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  // Cập nhật tiêu đề động
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
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
  }, [navigation, selectedMeal.title]);

  return (
    <View style={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.subtitle}>Nguyên liệu:</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text style={styles.subtitle}>Công thức:</Text>
      {selectedMeal.steps.map((step, index) => (
        <Text key={index}>{`${index + 1}. ${step}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8B4513', // Màu nền kem (Be)
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white', // Màu chữ sáng để dễ đọc trên nền tối
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white', // Màu chữ sáng
  },
});

export default MealDetailScreen;