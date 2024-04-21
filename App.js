import React, {Component} from "react";
import {StyleSheet, View, FlatList} from 'react-native';
import Pessoa from "./src/Components/Pessoas";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: [
                {id:'1', nome: 'Cícero', idade: 50, email:'cicero@cicero.com'},
                {id:'2', nome: 'Joao', idade: 22, email:'joao@joao.com'},
                {id:'3', nome: 'Henrique', idade: 39, email:'henrique@henrique.com'},
                {id:'4', nome: 'Paulo', idade: 15, email:'paulo@paulo.com'}
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.feed}
                    renderItem={({item}) => <Pessoa data={item}/>}
                    keyExtractor={({item}) => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

