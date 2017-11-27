import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    icons: {
        width: 24, height: 24,
        resizeMode: 'center',
    },
    popup: {
        flex: 1,
        position: 'absolute',
        left: 0, top: 0,
    },
    popupInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
    }
});
