import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Color } from './Color';
import { TouchableOpacity } from './components/TouchableOpacity';
import { TEST_ID } from './Constant';
const styles = StyleSheet.create({
    container: {
        height: 44,
        justifyContent: 'flex-end',
    },
    text: {
        color: Color.defaultBlue,
        fontWeight: '600',
        fontSize: 17,
        backgroundColor: Color.backgroundTransparent,
        marginBottom: 12,
        marginLeft: 10,
        marginRight: 10,
    },
    text_dark: {
        color: '#4da6ff',
    },
});
export const Send = ({ text, containerStyle, children, textStyle, label = 'Send', alwaysShowSend = false, disabled = false, sendButtonProps, onSend, }) => {
    const colorScheme = useColorScheme();
    const handleOnPress = useCallback(() => {
        if (text && onSend)
            onSend({ text: text.trim() }, true);
    }, [text, onSend]);
    const showSend = useMemo(() => alwaysShowSend || (text && text.trim().length > 0), [alwaysShowSend, text]);
    if (!showSend)
        return null;
    return (<TouchableOpacity testID={TEST_ID.SEND_TOUCHABLE} accessible accessibilityLabel='send' style={[styles.container, containerStyle]} onPress={handleOnPress} accessibilityRole='button' disabled={disabled} {...sendButtonProps}>
      <View>
        {children || <Text style={[styles.text, (colorScheme === 'dark' ? styles.text_dark : undefined), textStyle]}>{label}</Text>}
      </View>
    </TouchableOpacity>);
};
//# sourceMappingURL=Send.js.map