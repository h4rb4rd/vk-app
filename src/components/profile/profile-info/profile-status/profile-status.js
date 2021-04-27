import React, { Component } from 'react';

import './profile-status.css';

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
  };
  editModeOn = () => {
    this.setState({
      editMode: true,
    });
  };
  editModeOff = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    const { statusText } = this.props;
    const { editMode } = this.state;
    return (
      <div className="profile__status profile-status">
        {!editMode && (
          <span onClick={this.editModeOn} className="profile-status__text">
            {statusText}
          </span>
        )}
        {editMode && (
          <input autoFocus={true} onBlur={this.editModeOff} value={statusText} type="text" className="profile-status__input" />
        )}
      </div>
    );
  }
}
