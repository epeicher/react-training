import React from 'react'
import ReactDOM from 'react-dom'


class MyInput extends React.Component {

    constructor() {
        super()

        this.state = {textValue:''}
    }

    handleChange(e) {
        let txt = e.target.value

        this.setState({textValue: txt})
    }



    render() {
        return (
            <div>
        <input type="text" placeholder="hola caracola" 
            onChange={e => this.handleChange(e)}
            value={this.state.textValue}
             />
             <h2>El valor es: {this.state.textValue}</h2>

             </div>
        )
    }
}

var Footer = function() {
    return <small>Footer soy yo maderfacquer</small>
}

var Header = function(props) {
    return (
        <div>
            <h1>Hello World my name is {props.name} and surname is {props.surn}</h1>
            <input type="button" onClick={function(e) {props.onClickedButton('petete')}} value="Soy un button"/>
        </div>
    )
}


var Container = function() {

    function handleClick(e) {
        alert('me han clickado')
        console.log('evento',e)
    }

    return (
        <div>
            <Header name="Johnie" surn="McCarthie" onClickedButton={function(e) {handleClick(e)}} />
            <Footer />
            <MyInput />
        </div>
    )
}

ReactDOM.render(<Container />, document.getElementById('root'))