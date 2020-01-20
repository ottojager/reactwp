import React from 'react';
import Block from './blocks/Block';

class PageContent extends React.Component {

    state = {
        pages    : [],
        pageName : '',
        loading  : false
    }

    componentDidMount() {
        this.setState({loading:true, pageName: this.props.match.params.pagename})
        // fetch WordPress page data from WP REST API
        fetch('http://localhost:80/medicore/wp-json/wp/v2/pages')
         .then(data => data.json())
         .then(data => {
            this.setState(({pages: data, loading:false}));
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
        if (this.state.loading) { return <div className="container">Loading...</div> }
        else return ( // map through pages and return title and ACF blocks
            this.state.pages.map((page, index) => {
                if (page.slug === this.state.pageName || (this.state.pageName === 'medicore' && page.slug === 'home')) {
                    if (page.acf.blocks) {
                        return (
                            <div key={index}>
                                <h1>{page.title.rendered}</h1>
                                <div>
                                {page.acf.blocks.map((block, index) => {
                                    // get Block component for each ACF block
                                    return <Block key={index} block={block} />
                                })}
                                </div>
                            </div>
                        )
                    }
                    else return null
                }
                else return null
            })   
        )
    }
}

export default PageContent;