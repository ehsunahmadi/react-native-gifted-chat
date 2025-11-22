import React, { useMemo } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { Actions } from './Actions';
import { Color } from './Color';
import { Composer } from './Composer';
import { Send } from './Send';
import { renderComponentOrElement } from './utils';
export function InputToolbar(props) {
    const { renderActions, onPressActionButton, renderComposer, renderSend, renderAccessory, actions, actionSheetOptionTintColor, icon, wrapperStyle, containerStyle, } = props;
    const colorScheme = useColorScheme();
    const actionsFragment = useMemo(() => {
        const actionsProps = {
            onPressActionButton,
            actions,
            actionSheetOptionTintColor,
            icon,
            wrapperStyle,
            containerStyle,
        };
        if (renderActions)
            return renderComponentOrElement(renderActions, actionsProps);
        if (onPressActionButton)
            return <Actions {...actionsProps}/>;
        return null;
    }, [
        renderActions,
        onPressActionButton,
        actions,
        actionSheetOptionTintColor,
        icon,
        wrapperStyle,
        containerStyle,
    ]);
    const composerFragment = useMemo(() => {
        const composerProps = props;
        if (renderComposer)
            return renderComponentOrElement(renderComposer, composerProps);
        return <Composer {...composerProps}/>;
    }, [renderComposer, props]);
    const sendFragment = useMemo(() => {
        if (renderSend)
            return renderComponentOrElement(renderSend, props);
        return <Send {...props}/>;
    }, [renderSend, props]);
    const accessoryFragment = useMemo(() => {
        if (!renderAccessory)
            return null;
        return (<View style={[styles.accessory, props.accessoryStyle]}>
        {renderComponentOrElement(renderAccessory, props)}
      </View>);
    }, [renderAccessory, props]);
    return (<View style={[styles.container, colorScheme === 'dark' && styles.container_dark, containerStyle]}>
      <View style={[styles.primary, props.primaryStyle]}>
        {actionsFragment}
        {composerFragment}
        {sendFragment}
      </View>
      {accessoryFragment}
    </View>);
}
const styles = StyleSheet.create({
    container: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Color.defaultColor,
        backgroundColor: Color.white,
    },
    container_dark: {
        backgroundColor: '#1a1a1a',
        borderTopColor: '#444',
    },
    primary: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    accessory: {
        height: 44,
    },
});
//# sourceMappingURL=InputToolbar.js.map