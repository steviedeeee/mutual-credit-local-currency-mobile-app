import React, {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {BottomSheetProviderProps, IBottomSheetContext} from './interface';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import {BackHandler, Text} from 'react-native';

const BottomSheetContext = createContext<IBottomSheetContext>({
  closeBottomSheet: () => {},
  showBottomSheet: () => {},
});

const defaultModalSettings = {
  index: 0,
  snapPoints: ['50%'],
};

const BottomSheetProvider: FC<BottomSheetProviderProps> = ({children}) => {
  const [bottomSheetContent, setBottomSheetContent] = useState(<></>);
  const [bottomSheetProps, setBottomSheetProps] =
    useState(defaultModalSettings);
  const [isVisible, setIsVisible] = useState(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const showBottomSheet = useCallback(
    (content: any, settings?: any) => {
      setIsVisible(true);
      setBottomSheetContent(content);

      if (settings) {
        setBottomSheetProps({...bottomSheetProps, ...settings});
      } else {
        setBottomSheetProps(defaultModalSettings);
      }

      bottomSheetModalRef.current?.present();
    },
    [bottomSheetProps],
  );

  const closeBottomSheet = () => {
    handleCloseModalPress();
  };

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  useEffect(() => {
    const backAction = () => {
      if (isVisible) {
        bottomSheetModalRef.current?.close();
        return true;
      }

      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isVisible, bottomSheetModalRef]);

  return (
    <BottomSheetContext.Provider value={{closeBottomSheet, showBottomSheet}}>
      {children}

      <BottomSheetModal
        ref={bottomSheetModalRef}
        backdropComponent={(props: BottomSheetBackdropProps) => (
          <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
        )}
        onDismiss={() => setIsVisible(false)}
        {...bottomSheetProps}>
        {bottomSheetContent}
      </BottomSheetModal>
    </BottomSheetContext.Provider>
  );
};

export default BottomSheetContext;

const useBottomSheet = () => useContext(BottomSheetContext);

export {BottomSheetProvider, useBottomSheet};
