import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    textInput: {
        paddingVertical: 8,
        paddingHorizontal: 4,
        width: '100%',
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#AAA',
    },
    flexRow: {
        flex: 0,
        flexDirection: 'row',
    },
    flexCol: {
        flex: 0,
        flexDirection: 'column',
    },
    fieldTitle: {
        fontSize: 14,
        textAlign: 'left',
        alignSelf: 'flex-start',
        color: 'gray',
    },
});