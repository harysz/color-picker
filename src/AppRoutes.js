import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import Quiz from './components/quiz';
import Login from './components/login';
import Stats from './components/stats';
import singleQuiz from './components/singlequiz'
class AppRoutes extends React.Component{
    render(){

        return(
            <BrowserRouter>
             <div>
                 <Header/>
                 <Switch>
                     <Route exact path="/"  component={Home}/>
                     <Route exact path="/quiz" component={Quiz}/>
                     <Route exact path="/stats" component={Stats}/>
                     <Route path="/quiz/:color" component={singleQuiz}/>
                     <Route exact path="/login" component={Login}/>


                 </Switch>
             </div>
            </BrowserRouter>
        )
    }
}
export default AppRoutes;