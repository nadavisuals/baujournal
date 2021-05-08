import React from 'react';

export function DropDownContent(props) {
  return (
    <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown">
          {props.title}
        </button>
        {<div className="dropdown-menu">
          {props.list.map((item) => (
            <a className="dropdown-item" key={item.id} href="/">{item.title}</a>
          ))}
        </div>}
      </div>
  )
}