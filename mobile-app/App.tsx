import "react-native-gesture-handler";
import Navigation from "./navigation";
import useCachedResources from "./hooks/useCachedResources";
import SplashScreen from "./screens/SplashScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <SplashScreen />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
}
