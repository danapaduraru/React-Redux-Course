import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

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

        // CALL ACTION
        this.props.createPost(post);
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

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);