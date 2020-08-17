import React from 'react';

import './styles.scss';

const TableCol = ({title, children}) => {

  function stripUrl(url) {
    url = url.replace(/(^\w+:|^)\/\//, '');
    url = url.replace(/(\/$)/, '');
    url = url.replace('.com', '');
    url = url.replace('/podcast', '');
    url = url.replace(/^www./, '');
    return url;
  }

  return (
    <table>
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