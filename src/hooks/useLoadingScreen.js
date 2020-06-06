import { useState, useEffect } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';

const useLoadingScreen = () => {
  const navigation = useNavigation();
  const [loadingNavigation, setLoadingNavigation] = useState(() => {});
  const [shouldClose, setShouldClose] = useState(false);

  useEffect(() => {
    if (loadingNavigation && shouldClose) {
      loadingNavigation.dispatch((state) => {
        const routes = state.routes.filter((r) => r.name !== 'Loading');

        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
      });
      setShouldClose(false);
    }
  }, [shouldClose, loadingNavigation]);

  const open = () => {
    navigation.navigate('Loading', { setLoadingNavigation });
  };

  const close = () => {
    setShouldClose(true);
  };

  return {
    open,
    close,
  };
};

export default useLoadingScreen;
