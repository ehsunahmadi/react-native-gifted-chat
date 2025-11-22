import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export interface ActionsProps {
    actions?: Array<{
        title: string;
        action: () => void;
    }>;
    actionSheetOptionTintColor?: string;
    icon?: () => ReactNode;
    wrapperStyle?: StyleProp<ViewStyle>;
    iconTextStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    onPressActionButton?(): void;
}
export declare function Actions({ actions, actionSheetOptionTintColor, icon, wrapperStyle, iconTextStyle, onPressActionButton, containerStyle, }: ActionsProps): React.JSX.Element;
