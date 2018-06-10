import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class singleQuiz extends React.Component {
    state = {
        squares: [],
        red: '',
        green: '',
        blue: '',
        trueColor: '',
        difference:100,
        good:[],
        blocks:[]
    };
    Click(i,bool){
       this.setState({
           toggle:!bool
       })
        console.log(i,bool,'click');

    }
    renderSquares() {
        setTimeout(() => {
            let squares = [];
            for (let x = 0; x < 55; x++) {
                squares.push(`${
                    this.state.red > 0 ? this.state.red - 100 + (Math.floor(Math.random() * this.state.difference + 1)) : this.state.red},${
                    this.state.green > 0 ? this.state.green - 100 + (Math.floor(Math.random() * this.state.difference + 1)) : this.state.green},${
                    this.state.blue > 0 ? this.state.blue - 100 + (Math.floor(Math.random() * this.state.difference + 1)) : this.state.blue}`)
                this.setState({bad:{...this.state.bad,[x]:false}})
            }
            for (let x = 0; x < 5; x++) {
                squares.push(`${this.state.red},${this.state.green},${this.state.blue}`)
                this.setState({good:{...this.state.good,[x]:false}})
            }
            const shuffle = _.shuffle(squares)
            this.setState({squares: shuffle});

            }, 10)
    };

    constructor(props) {
        super(props);
        this.renderSquares();
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
            // this.setState({blocks:{...this.state.blocks,[block]:false}})
            const color=block;
            const square=color.split(',',3);
            return (<div key={b} className="square"
                         style={{backgroundColor:'rgb('+square[0]+','+square[1]+','+square[2]+')'}}
            ></div>)
        })
        return (
            <div className='squareField'>
                {squaresMap}
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
