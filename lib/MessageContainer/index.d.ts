import React from 'react';
import { IMessage } from '../types';
import { MessageContainerProps } from './types';
export * from './types';
export declare const MessageContainer: <TMessage extends IMessage>(props: MessageContainerProps<TMessage>) => React.JSX.Element;
