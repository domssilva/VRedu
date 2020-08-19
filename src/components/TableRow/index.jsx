import React from 'react';

const TableRow = ({type, link, text}) => {
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
