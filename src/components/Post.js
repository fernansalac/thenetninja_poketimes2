import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        console.log("props", this.props);
        let id =  this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data 
            })
            console.log(res)
        })
        
    }
    render(){
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p><Link to={'/services/' + this.state.post.body}>{this.state.post.body}</Link></p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return(
            <div className="container">
                { post }
            </div>
        )
    }
}
export default Post;