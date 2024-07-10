import React from 'react';
import Loader from './loading';
import { IoLocationSharp } from "react-icons/io5";


const Card = ({ user }) => {
    if (!user) {
        return <Loader/> // or a loading state, placeholder, etc.
    }

    return (
        <div className='user-card'>
            <div>
                <img className="user-img" src={user.avatar_url} className='avatar' alt='user' />
            </div>
            <div className='stats'>
                <p className='name' > {user.name || user.login}</p>
                <p>{user.bio}</p>
                <p><IoLocationSharp /> <span> </span>
                {user.location}</p>

                <a className='link' href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
      <div className="count-data">
      <div className='cnt'>
                <p>Public Repos</p>
                <p>{user.public_repos}</p>
            </div>
            <div className='cnt'>
                <p>Followers</p>
                <p>{user.followers}</p>
            </div>
            <div className='cnt'>
                <p>Following</p>
                <p>{user.following}</p>
            </div>
      </div>
        </div>
    );
}

export default Card;
