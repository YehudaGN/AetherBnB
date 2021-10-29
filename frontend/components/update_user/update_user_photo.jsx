import React from "react";
import BackupIcon from "@material-ui/icons/Backup";

class EditUserPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.prevPhoto;
    this.photoUrl = null;
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  handlePhoto(e) {
    this.prevPhoto = this.props.user.photo
    this.photoUrl = URL.createObjectURL(e.target.files[0]);
    this.setState({ photo: e.target.files[0] });
  }

  removeImage(e) {
    this.photoUrl = null;
    this.setState({photo: this.prevPhoto});
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
    }).then(() =>
      this.props.history.push(`/users/show/${this.props.match.params.userId}`)
    );
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
            <form
              className="update-profile-photo-form"
              onSubmit={e => this.handleSubmit(e)}
            >
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
                  onChange={e => this.handlePhoto(e)}
                  multiple
                />
              </div>
              <div className="user-update-photo-preview-container">
                {this.photoUrl ? (
                  <img
                    className="user-update-photo-preview"
                    src={this.photoUrl}
                    alt="User Profile Pic"
                    height="200"
                    width="200"
                  />
                ) : (
                  ""
                )}
                {this.photoUrl ? (
                  <li
                    className="remove-profile-photo-li"
                    onClick={e => this.removeImage(e)}
                  >
                    Remove Photo
                  </li>
                ) : (
                  ""
                )}
              </div>
              <button className="update-profile-pic-button">
                Update Profile Picture
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUserPhoto;
