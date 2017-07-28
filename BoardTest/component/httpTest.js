import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HttpExample extends Component {

    state = {
        data: ''
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'test',
                password: 'test123',
            })
        })

            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
            }).done()

            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.data.body}
                </Text>
            </View>
        )
    }
}

export default HttpExample