import React from 'react';
import { Pressable } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
export type TouchableOpacityProps = React.ComponentProps<typeof Pressable> & {
    activeOpacity?: number;
} & React.ComponentProps<typeof Animated.View>;
export declare const TouchableOpacity: React.FC<TouchableOpacityProps>;
