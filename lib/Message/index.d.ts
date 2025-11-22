import React from 'react';
import { IMessage } from '../types';
import { MessageProps } from './types';
export * from './types';
export declare const Message: <TMessage extends IMessage = IMessage>(props: MessageProps<TMessage>) => React.JSX.Element | null;
