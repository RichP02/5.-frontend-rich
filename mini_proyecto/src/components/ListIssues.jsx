import React from 'react';

const ImagesCard = ({ number, url, title, user, labels }) => {
  const clickBlank = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="ImagesCard">
      <p className="number">Number: {number}</p>
      <p className="Title">
        Title: <a href="#" onClick={clickBlank}>{title}</a>
      </p>
      <p className="User">User: {user.login}</p>
    </div>
  );
};

export default ImagesCard;
