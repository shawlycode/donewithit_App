import { Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLOURS, Items } from '../../global/Database'


export class Counter extends Component {
    state = {
        value: 0,
        total_price: { Items }
    };
    priceChange = () => {
        this.setState({
            total_price: this.state.total_price * this.state.numberOfItems
        })
    }
    incrementValue = () => {

        this.setState({
            value: this.props.setNumberOfItems(this.props.numberOfItems + 1),
        });
    };
    decrementValue = () => {
        this.setState({
            value: this.props.setNumberOfItems(this.props.numberOfItems - 1),
        });
        // if (this.state.value < 0) {
        //     this.setState({
        //         value: 0
        //     });
        // } else {
        //     this.setState({
        //         value: this.props.setNumberOfItems(this.props.numberOfItems - 1)
        //     });
        // }

    };
    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <TouchableOpacity onPress={this.decrementValue}>
                        <Feather name="minus-circle" size={30} color={COLOURS.lemonGreen} />
                    </TouchableOpacity>

                </View>
                <View>
                    <Text style={{ fontSize: 20, padding: 10, color: COLOURS.lemonGreen }}>{this.props.numberOfItems}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.incrementValue}>
                        <Ionicons name="add-circle-outline" size={30} color={COLOURS.lemonGreen} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Counter;
