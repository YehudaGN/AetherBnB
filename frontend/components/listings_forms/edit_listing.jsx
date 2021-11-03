import React from "react";
import mapboxgl from "!mapbox-gl";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import BackupIcon from "@material-ui/icons/Backup";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

class EditListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.photoUrls = [];
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  componentDidUpdate() {
    if (!this.state) this.setState(this.props.listing);
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
      this.state.price === ""
      // ||
      // this.state.photos.length !== 5
    ) {
      this.setState({
        errors: <p className="listing-errors">Please fill out all fields</p>,
      });
    } else {
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

          // if (this.state.photos.length !== 0) {
          //   for (let i = 0; i < this.state.photos.length; i++) {
          //     formData.append("listing[photos][]", this.state.photos[i]);
          //   }
          // }

          $.ajax({
            url: `/api/listings/${this.props.listing.id}`,
            method: "PATCH",
            data: formData,
            contentType: false,
            processData: false,
          }).then(() =>
            this.props.history.push(`/listing/show/${this.props.listing.id}`)
          );
        });
    }
  }

  render() {
    if (!this.props.listing) return null;
    if (!this.state) return null;
    let listing = this.props.listing;
    let photos = this.props.listing.photos;
    if (photos) this.photoUrls = photos;
    return (
      <div className="edit-listing-container">
        <h3 className="edit-listing-h3">Update Listing</h3>
        <form className="edit-listing-form" onSubmit={this.handleSubmit}>
          <label className="input-label">
            <span className="label-text">Title</span>
            <input
              id="rounded-title"
              className="edit-listing-input"
              type="text"
              value={this.state.title}
              onChange={this.handleChange("title")}
              placeholder="Title"
            />
          </label>
          <label className="input-label">
            <span className="label-text">Description</span>
            <textarea
              className="edit-listing-input"
              value={this.state.description}
              onChange={this.handleChange("description")}
              placeholder="Description"
            />
          </label>
          <label className="input-label">
            <span className="label-text">Address</span>
            <input
              className="edit-listing-input"
              type="text"
              value={this.state.address}
              onChange={this.handleChange("address")}
              placeholder="Address"
            />
          </label>
          <label className="input-label">
            <span className="label-text">City</span>
            <input
              className="edit-listing-input"
              type="text"
              value={this.state.city}
              onChange={this.handleChange("city")}
              placeholder="City"
            />
          </label>
          <label className="input-label">
            <span className="label-text">State</span>
            <input
              className="edit-listing-input"
              type="text"
              value={this.state.state}
              onChange={this.handleChange("state")}
              placeholder="State"
            />
          </label>
          <label className="input-label">
            <span className="label-text">Zip Code</span>
            <input
              className="edit-listing-input"
              type="number"
              value={this.state.zip_code}
              onChange={this.handleChange("zip_code")}
              placeholder="Zip Code"
            />
          </label>
          <label className="input-label">
            <span className="label-text">Number of beds</span>

            <input
              className="edit-listing-input"
              type="number"
              value={this.state.num_beds}
              onChange={this.handleChange("num_beds")}
              placeholder="Number of Beds"
            />
          </label>
          <label className="input-label">
            <span className="label-text">Price</span>
            <input
              id="rounded-price"
              className="edit-listing-input"
              type="number"
              value={this.state.price}
              onChange={this.handleChange("price")}
              placeholder="Price"
            />
          </label>

          {/* <div className="file-input-container">
            <label htmlFor="file-input-listing">
              <div className="input-label-listing">
                <BackupIcon />
                <p>Upload New Photos</p>
              </div>
            </label>
            <input
              id="file-input-listing"
              type="file"
              onChange={e => this.handlePhotos(e)}
              multiple
            />
          </div> */}

          {/* <div className="image-preview-container">
            {this.photoUrls.map((photoUrl, idx) => (
              <div key={`${idx}${this.photoUrls.length}`}>
                <span
                  className="remove-preview-image-x"
                  data-index={idx}
                  onClick={e => this.removeImage(e)}
                >
                  <DeleteRoundedIcon />
                </span>
                <img src={photoUrl} height="100" alt="Image preview" />
              </div>
            ))}
          </div> */}

          {this.state.errors}

          <button className="edit-listing-button">Update Listing</button>
        </form>
      </div>
    );
  }
}

export default EditListing;
