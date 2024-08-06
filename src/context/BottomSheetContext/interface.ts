import {ReactNode} from 'react';

export interface IBottomSheetContext {
  closeBottomSheet: () => void;
  showBottomSheet: (content: any, settings?: any) => void;
}

export interface BottomSheetProviderProps {
  children: ReactNode;
}
