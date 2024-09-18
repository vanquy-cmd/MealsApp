import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CATEGORIES from '../data/categories';
import { useLanguage } from '../data/LanguageContext'; // Đường dẫn đến file của bạn

const CategoriesScreen = ({ navigation }) => {
  const { language } = useLanguage(); // Lấy ngôn ngữ từ context

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('CategoryMeals', { categoryId: itemData.item.id });
        }}
      >
        <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {itemData.item.title[language]} {/* Hiển thị tiêu đề theo ngôn ngữ */}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#8B4513', // Màu nền nâu gỗ
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff', // Màu nền cho các mục trong lưới
    elevation: 10, // Độ bóng cho Android
    shadowColor: '#000', // Màu bóng
    shadowOffset: { width: 0, height: 4 }, // Độ cao của bóng
    shadowOpacity: 0.5, // Độ mờ của bóng
    shadowRadius: 10, // Đường kính của bóng
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ cho tiêu đề
    paddingVertical: 5,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

export default CategoriesScreen;