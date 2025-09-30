import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import styles from './WelcomeScreen.styles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.iconWrapper}>
        <Text style={styles.iconText}>🌱</Text>
      </View>

      {/* Title & Subtitle */}
      <Text style={styles.title}>Agri Connect</Text>
      <Text style={styles.subtitle}>Connecting Agricultural{"\n"}Supply Chain</Text>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('LanguageSelect')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;