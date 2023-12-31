import React, { Component } from 'react'
import axios from 'axios'

export class HttpRequesting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                // console.log(error)
                this.setState({ errorMsg: 'This is an error to Load API' })
            })
    }
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}> {post.title} </div>) :
                        null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default HttpRequesting