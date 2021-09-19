import React from "react";
import BackupIcon from "@material-ui/icons/Backup";

class EditUserPhoto extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[email]", this.props.user.email);
    formData.append("user[fname]", this.props.user.fname);
    formData.append("user[lname]", this.props.user.lname);
    formData.append("user[bio]", this.props.user.bio);
    formData.append("user[photo]", this.state.photo);
    // this.props.updateUser(formData);
    $.ajax({
        url: `/api/users/${this.props.user.id}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false
      });
  }

  render() {
    if (!this.props.user) return null;
    // debugger;
    return (
      <div className="update-user-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="file-input-listing">
            <div className="input-label-listing">
              <BackupIcon />
              <p>Upload Photos</p>
            </div>
          </label>
          <input
            id="file-input-listing"
            type="file"
            onChange={e => {
              // debugger
              this.setState({ photo: e.target.files });
            }}
            multiple
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditUserPhoto;
