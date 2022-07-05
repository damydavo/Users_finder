import PropTypes from 'prop-types';

const RepoList = ({repos}) => {
    return ( 
        <div>{repos.length}</div>
     );
}
 

RepoList.propTypes = {
 repos: PropTypes.array.isRequired,
}

export default RepoList;