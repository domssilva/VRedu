import React from 'react';

import './styles.scss';

const TableRow = ({type, link, text, children}) => {
  /*
    By default returns an empty row,
    unless you specify a 'type'
  */

  if (type === 'link') {
    return (
      <tr>
        <td>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            {text}
          </a>
        </td>
      </tr>
    )
  }

  if (type === 'svg-link') {
    return (
      <tr>
        <td>
          <a className="link__svg" href={link} target='_blank' rel='noopener noreferrer'>
            {children}
            <span className="link__span">{text}</span>
          </a>
        </td>
      </tr>
    )
  }

  if (type === 'text') {
    return (
      <tr>
        <td>
          <span>{text}</span>
        </td>
      </tr>
    )
  }

  return (
    <tr>
      <td>
        &nbsp;
      </td>
    </tr>
  )
}

export default TableRow;
