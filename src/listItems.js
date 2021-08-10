import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import CategoryIcon from '@material-ui/icons/Category';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PaymentIcon from '@material-ui/icons/Payment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <br></br>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <br></br>
    <ListItem button>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Category" />
    </ListItem>
    <br></br>
    <ListItem button>
      <ListItemIcon>
        <LocalGroceryStoreIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    <br></br>
    <ListItem button>
      <ListItemIcon>
        <PaymentIcon/>
      </ListItemIcon>
      <ListItemText primary="Transactions" />
    </ListItem>
    <br></br>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

export default mainListItems;