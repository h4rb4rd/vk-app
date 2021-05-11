import React, { useState, useEffect } from 'react';

import './profile-status.css';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const editModeOn = () => {
    setEditMode(true);
  };

  const editModeOff = () => {
    setEditMode(false);
    props.updateStatusTh(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className="profile__status profile-status">
      {!editMode && (
        <span onClick={editModeOn} className="profile-status__text">
          {props.status || 'set status'}
        </span>
      )}
      {editMode && (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={editModeOff}
          value={status}
          type="text"
          className="profile-status__input"
        />
      )}
    </div>
  );
};
export default ProfileStatus;
