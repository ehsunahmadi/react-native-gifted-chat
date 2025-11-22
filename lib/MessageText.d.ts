import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Match } from 'autolinker/dist/es2015';
import { AutolinkProps } from 'react-native-autolink';
import { LeftRightStyle, IMessage } from './types';
export type MessageTextProps<TMessage extends IMessage> = {
    position?: 'left' | 'right';
    currentMessage: TMessage;
    containerStyle?: LeftRightStyle<ViewStyle>;
    textStyle?: LeftRightStyle<TextStyle>;
    linkStyle?: LeftRightStyle<TextStyle>;
    customTextStyle?: StyleProp<TextStyle>;
    onPress?: (message: TMessage, url: string, match: Match) => void;
} & Omit<AutolinkProps, 'text' | 'onPress'>;
export declare const MessageText: React.FC<MessageTextProps<IMessage>>;
