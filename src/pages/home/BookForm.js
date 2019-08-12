import React, {Component} from 'react';

class BookForms extends Component {

    constructor(){
        super();
        this.state={
            title: "",
            description: ""
        };
    }
    handleChange=(event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.title);
        console.log(this.state.description);
        fetch('http://localhost:8080/books/',{
          method: 'POST',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify({
            "title": this.state.title,
            "description": this.state.description
          })
        });
        }
        


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="title">Title</label>
                    <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={this.state.title} 
                    onChange={this.handleChange}  /><br/>
                    <label for="description" >Description</label><br/>
                    <textarea 
                    id="description" 
                    rows="4" cols="20" 
                    name="description" 
                    value={this.state.description} 
                    onChange={this.handleChange}  >
                </textarea><br/>
                    <button type="Submit">Add Books</button>
                </form>
            </div>
        );
    }
}



export default BookForms;