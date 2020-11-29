import React,{useState} from 'react';
import UserInfo from '../userinfo/userInfo';
import {getUserInfo,getUserRepo} from '../../services/api-service';
import '../followersList/followersList.css';

function FollowersList({ followersData }) {
    const [userInfo,setUserInfo]=useState({});
    const [showList,setShowList]=useState(true);

    async function getUserInfoData(userValue,repoUrl){
        const userInfo= await getUserInfo(userValue);
        setShowList(false);
        setUserInfo(userInfo);
    }
    return (
        <div><div className="followers-container">{followersData&&showList ? followersData.map((follower, key) =>
            <div className="followers-wrapper">
                <div>
                    <img className="img-wrapper-repo" src={follower.avatar_url} alt={follower.login} />
                </div>
                <div className="info-wrapper"><a href="#" className="follower-name" onClick={() => getUserInfoData(follower.login,follower.repos_url)}>{follower.login}</a>
               </div>
        </div>):''}</div><div>{!showList ? <UserInfo userinfo={userInfo} />:'' }</div></div>
    )
}

export default FollowersList