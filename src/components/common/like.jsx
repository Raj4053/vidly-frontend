import React from 'react';

const Like = ({ liked , onClick : onLikeToggle}) => {
   let classes = "fa fa-heart"

    if(!liked) classes += "-o";
    
    return (
        <i 
            onClick={onLikeToggle} 
            style={{ cursor : "pointer"}}
            className={classes} 
            aria-hidden="true"
        />
    );
}
 
export default Like;