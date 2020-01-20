import React from 'react';
import Homebanner from './Homebanner';
import Eenvoudig from './Eenvoudig';
import Overonsbanner from './Overonsbanner';
import Overonsteksten from './Overonsteksten';

class Block extends React.Component {

    getRow = row => {
        switch(row) {
          case 'home_banner':
            return <Homebanner block={this.props.block} />;
          case 'eenvoudig_solliciteren':
            return <Eenvoudig block={this.props.block}  />;
          case 'over_ons_banner':
            return <Overonsbanner block={this.props.block}  />;
          case 'over_ons_teksten':
            return <Overonsteksten block={this.props.block}  />;
            default:
            return null;
        }
    }

    render() {
        //console.log(this.props.block);
        let rowlayout = this.props.block.acf_fc_layout;
        return (
            <div className="block">
                {this.getRow(rowlayout)}
            </div>
        )
    }
}

export default Block;
