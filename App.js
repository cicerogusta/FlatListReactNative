import React, {Component} from "react";
import {StyleSheet, Text, View, FlatList} from 'react-native';

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
    areaPessoa: {
        backgroundColor:'#222',
        height:200,
        marginBottom:15
    },

    textoPessoa: {
        color:'#FFF',
        fontSize:20
    }
});

class Pessoa extends Component {
    render() {
        return(
            <View style={styles.areaPessoa}>
                <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
                <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
                <Text style={styles.textoPessoa}>Email: {this.props.data.email} </Text>
            </View>
        )
    }
}
