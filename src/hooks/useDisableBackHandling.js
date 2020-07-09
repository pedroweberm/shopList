import { useEffect } from 'react';
import { BackHandler } from 'react-native';

function useDisableBackHandling(navigation) {
  useEffect(() => {
    let disableNavigationAutoHandling = true;

    function onBackButtonPressAndroid() {
      return disableNavigationAutoHandling;
    }

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackButtonPressAndroid);

    return () => {
      disableNavigationAutoHandling = false;
      subscription.remove();
    };
  }, [navigation]);

  return {};
}

export default useDisableBackHandling;
