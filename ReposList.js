import React from 'react'

const ReposList = ({repos}) => {
  return (
    <ol>
      {repos.map((repo, index) => (
        <li className="repo-list-item" key={index}>
          <a href={repo.svn_url} target="_blank">
            <h3>{repo.full_name}</h3>
          </a>
          <p>{repo.description}</p>
        </li>
      ))}
    </ol>
  )
}

ReposList.propTypes = {
  repos: React.PropTypes.array.isRequired
}

export default ReposList 