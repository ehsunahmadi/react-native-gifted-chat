import { JSX } from 'react';
import { IMessage } from '../types';
import { BubbleProps } from './types';
export * from './types';
export declare const Bubble: <TMessage extends IMessage = IMessage>(props: BubbleProps<TMessage>) => JSX.Element;
