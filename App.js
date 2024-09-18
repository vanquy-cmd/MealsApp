import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import { LanguageProvider } from './data/LanguageContext'; // Đường dẫn đến file của bạn

export default function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </LanguageProvider>
  );
}