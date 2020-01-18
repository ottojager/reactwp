import React from 'react';

class Overonsteksten extends React.Component {

  render() {
    //console.log(this.props.block);
    this.teksten = this.props.block;
    this.tekst1 = this.teksten.over_ons_teksten_1;
    this.tekst2 = this.teksten.over_ons_teksten_2;
    return (
        <div>
          <p>{this.tekst1}</p>
          <p>{this.tekst2}</p>
        </div>
    )
  }
}

export default Overonsteksten;