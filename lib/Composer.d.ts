import React from 'react';
import { TextInputProps } from 'react-native';
export interface ComposerProps {
    composerHeight?: number;
    text?: string;
    textInputProps?: Partial<TextInputProps>;
    onTextChanged?(text: string): void;
    onInputSizeChanged?(layout: {
        width: number;
        height: number;
    }): void;
}
export declare function Composer({ composerHeight, onInputSizeChanged, onTextChanged, text, textInputProps, }: ComposerProps): React.ReactElement;
