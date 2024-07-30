import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.hideAsync();
        await Font.loadAsync({
          ...FontAwesome.font,
          'inter-regular': require('../assets/fonts/Inter-Regular.ttf'),
          'inter-medium': require('../assets/fonts/Inter-Medium.ttf'),
          'inter-semibold': require('../assets/fonts/Inter-SemiBold.ttf'),
          'inter-bold': require('../assets/fonts/Inter-Bold.ttf'),
          'inter-extrabold': require('../assets/fonts/Inter-ExtraBold.ttf'),
          'inter-black': require('../assets/fonts/Inter-Black.ttf'),
          'inter-light': require('../assets/fonts/Inter-Light.ttf'),
          'inter-thin': require('../assets/fonts/Inter-Thin.ttf'),
          'inter-extralight': require('../assets/fonts/Inter-ExtraLight.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    })();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
