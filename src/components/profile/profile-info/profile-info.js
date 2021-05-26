import React, { useState } from 'react';
import './profile-info.css';

import ProfileStatus from './profile-status';
import avatar from '../../../assets/images/userAva.png';
import FileUpload from '../../file-upload';
import { Form, Field } from 'react-final-form';

const ProfileInfo = ({ status, profile, updateStatusTh, savePhotoTh, saveProfileDataTh }) => {
  const [avaEditMode, setAvaEditMode] = useState(false);
  const [profileDataEditMode, setProfileDataEditMode] = useState(false);

  const onPhotoChange = (e) => {
    if (e.target.files.length) {
      savePhotoTh(e.target.files[0]);
    }
  };
  return (
    <div className="profile__user profile-user">
      {/* avatar */}
      <div
        className="profile-user__avatar"
        onMouseEnter={() => setAvaEditMode(true)}
        onMouseLeave={() => setAvaEditMode(false)}
      >
        <a href="#">
          <img src={profile.photos.large || avatar} alt="avatar" />
        </a>
        {avaEditMode && <FileUpload onPhotoChange={onPhotoChange} text={'Update photo'} />}
      </div>
      {/* status */}
      <ProfileStatus status={status} updateStatusTh={updateStatusTh} />
      {/* info */}

      {!profileDataEditMode && (
        <ProfileInfoData profile={profile} setProfileDataEditMode={setProfileDataEditMode} />
      )}
      {profileDataEditMode && (
        <FormProfileData
          profile={profile}
          setProfileDataEditMode={setProfileDataEditMode}
          saveProfileDataTh={saveProfileDataTh}
        />
      )}
    </div>
  );
};
const FormProfileData = ({ profile, setProfileDataEditMode, saveProfileDataTh }) => {
  return (
    <Form
      initialValues={profile}
      onSubmit={(profileFormData) => {
        saveProfileDataTh(profileFormData);
        setProfileDataEditMode(false);
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="profile-data__form">
          <div>
            <Field name="fullName">
              {({ input }) => (
                <div className="profile-data__input">
                  <input {...input} type="text" placeholder="Name" />
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field name="lookingForAJob" type="checkbox">
              {({ input }) => (
                <div className="profile-data__checkbox">
                  <label htmlFor="lfj-checkbox">Looking for a job</label>
                  <input {...input} type="checkbox" id="lfj-checkbox" />
                </div>
              )}
            </Field>
            <div>
              <Field name="lookingForAJobDescription">
                {({ input }) => (
                  <div className="profile-data__input">
                    <input {...input} type="text" placeholder="Looking for a job description" />
                  </div>
                )}
              </Field>
            </div>
          </div>
          <div>
            <Field name="aboutMe">
              {({ input }) => (
                <div className="profile-data__input">
                  <input {...input} type="text" placeholder="profession skills" />
                </div>
              )}
            </Field>
          </div>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key}>
                <Field name={'contacts.' + key}>
                  {({ input }) => (
                    <div className="profile-data__input">
                      <input {...input} type="text" placeholder={key} />
                    </div>
                  )}
                </Field>
              </div>
            );
          })}
          <button
            // onClick={(e) => {
            //   e.preventDefault();
            //   setProfileDataEditMode(false);
            // }}
            className="save-data__button"
          >
            save
          </button>
        </form>
      )}
    ></Form>
  );
};
const ProfileInfoData = ({ profile, setProfileDataEditMode }) => {
  return (
    <div className="profile__info profile-info">
      <ul className="profile-info__list">
        <li>
          <p className="profile-info__item">
            <span>Name:</span>
            {profile.fullName}
          </p>
        </li>
        <li>
          <p className="profile-info__item">
            <span>Looking for a job:</span>
            {profile.lookingForAJob ? 'yes' : 'no'}
          </p>
        </li>
        <li>
          <p className="profile-info__item">
            <span>Description:</span>
            {profile.lookingForAJobDescription}
          </p>
        </li>
        <li>
          <p className="profile-info__item">
            <span>profession skills:</span>
            {profile.aboutMe}
          </p>
        </li>
      </ul>
      <h3 className="contacts__title">Contacts:</h3>
      <ul className="profile-info__list">
        {Object.keys(profile.contacts).map((key) => {
          return (
            <ProfileContacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </ul>
      <button
        onClick={() => {
          setProfileDataEditMode(true);
        }}
        className="profile-info__button"
      >
        Edit
      </button>
    </div>
  );
};
const ProfileContacts = ({ contactTitle, contactValue }) => {
  return (
    <li>
      <p className="profile-info__item">
        <span>{contactTitle}:</span>
        {contactValue}
      </p>
    </li>
  );
};

export default ProfileInfo;
