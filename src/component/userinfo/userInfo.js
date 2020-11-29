import React, { useEffect, useState } from 'react';
import { followersInfo, getUserRepo } from '../../services/api-service';
import FollowersList from '../followersList/followersList';
import RepoList from '../repoList/repoList';
import '../userinfo/userInfo.css';

function UserInfo({ userinfo }) {
    const [followers, setFollowers] = useState({});
    const [repoData, setRepoData] = useState({});
    const [showFollowers, setShowFollowers] = useState(false);

    async function viewFollowers() {
        const followers = await followersInfo(userinfo.followers_url);
        setShowFollowers(true);
        
        setFollowers(followers);
        
    }
    useEffect(() => {
        async function getUserRepoData() {
            const repoData = await getUserRepo(userinfo.repos_url);
            
            setRepoData(repoData);
        }
        getUserRepoData();
    }, [userinfo]);
    return (
        <div><div className="userinfo-wrapper">{userinfo && !showFollowers ?
            <div className="card">
                <div>
                    <div className="user-info">
                        <div>
                            <img className="img-wrapper" src={userinfo.avatar_url} alt={userinfo.name} />
                        </div>
                        <div className="text-info"><div>{userinfo.name}</div>
                            <div>{userinfo.login}</div>
                            <div>{userinfo.followers} Followers</div>
                            <div>{userinfo.following} Following</div>

                        </div>
                        <div className="btn-container"> <div className="btn-follow-center"> <button className="btn btn-follow" onClick={viewFollowers}>View Followers</button>
                        </div></div>

                    </div>
                    {userinfo.bio!==null?<div>Bio: {userinfo.bio}</div>:''}

                    <div class="repo-data">
                        {Object.keys(repoData).length === 0 ? '' : <RepoList repoData={repoData} />}
                    </div>
                </div>
            </div>
            : showFollowers && Object.keys(followers).length !== 0 ? <FollowersList followersData={followers} /> : <div className="error">Sorry, The user does not have any followers.</div>}</div></div>

    )
}

export default UserInfo