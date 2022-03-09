import React from 'react';
import { Paystack, showPayButton } from 'react-native-paystack-webview';
import { View } from 'react-native';

export default function Payment() {
    return (
        <View>
            <Paystack
                showPayButton={true}
                buttonText="PAY NOW"
                paystackKey="pk_test_8d50cf22938cbf5d325f052aa4f06bf7c49a5155"
                amount={'400'}
                billingEmail="kliqxpress@gmail.com"
                activityIndicatorColor="green"
                onCancel={(e) => {
                    // handle response here
                }}
                onSuccess={(res) => {
                    // handle response here
                }}
                autoStart={false}
                Currency='GHS'
                channels={JSON.stringify(["card", "ussd", 'mobile_money', 'qr'])}
            />
        </View>
    );
}
