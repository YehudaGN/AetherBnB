import React from "react";
import mapboxgl from "!mapbox-gl";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import BackupIcon from "@material-ui/icons/Backup";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import LoopIcon from "@mui/icons-material/Loop";

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
      
      let spinner = (
        <div className="listings-spinner-container">
          <LoopIcon className="listings-spinner" sx={{ fontSize: 300 }} />
        </div>
      );
      this.setState({
        spinner: spinner,
        loading: "loading",
        containerLoading: "container-loading",
      });
      if (this.state.errors) this.setState({ errors: false });
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
      <div
        className={`create-listing-container ${this.state.containerLoading}`}
      >
        {this.state.spinner}
        <div
          onClick={this.props.closeModal}
          className={`close-x ${this.state.loading}`}
        >
          X
        </div>
        <h3 className={`create-listing-h3 ${this.state.loading}`}>
          Create your new Listing
        </h3>
        <form
          className={`listing-form ${this.state.loading}`}
          onSubmit={this.handleSubmit}
        >
          <input
            id="rounded-title"
            className={`listing-input ${this.state.loading}`}
            value={this.state.title}
            onChange={this.handleChange("title")}
            placeholder="Title"
          />
          <textarea
            className={`listing-input ${this.state.loading}`}
            value={this.state.description}
            onChange={this.handleChange("description")}
            placeholder="Description"
          />
          <input
            className={`listing-input ${this.state.loading}`}
            type="text"
            value={this.state.address}
            onChange={this.handleChange("address")}
            placeholder="Address"
          />
          <input
            className={`listing-input ${this.state.loading}`}
            type="text"
            value={this.state.city}
            onChange={this.handleChange("city")}
            placeholder="City"
          />
          <input
            className={`listing-input ${this.state.loading}`}
            type="text"
            value={this.state.state}
            onChange={this.handleChange("state")}
            placeholder="State"
          />
          <input
            className={`listing-input ${this.state.loading}`}
            type="number"
            value={this.state.zip_code}
            onChange={this.handleChange("zip_code")}
            placeholder="Zip Code"
          />
          <input
            className={`listing-input ${this.state.loading}`}
            type="number"
            value={this.state.num_beds}
            onChange={this.handleChange("num_beds")}
            placeholder="Number of Beds"
          />
          <input
            id="rounded-price"
            className={`listing-input ${this.state.loading}`}
            type="number"
            value={this.state.price}
            onChange={this.handleChange("price")}
            placeholder="Price"
          />

          <div className={`file-input-container ${this.state.loading}`}>
            <label htmlFor="file-input-listing">
              <div className={`input-label-listing ${this.state.loading}`}>
                <BackupIcon className={`${this.state.loading}`} />
                <p className={`${this.state.loading}`}>Upload Photos</p>
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
              <div
                className={`image-preview-container ${this.state.loading}`}
                key={`${idx}${this.photoUrls.length}`}
              >
                <span
                  className={`remove-preview-image-x ${this.state.loading}`}
                  data-index={idx}
                  onClick={e => this.removeImage(e)}
                >
                  <DeleteRoundedIcon
                    className={`listing-preview-delete-icon ${this.state.loading}`}
                  />
                </span>
                <img
                  className={`listing-image-preview ${this.state.loading}`}
                  src={photoUrl}
                  height="100"
                  alt="Image preview"
                />
              </div>
            ))}
          </div>

          {this.state.errors}
          <button className={`create-listing-button ${this.state.loading}`}>
            Create Listing
          </button>
        </form>
      </div>
    );
  }
}

export default CreateListing;
