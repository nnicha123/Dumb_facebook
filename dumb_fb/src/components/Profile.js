import React, { Component } from 'react'
import './Profile.css'
import axios from '../config/axios'
import LocalStorageService from '../services/localStorageService'
class Profile extends Component {
    state = {
        myProfile:{},
    }
    componentDidMount(){
        const username = LocalStorageService.getUserName()
        axios.get('http://localhost:8000/profiles/' + username).then(res => {
            this.setState({myProfile:res.data})
            console.log(res.data)
        })
    }
    render() {
        return (
            <div className="outerContainer">
                <div style={{ backgroundImage: `url(${this.state.myProfile.coverpic})`, backgroundSize: 'cover' }} className="header">
                    <img className="profilePic" src={this.state.myProfile.pic} />
                    <div className="name">{this.state.myProfile.name}</div>
                    <div className="bar"></div>
                </div>
                <div className="postsContainer">
                    {this.props.states.posts.map(el => {
                        return (<div className="post">
                            <div className="topPost">
                                <div className="postImg">
                                    <img style={{ height: '100%' }} src={el.postOwnerImg} />
                                </div>
                                <div className="postName">{el.name}</div>
                            </div>
                            <img src={el.image} />
                        </div>)
                    })}

                </div>
            </div>
        )
    }
}

export default Profile
