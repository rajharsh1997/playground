import React, { useState } from 'react';
import RepoDetail from '../repoDetail/repoDetail';
import '../repoList/repoList.css';
function RepoList({ repoData }) {
    const [showRepoDetail, setShowRepoDetail] = useState(false);
    const [selectedRepoData, setSelectedRepoData] = useState({});
    function getRepoDetail(data) {
        setShowRepoDetail(true);
        setSelectedRepoData(data);
    }
    return (
        <div className="repo-container">{repoData && !showRepoDetail ? repoData.map((repo, key) =>
            <div className="repo-list-item">
                <div>
                    <img className="img-wrapper-repo" src={repo.owner.avatar_url} alt={repo.name} />
                </div>
                <div className="info-wrapper"><a href="#" className="repo-title" onClick={() => getRepoDetail(repo)}>{repo.name}</a>
                    <p className="repo-desc">{repo.description}</p></div>
            </div>) : ''}{showRepoDetail ? <RepoDetail repoData={selectedRepoData} /> : ''}</div>
    )
}

export default RepoList;