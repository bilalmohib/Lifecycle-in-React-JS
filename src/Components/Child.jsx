import React from 'react'

import '../App.css'

class Child extends React.Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromPropsChildren===>",props)
        return null
    }
    componentWillUnmount(){
        console.log("Component khalas......");
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}
export default Child;
