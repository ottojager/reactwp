import React from 'react';

class Homebanner extends React.Component {

  render() {
    //console.log(this.props.block);
    this.titel = this.props.block.home_banner_titel;
    this.img   = this.props.block.home_banner_afbeelding;
    return (
        <div>
            <h2>{this.titel}</h2>
            <img src={this.img.url} alt={this.titel} />
        </div>
    )
  }
}

export default Homebanner;