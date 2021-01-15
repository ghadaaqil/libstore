import React, {PureComponent} from 'react';
import { Route, Switch } from 'react-router-dom';
import Authentication from '../src/Pages/Authentication'
import Library from '../src/Pages/Library'
import axios from "axios";
import {saveBooks} from "./Pages/Library/redux/actions";
import {connect} from "react-redux";



 class Main extends PureComponent{
     //we can do it another way by redux-observable and epics listening a redux actions to be triggred
     //i'll do the easy way
     componentDidMount() {
         axios.get("https://henri-potier.techx.fr/books").then(
             res=>  this.props.saveBooks(res.data)
         )
     }
    render() {

        return(
            <div className="root">
             <Switch>
                <Route path='/' exact component={Authentication}/>
                <Route path='/library'   component={Library}/>
             </Switch>
            </div>
        )

    }


}
const mapDispatchToProps={
    saveBooks
}
export  default connect(null,mapDispatchToProps) (Main);
