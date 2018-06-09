import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class singleQuiz extends React.Component {
    state = {
        divs: '',
        time: '',
        squares: [],
        array: [],
        red: '',
        green: '',
        blue: '',
        trueColor: ''

    };
    Click(i){
        console.log(i,'click')
    }
    renderSquares() {
        setTimeout(() => {
            let squares = [];
            for (let x = 0; x < 55; x++) {
                squares.push(`${this.state.red >= 255 ? 
                    (this.state.red - 100)+(Math.floor(Math.random()*100+1)) : this.state.red+(Math.floor(Math.random()*100+1))},${this.state.green >= 255 ? (this.state.green - 100)+(Math.floor(Math.random()*100+1)) : this.state.green+(Math.floor(Math.random()*100+1))},${this.state.blue >= 255 ? this.state.blue - 100+(Math.floor(Math.random()*100+1)) : this.state.blue+(Math.floor(Math.random()*100+1))}`)
            }
            for (let x = 0; x < 5; x++) {
                squares.push(`${this.state.red},${this.state.green},${this.state.blue}`)
            }
            const shuffle = _.shuffle(squares)
            this.setState({squares: shuffle});
        }, 10)
    };

    constructor(props) {
        super(props);
        this.renderSquares()
    }

    componentDidMount() {
        const color = this.props.colors.filter((color, i) => color.title === this.props.match.params.color).map((item, i) => {
            this.setState({
                red: item.theColor.R,
                green: item.theColor.G,
                blue: item.theColor.B,
            })
        })
    }

    render() {
        const squaresMap=this.state.squares.map((block,b)=>{
            const color=block;
            const square=color.split(',',3)
            return (<div key={b} className="square"
                         style={{backgroundColor:'rgb('+square[0]+','+square[1]+','+square[2]+')'}}
                         onClick={()=>this.Click(b)}
            ></div>)
        })
        return (
            <div className='squareField'>
                {squaresMap}
                {console.log(this.state.squares)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors,
    }
};


export default connect(mapStateToProps)(singleQuiz)
