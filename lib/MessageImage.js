import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import commonStyles from './styles';
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
        resizeMode: 'cover',
    },
    modalContent: {
        backgroundColor: '#000',
    },
    modalImageContainer: {
        width: '100%',
        height: '100%',
    },
    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    closeButtonContent: {
        padding: 10,
    },
    closeButtonIcon: {
        fontSize: 20,
        lineHeight: 20,
        color: 'white',
    },
});
export function MessageImage({ containerStyle, imageProps, imageSourceProps, imageStyle, currentMessage, lightboxProps, onPress, }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imageDimensions, setImageDimensions] = useState();
    const windowDimensions = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const imageSource = useMemo(() => ({
        ...imageSourceProps,
        uri: currentMessage?.image,
    }), [imageSourceProps, currentMessage?.image]);
    const isImageSourceChanged = useRef(true);
    const computedImageStyle = useMemo(() => [
        styles.image,
        imageStyle,
    ], [imageStyle]);
    const handleImagePress = useCallback(() => {
        if (onPress) {
            onPress();
            return;
        }
        if (lightboxProps?.disabled)
            return;
        if (!imageSource.uri)
            return;
        setIsModalVisible(true);
        if (isImageSourceChanged.current || !imageDimensions)
            Image.getSize(imageSource.uri, (width, height) => {
                setImageDimensions({ width, height });
            });
    }, [imageSource.uri, imageDimensions, lightboxProps?.disabled, onPress]);
    const handleModalClose = useCallback(() => {
        setIsModalVisible(false);
    }, []);
    const handleImageLayout = useCallback((e) => {
        setImageDimensions({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
        });
    }, []);
    const modalImageDimensions = useMemo(() => {
        if (!imageDimensions)
            return undefined;
        const aspectRatio = imageDimensions.width / imageDimensions.height;
        let width = windowDimensions.width;
        let height = width / aspectRatio;
        if (height > windowDimensions.height) {
            height = windowDimensions.height;
            width = height * aspectRatio;
        }
        return {
            width,
            height,
        };
    }, [imageDimensions, windowDimensions.height, windowDimensions.width]);
    useEffect(() => {
        isImageSourceChanged.current = true;
    }, [imageSource.uri]);
    if (currentMessage == null)
        return null;
    return (<View style={containerStyle}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image {...imageProps} style={computedImageStyle} source={imageSource} onLayout={handleImageLayout}/>
      </TouchableOpacity>

      <Modal visible={isModalVisible} onRequestClose={handleModalClose} animationType='slide' transparent={false}>
        <GestureHandlerRootView style={commonStyles.fill}>
          <View style={[commonStyles.fill, styles.modalContent, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>

            {/* close button */}
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity onPress={handleModalClose}>
                <View style={styles.closeButtonContent}>
                  <Text style={styles.closeButtonIcon}>
                    {'X'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={[commonStyles.fill, commonStyles.centerItems]}>
              <Image style={modalImageDimensions} source={imageSource} resizeMode='contain' {...imageProps}/>
            </View>
          </View>
        </GestureHandlerRootView>
      </Modal>
    </View>);
}
//# sourceMappingURL=MessageImage.js.map