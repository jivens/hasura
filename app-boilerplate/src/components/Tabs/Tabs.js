import React from 'react'
var _ = require('underscore')
var createReactClass = require('create-react-class')
var classSet = require('react-classset')

var TabbedArea = createReactClass({

    getInitialState: function () {
      return {
        activeIndex: this.props.activeIndex || 0
      };
    },
  
    render: function () {
      var self = this;
      var tabNodes = _.map(this.props.children, function (child, index) {
        var className = classSet({'active': self.state.activeIndex === index});
        return (
          <li onClick={self._handleClick.bind(null, index)} key={'Tab' + index}>
            <a className={className} href="#">{child.props.display}</a>
          </li>
        );
      });
  
      var contentNodes = _.map(this.props.children, function (child, index) {
        if(self.state.activeIndex === index) {
          return (
            <div className="TabPane" key={'TabPane' + index}>
              {child.props.children}
            </div>
          );
        }
      });
  
      return (
        <div className="TabbedArea">
          <ul className="Tab clearfix">
            {tabNodes}
          </ul>
          <section>
            {contentNodes}
          </section>
        </div>
      );
    },
  
    _handleClick: function (index) {
      this.setState({
        activeIndex: index
      });
    }
  });
  
  var TabPane = createReactClass({
    render: function () {
      var active = this.props.active || false;
      if (active) {
        return this.props.children;
      } else {
        return null;
      }
    }
  });

  export {
    TabPane,
    TabbedArea
  }