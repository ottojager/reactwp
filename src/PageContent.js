import React from 'react';
import Block from './blocks/Block';

class PageContent extends React.Component {
    constructor(props) {
        super(props);
        // Bind this so we can use this.setState().
        this.state = {
            pages  : [],
            pageName : ''
        };
    }

    componentDidMount() {
        this.setState({pageName: this.props.match.params.pagename})
        fetch('http://localhost:80/medicore/wp-json/wp/v2/pages')
         .then(data => data.json())
         .then(data => {
            this.setState(({pages: data}));
        })
         .catch((error) => {
            console.error(error);
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          this.onRouteChanged();
        }
      }
    
      onRouteChanged() {
        if (this.updateTimer) return;
        this.setState({ pageName: this.props.match.params.pagename });
        this.updateTimer = setTimeout(() => {
          this.setState({ pageName: this.props.match.params.pagename });
          this.updateTimer = null;
        }, 1000);
      }

    render() {
        return (
            this.state.pages.map((page, index) => {
                if (page.slug === this.state.pageName || (this.state.pageName === 'medicore' && page.slug === 'home')) {
                    if (page.acf.blocks) {
                        return (
                            <div key={index}>
                                <h1>{page.title.rendered}</h1>
                                <div>
                                {page.acf.blocks.map((block, index) => {
                                    return <Block key={index} block={block} />
                                })}
                                </div>
                            </div>
                        )
                    }
                    else return null; 
                }
                else return null;       
            })   
        )
    }
}

export default PageContent;