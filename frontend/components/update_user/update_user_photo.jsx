import React from "react";
import BackupIcon from "@material-ui/icons/Backup";

class EditUserPhoto extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[email]", this.props.user.email);
    formData.append("user[fname]", this.props.user.fname);
    formData.append("user[lname]", this.props.user.lname);
    formData.append("user[bio]", this.props.user.bio);
    formData.append("user[photo]", this.state.photo);

    $.ajax({
      url: `/api/users/${this.props.user.id}`,
      method: "PATCH",
      data: formData,
      contentType: false,
      processData: false,
    });
  }

  render() {
    if (!this.props.user) return null;
    return (
      <div className="update-user-photo-flex-container">
        <div className="update-user-photo-container">
          <div className="profile-photos-header-container">
            <h3 className="profile-photos-header-h3">Profile photos</h3>
          </div>
          <div className="profile-photo-form-container">
            <div className="profile-photo-form-header-container">
              <h5 className="profile-photo-form-header-h5">Profile Photo</h5>
            </div>
            <form  className='update-profile-photo-form' onSubmit={e => this.handleSubmit(e)}>
              <div className="upload-photo-input-container">
                <label htmlFor="file-input-listing">
                  <div className="input-label-listing">
                    <BackupIcon />
                    <p>Upload a file from your computer</p>
                  </div>
                </label>
                <input
                  id="file-input-listing"
                  type="file"
                  onChange={e => {
                    this.setState({ photo: e.currentTarget.files[0] });
                  }}
                  multiple
                />
              </div>
              <button className='update-profile-pic-button'>Update Profile Picture</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUserPhoto;
