import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto"

export default function App() {

  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontLoaded ? <Text>Home</Text> : <ActivityIndicator />}
    </View>
  );
}
