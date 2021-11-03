import React from "react";
import mapboxgl from "!mapbox-gl";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import BackupIcon from "@material-ui/icons/Backup";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

class CreateListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.photoUrls = [];
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handlePhotos(e) {
    for (let i = 0; i < e.target.files.length; i++) {
      this.photoUrls.push(URL.createObjectURL(e.target.files[i]));
    }
    this.setState({ photos: [...e.target.files, ...this.state.photos] });
  }

  removeImage(e) {
    let index = parseInt(e.currentTarget.dataset.index);
    let photos = this.state.photos;
    photos.splice(index, 1);
    this.photoUrls.splice(index, 1);
    this.setState({ photos: photos });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.address === "" ||
      this.state.city === "" ||
      this.state.state === "" ||
      this.state.zip_code === "" ||
      this.state.num_beds === "" ||
      this.state.price === "" ||
      this.state.photos.length !== 5
    ) {
      this.setState({
        errors: (
          <p className="listing-errors">
            Please fill out all fields and upload 5 photos
          </p>
        ),
      });
    } else {
      if (this.state.errors) this.setState({errors: false});
      mapboxgl.accessToken =
        "pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA";
      const geocoder = mbxGeocoding({
        accessToken: mapboxgl.accessToken,
      });

      geocoder
        .forwardGeocode({
          query: `${this.state.address}, ${this.state.city}, ${this.state.state}`,
          limit: 1,
        })
        .send()
        .then(res => {
          this.setState({
            longitude: res.body.features[0].center[0],
            latitude: res.body.features[0].center[1],
          });
          
          const formData = new FormData();
          formData.append("listing[title]", this.state.title);
          formData.append("listing[description]", this.state.description);
          formData.append("listing[address]", this.state.address);
          formData.append("listing[city]", this.state.city);
          formData.append("listing[state]", this.state.state);
          formData.append("listing[zip_code]", this.state.zip_code);
          formData.append("listing[num_beds]", this.state.num_beds);
          formData.append("listing[longitude]", this.state.longitude);
          formData.append("listing[latitude]", this.state.latitude);
          formData.append("listing[price]", this.state.price);
          for (let i = 0; i < this.state.photos.length; i++) {
            formData.append("listing[photos][]", this.state.photos[i]);
          }
          this.props.createListing(formData).then(this.props.closeModal);
        });
    }
  }

  render() {
    return (
      <div className="create-listing-container">
        <div onClick={this.props.closeModal} className="close-x">
          X
        </div>
        <h3 className="create-listing-h3">Create your new Listing</h3>
        <form className="listing-form" onSubmit={this.handleSubmit}>
          <input
            id="rounded-title"
            className="listing-input"
            type="text"
            value={this.state.title}
            onChange={this.handleChange("title")}
            placeholder="Title"
          />
          <textarea
            className="listing-input"
            value={this.state.description}
            onChange={this.handleChange("description")}
            placeholder="Description"
          />
          <input
            className="listing-input"
            type="text"
            value={this.state.address}
            onChange={this.handleChange("address")}
            placeholder="Address"
          />
          <input
            className="listing-input"
            type="text"
            value={this.state.city}
            onChange={this.handleChange("city")}
            placeholder="City"
          />
          <input
            className="listing-input"
            type="text"
            value={this.state.state}
            onChange={this.handleChange("state")}
            placeholder="State"
          />
          <input
            className="listing-input"
            type="number"
            value={this.state.zip_code}
            onChange={this.handleChange("zip_code")}
            placeholder="Zip Code"
          />
          <input
            className="listing-input"
            type="number"
            value={this.state.num_beds}
            onChange={this.handleChange("num_beds")}
            placeholder="Number of Beds"
          />
          <input
            id="rounded-price"
            className="listing-input"
            type="number"
            value={this.state.price}
            onChange={this.handleChange("price")}
            placeholder="Price"
          />

          <div className="file-input-container">
            <label htmlFor="file-input-listing">
              <div className="input-label-listing">
                <BackupIcon />
                <p>Upload Photos</p>
              </div>
            </label>
            <input
              id="file-input-listing"
              type="file"
              onChange={e => this.handlePhotos(e)}
              multiple
            />
          </div>

          <div className="images-preview-container">
            {this.photoUrls.map((photoUrl, idx) => (
              <div className='image-preview-container' key={`${idx}${this.photoUrls.length}`}>
                <span
                  className="remove-preview-image-x"
                  data-index={idx}
                  onClick={e => this.removeImage(e)}
                >
                 <DeleteRoundedIcon className='listing-preview-delete-icon'/>
                </span>
                <img className='listing-image-preview' src={photoUrl} height="100" alt="Image preview" />
              </div>
            ))}
          </div>

          {this.state.errors}
          <button className="create-listing-button">Create Listing</button>
        </form>
      </div>
    );
  }
}

export default CreateListing;
