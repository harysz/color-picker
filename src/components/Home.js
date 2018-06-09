import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            activeIndex: null
        };
    }
    toggleClass(index, e) {
        console.log(this.state.activeIndex);
        this.setState({activeIndex: index})
    }

    render() {

        const colors = this.props.colors.map((item, i) => {
            return (<div key={i}
                         className={this.state.activeIndex===i ? 'color activeText activeColor' : 'color'} onClick={this.toggleClass.bind(this, i)}
                         style={{backgroundColor: item.title}}>
                    <p key={i} className={this.state.activeIndex===i? "activeText" :"text"} style={{display:'none'}}>
                        {item.description}</p>
                </div>
            )
        });
        return (
            <div className='colorNav'>
                {colors}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        colors:state.colors
    }

};
export default connect(mapStateToProps)(Home);