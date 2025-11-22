import React from 'react';
import { ImageProps, ImageStyle, ImageURISource, StyleProp, ViewStyle } from 'react-native';
import { IMessage } from './types';
export interface MessageImageProps<TMessage extends IMessage> {
    currentMessage: TMessage;
    containerStyle?: StyleProp<ViewStyle>;
    imageSourceProps?: Partial<ImageURISource>;
    imageStyle?: StyleProp<ImageStyle>;
    imageProps?: Partial<ImageProps>;
    lightboxProps?: {
        disabled?: boolean;
        [key: string]: any;
    };
}
export declare function MessageImage<TMessage extends IMessage = IMessage>({ containerStyle, imageProps, imageSourceProps, imageStyle, currentMessage, lightboxProps, }: MessageImageProps<TMessage>): React.JSX.Element | null;
