import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Alert, Image, Text, Button, View, ViewPropTypes } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

import styles from './Styles';

class AndroidFingerPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { errorMessage: undefined };
    }

    componentDidMount() {
        FingerprintScanner.authenticate({ onAttempt: this.handleAuthenticationAttempted })
            .then(() => {
                this.props.handlePopupDismissed();
                Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
            })
            .catch((error) => {
                this.setState({ errorMessage: error.message });
            });
    }

    componentWillUnmount() {
        FingerprintScanner.release();
    }

    handleAuthenticationAttempted = (error) => {
        this.setState({ errorMessage: error.message });
    };

    render() {
        const { errorMessage } = this.state;
        const { style, handlePopupDismissed } = this.props;

        return (
            <View style={style}>
                <View style={styles.popupInner}>
                    <Text ref={(instance) => { this.description = instance; }}>{errorMessage || 'Scan your fingerprint on the\ndevice scanner to continue'}</Text>
                    <Button onPress={handlePopupDismissed} title="Cancel" />
                </View>
            </View>
        );
    }
}

AndroidFingerPopup.propTypes = {
    style: ViewPropTypes.style,
    handlePopupDismissed: PropTypes.func.isRequired,
};

export default AndroidFingerPopup;
