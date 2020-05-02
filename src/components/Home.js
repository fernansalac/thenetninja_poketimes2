import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import logo from '../logo.jpg';
import { Card, Button } from 'react-bootstrap';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    //<div className="post card" key={post.id} >
                    //    <img src={logo} alt="A logo"></img>
                    //    <div className="card-content">
                    //        <Link to={'/post/' + post.id} >
                    //           <span className="card-title">{post.title}</span>
                    //       </Link>
                    //       <p>{post.body}</p>
                    //    </div>
                    // </div>
                    <Card className="text-center" key={post.id}>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Link to={'/post/' + post.id} >
                                <Card.Title>{post.title}</Card.Title>
                            </Link>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                            <Button variant="primary"><Link to={'/services/'+ post.title + '/' + post.body}>Click me</Link></Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                )
            })
        ) : (
                <div className="center">No post yet</div>
            )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;
