import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useLanguage } from '../data/LanguageContext'; // Đường dẫn đến file của bạn

const SettingsScreen = () => {
  const { language, setLanguage } = useLanguage(); // Lấy ngôn ngữ từ context

  const handleChangePassword = () => {
    Alert.alert('Đổi mật khẩu', 'Chức năng này sẽ cho phép bạn đổi mật khẩu.');
  };

  const handleNotifications = () => {
    Alert.alert('Thông báo', 'Chức năng này sẽ cho phép bạn quản lý thông báo.');
  };

  const handleTheme = () => {
    Alert.alert('Chủ đề', 'Chức năng này sẽ cho phép bạn thay đổi chủ đề ứng dụng.');
  };

  const handleLogout = () => {
    Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn đăng xuất?', [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Đăng xuất', onPress: () => console.log('Đã đăng xuất') },
    ]);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage); // Cập nhật ngôn ngữ
    Alert.alert('Ngôn ngữ', `Bạn đã chọn ngôn ngữ: ${newLanguage}`);
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.option} onPress={handleChangePassword}>
        <Text style={styles.optionText}>Đổi mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleNotifications}>
        <Text style={styles.optionText}>Thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleTheme}>
        <Text style={styles.optionText}>Chủ đề</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        <Text style={styles.optionText}>Đăng xuất</Text>
      </TouchableOpacity>

      <Text style={styles.languageLabel}>Chọn ngôn ngữ:</Text>
      <Picker
        selectedValue={language}
        style={styles.picker}
        onValueChange={handleLanguageChange}
      >
        <Picker.Item label="Tiếng Anh" value="en" />
        <Picker.Item label="Tiếng Việt" value="vi" />
        <Picker.Item label="Tiếng Pháp" value="fr" />
        <Picker.Item label="Tiếng Tây Ban Nha" value="es" />
        <Picker.Item label="Tiếng Đức" value="de" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B4513', // Màu nền nâu gỗ
  },
  option: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '80%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  languageLabel: {
    fontSize: 18,
    color: 'white',
    marginVertical: 20,
  },
  picker: {
    height: 50,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default SettingsScreen;