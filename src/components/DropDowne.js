import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const fakeData = {
  asset: Array.from({ length: 10 }, (_, index) => ({
    code: `A${index + 1}`,
    account: `Asset Account ${index + 1}`,
    status: index % 2 === 0, // Every other item has status true/false
    action: `https://asset-action-${index + 1}.example.com`,
  })),
  liability: Array.from({ length: 10 }, (_, index) => ({
    code: `L${index + 1}`,
    account: `Liability Account ${index + 1}`,
    status: index % 2 === 0,
    action: `https://liability-action-${index + 1}.example.com`,
  })),
  income: Array.from({ length: 10 }, (_, index) => ({
    code: `I${index + 1}`,
    account: `Income Account ${index + 1}`,
    status: index % 2 === 0,
    action: `https://income-action-${index + 1}.example.com`,
  })),
  expenditure: Array.from({ length: 10 }, (_, index) => ({
    code: `E${index + 1}`,
    account: `Expenditure Account ${index + 1}`,
    status: index % 2 === 0,
    action: `https://expenditure-action-${index + 1}.example.com`,
  })),
};
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedItem(null); // Reset selected item when changing the category
  };

  const handleItemClick = (code) => {
    const selectedCategoryData = fakeData[selectedCategory];
    const selectedItem = selectedCategoryData.find(
      (item) => item.code === code
    );
    setSelectedItem(selectedItem);
  };

  return (
    <div>
      <Select value={selectedCategory} onChange={handleCategoryChange}>
        <MenuItem value='' disabled>
          Select Category
        </MenuItem>
        {Object.keys(fakeData).map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>

      <Drawer
        open={Boolean(selectedCategory)}
        anchor='left'
        onClose={() => setSelectedCategory(null)}
      >
        <List>
          {fakeData[selectedCategory]?.map((item) => (
            <ListItem
              key={item.code}
              button
              onClick={() => handleItemClick(item.code)}
            >
              <ListItemText primary={item.account} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {selectedItem && (
        <div>
          <h2>Selected Item Details</h2>
          <p>Code: {selectedItem.code}</p>
          <p>Account: {selectedItem.account}</p>
          <p>Status: {selectedItem.status ? 'True' : 'False'}</p>
          <a
            href={selectedItem.action}
            target='_blank'
            rel='noopener noreferrer'
          >
            Action Link
          </a>
        </div>
      )}
    </div>
  );
};

export default App;

// const MainMenu = () => {
//   return (
//     <div>
//       <DatabaseMenu />
//       <DatabaseMenu />
//       {/* Add more menus as needed */}
//     </div>
//   );
// };
// export default DatabaseMenu;
// export default MainMenu;
