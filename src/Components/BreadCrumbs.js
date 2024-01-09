import Style from '../Css/Component.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import React from 'react';

const BreadCrumb = ({ link1, link2 }) => {
  return (
    <div className={Style.breadCrumb}>
      <Breadcrumbs separator='>>' maxItems={2} aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='#'>
          {link1}
        </Link>

        <Link underline='hover' color='inherit' href='#'>
          {link2}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
