import React, {Component} from 'react';
import BookForms from "./BookForm";
import './Home.css';

class Home extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        return(<div>
            <BookForms />
        </div>);
    }
}

export  default Home;