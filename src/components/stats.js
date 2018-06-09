import React from 'react';
import {connect} from 'react-redux';
class stats extends React.Component{
    render(){
        return(
            <div>
                <h1>stats!!!</h1>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        colors:state.colors
    }
};
export default connect(mapStateToProps)(stats);