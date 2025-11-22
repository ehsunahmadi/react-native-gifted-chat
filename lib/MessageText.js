import React, { useMemo, useCallback } from 'react';
import { StyleSheet, View, } from 'react-native';
import Autolink from 'react-native-autolink';
export const MessageText = ({ currentMessage = {}, position = 'left', containerStyle, textStyle, linkStyle: linkStyleProp, customTextStyle, onPress: onPressProp, ...rest }) => {
    const linkStyle = useMemo(() => StyleSheet.flatten([
        styles.link,
        linkStyleProp?.[position],
    ]), [position, linkStyleProp]);
    const style = useMemo(() => [
        styles[`text_${position}`],
        textStyle?.[position],
        customTextStyle,
    ], [position, textStyle, customTextStyle]);
    const handlePress = useCallback((url, match) => {
        onPressProp?.(currentMessage, url, match);
    }, [onPressProp, currentMessage]);
    return (<View style={[styles.container, containerStyle?.[position]]}>
      <Autolink email phone url stripPrefix={false} {...rest} onPress={onPressProp ? handlePress : undefined} linkStyle={linkStyle} style={style} text={currentMessage.text}/>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
    },
    text_left: {
        color: 'black',
    },
    text_right: {
        color: 'white',
    },
    link: {
        textDecorationLine: 'underline',
    },
});
//# sourceMappingURL=MessageText.js.map