import React from 'react';

const Posts = ({ allDays, loading }) => {
    if (loading) {
        return <h2>lOADING...</h2>
    }

    return (
        <ul className='list-group mb-4'>
            {allDays.map(post => (
                <li key={post.id} className='list-group-item'>
                    {post.title}
                </li>
            ))}
        </ul>
    );
};

export default Posts;