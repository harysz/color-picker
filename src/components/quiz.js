import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Quiz = (props) => {
    const links = props.colors.map((color, i) => {
        return (
            <Link key={i} to={`/quiz/${color.title}`}>
                <div className={'colorTest ' + color.title}
                     style={{backgroundColor: color.title}}>
                </div>
            </Link>
        )
    });
    return (
        <div className='quiz'>
            {links}
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
};
export default connect(mapStateToProps)(Quiz);