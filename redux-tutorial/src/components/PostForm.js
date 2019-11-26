import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            text: this.state.text
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
        
    }

    render() {
        return (
            <div>
                <h1> Add a new Post </h1>
                <form onSubmit={this.onSubmit}> 
                    <div>
                        <label> Title: </label>
                        <input type="text" name="title" 
                        value={this.state.title}
                        onChange={this.onChange}/>
                    </div>
                    <br />
                    <div>
                        <label> Text: </label>
                        <textarea name="text" value={this.state.text}
                        onChange={this.onChange}/>
                    </div>
                    <br />
                    <button type="submit"> Add Post </button>
                </form>
            </div>
        )
    }
}

export default PostForm