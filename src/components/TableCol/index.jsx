import React from 'react';

import './styles.scss';

const TableCol = ({title, newClass, children}) => {

  return (
    <table className={newClass}>
      <thead>
        <tr>
          <th>
            {title}
          </th>
        </tr>
      </thead>
      <tfoot>
        {children}
      </tfoot>
    </table>
  )
}

export default TableCol;