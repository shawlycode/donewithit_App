import React from 'react';
export const Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR';

export const PaymentChannels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money';

export const Response = {
    status = ""
}
function SuccessResponse extends Response {
    transactionRef ?: string;
    data ?: any;
}

export const PayStackProps = {
    paystackKey: "",
    billingEmail: "",
    firstName: "",
    lastName: "",
    phone: "" | number,
    amount: "" | number,
    currency: Currency,
    channels: PaymentChannels[],
    refNumber: "",
    billingName: "",
    handleWebViewMessage: ("", "") => void,
        onCancel : (Response = Response) => void,
            onSuccess : (SuccessResponse = SuccessResponse) => void,
                autoStart : true,
                    activityIndicatorColor : "green",
                        ref : React.ReactElement,
}

export const PayStackRef = {
    startTransaction: () => void,
    endTransaction: () => void,
}