import React from 'react';

class WPSitesSelector extends React.Component {
  // Render method.
  render() {
    // Array with links.
    const data = [
      {
        url: 0,
        title: 'Select a Site'
      },
      {
        url: 'https://tommcfarlin.com/wp-json/wp/v2/posts',
        title: 'TomMcFarlin.com'
      },
      {
          url: 'http://localhost/eye4inclusie/wp-json/wp/v2/pages',
          title: 'Eye4Inlcusie'
      }
    ];
    // Building a list of options as React Elements with JSX.
    const links = data.map( ( link, index ) => {
      return (
      <option key={index} value={link.url}>
        {link.title}
      </option>)
    });
    // Returning the select dropdown with all the links as options.
    return (
      <select>
      {links}
      </select>
    )
  }
}

export default WPSitesSelector;