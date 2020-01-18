import React from 'react';

class Overonsbanner extends React.Component {

  render() {
    //console.log(this.props.block);
    this.tekst = this.props.block.over_ons_banner_tekst;
    this.img   = this.props.block.over_ons_banner_foto;
    return (
        <div>
            <img src={this.img.url} alt="Over ons" />
            <p>{this.tekst}</p>
        </div>
    )
  }
}

export default Overonsbanner;