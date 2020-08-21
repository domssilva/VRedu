import React from 'react';

import './styles.scss';

const TableCol = ({title, newClass, children}) => {

  return (
    <table className={newClass}>
      <thead>
        <th>
          {title}
        </th>
      </thead>
      <tfoot>
        {children}
      </tfoot>
    </table>
  )
}

export default TableCol;