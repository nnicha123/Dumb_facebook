import React from 'react'
import './Profile.css'

function Profile(props) {
    return (
        <div className="outerContainer">
            <div style={{ backgroundImage: `url(${props.states.profile.coverpic})`, backgroundSize: 'cover' }} className="header">
                <img className="profilePic" src={props.states.profile.pic} />
                <div className="name">{props.states.profile.name}</div>
                <div className="bar"></div>
            </div>
            <div className="postsContainer">
                {props.states.posts.map(el => {
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

export default Profile
