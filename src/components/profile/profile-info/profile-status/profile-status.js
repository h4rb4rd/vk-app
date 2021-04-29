import React, { Component } from 'react';

import './profile-status.css';

export default class ProfileStatus extends Component {
  componentDidMount() {}
  state = {
    editMode: false,
    status: this.props.status,
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
    this.props.updateStatusTh(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  render() {
    const { status } = this.props;
    const { editMode } = this.state;
    return (
      <div className="profile__status profile-status">
        {!editMode && (
          <span onClick={this.editModeOn} className="profile-status__text">
            {status || 'set status'}
          </span>
        )}
        {editMode && (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.editModeOff}
            value={this.state.status}
            type="text"
            className="profile-status__input"
          />
        )}
      </div>
    );
  }
}
