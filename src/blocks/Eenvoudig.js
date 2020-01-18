import React from 'react';

class Eenvoudig extends React.Component {

  render() {
    //console.log(this.props.block);
    this.titel = this.props.block.eenvoudig_solliciteren_titel;
    this.blok   = this.props.block.eenvoudig_solliciteren_blok;
    return (
        <div className="grid-x">
            <h2 className="cell small-12">{this.titel}</h2>
            <div className="cell medium-8 large-8 grid-x">
            {this.blok.map((tekst, index) => {
              return (
                <p key={index} className="cell medium-6">{tekst.eenvoudig_solliciteren_blok_tekst}</p>
              )
            })}
            </div>
        </div>
    )
  }
}

export default Eenvoudig;