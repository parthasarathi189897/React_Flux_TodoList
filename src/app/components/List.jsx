import React from 'react';


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
      let _this = this;
      let props = _this.props;
      let styles = {
        uList: {
          paddingLeft: 0,
          listStyleType: "none"
        },
        listGroup: {
          margin: '5px 0',
          borderRadius: 5
        },
        removeItem: {
          fontSize: 20,
          float: "left",
          position: "absolute",
          top: 12,
          left: 6,
          cursor: "pointer",
          color: "rgb(222, 79, 79)"
        },
        todoItem: {
          paddingLeft: 20,
          fontSize: 17
        }
      };
      let listItems = props.items.map((item, index)=>{
        return (
          <li key={index} className="list-group-item" style={styles.listGroup}>
            <span
              className="glyphicon glyphicon-remove"
              style={styles.removeItem}
              onClick={props.remove.bind(_this, index)}>
            </span>
            <span style={styles.todoItem}>
              {item}
            </span>
          </li>
        );
      });
      return (
        <ul style={styles.uList}>
          {listItems}
        </ul>
      );
    }
}
