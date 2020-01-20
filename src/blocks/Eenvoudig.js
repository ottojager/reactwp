import React from 'react';

class Eenvoudig extends React.Component {

  render() {
    //console.log(this.props.block);
    this.titel = this.props.block.eenvoudig_solliciteren_titel;
    this.blok   = this.props.block.eenvoudig_solliciteren_blok;
    return (
        <div className="container">
          <div className="row">
              <h2 className="col-sm-12">{this.titel}</h2>
              <div className="col-md-8 col-lg-8 row">
              {this.blok.map((tekst, index) => {
                return (
                  <p key={index} className="col-md-6">{tekst.eenvoudig_solliciteren_blok_tekst}</p>
                )
              })}
              </div>
          </div>
        </div>
    )
  }
}

export default Eenvoudig;