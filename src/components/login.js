import React from 'react';
import {connect} from 'react-redux'
class login extends React.Component{
    render(){
        return(
            <div>
                some login
            </div>
        )
    }
}
const matStateToProps =(state)=>{
    return{
        login:state.login
    }
};
export default connect(matStateToProps)(login);