import React from 'react';

class AboutClass extends React.Component 
{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count1: 2,
        }
    }

    componentDidMount() {
        console.log('About class mount')
    }

    render() 
    {
        return (
            <div>
                <h2>Count 1: {this.state.count } </h2>
                <h2>Count 2: {this.state.count1 } </h2>
                <button className='px-4 py-1 bg-amber-300' onClick={() => {
                        this.setState({
                            count: this.state.count +1
                        })
                }} >Click</button>
            </div>
        )
    }

}

export default AboutClass;