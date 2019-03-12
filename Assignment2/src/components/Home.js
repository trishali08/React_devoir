import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0, 7)
            })
        })
    }
    render() {
        const { posts } = this.state
        // console.log(posts)
        const postList = posts.length ? (
            posts.map(post => {
                return (

                       <div className="row">
                         <div className="col s12 m12" key={post.id} >
                           <div className="card deep-purple lighten-2">
                             <div className="card-content black-text">
                                <p>{post.title}</p>
                                <p>{post.body}</p>
                             </div>
                          </div>
                        </div>
                      </div>

                )
            })
        ) : (
                <div className="card deep-purple lighten-2">No Post Yet</div>
            )
        return (
            <div>
                {postList}
            </div>
        )
    }
}

export default Home
