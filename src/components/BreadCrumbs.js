// import Style from '../Css/Component.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'; // Import the Link from react-router-dom
import '../Css/Component.css';
import React from 'react';

const BreadCrumb = ({ link1, link2, path1, path2 }) => {
  return (
    <div className='breadCrumb'>
      <Breadcrumbs separator='>>' maxItems={2} aria-label='breadcrumb'>
        <Link
          underline='hover'
          color='inherit'
          //  href='#'
          component={RouterLink}
          to={path1}
        >
          {link1}
        </Link>

        <Link
          underline='hover'
          color='inherit'
          // href='#'
          component={RouterLink}
          to={path2}
        >
          {link2}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
