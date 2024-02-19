import React, { useEffect, useState } from 'react';
//----------Custom components------
import { HighLight, InnerDisplay, CustomPaper } from '../Components/Wrapper.js';
import BreadCrumb from '../Components/BreadCrumbs.js';
import SearchBar from '../Components/SearchBar.js';

//----------Css------
import '../Css/Component.css';
// Import your Firebase Firestore or Realtime Database instance

//----------firebase imports------

// import { getAuthHeaders } from '../userAuth/UserAuth.js';
import { useUserAuth } from '../userAuth/UserAuth';
import { auth } from '../Firebase/firebaseConfig.js';
import CustomButton, { CustomSelector } from '../Components/CustomButton.js';
import { CustomizedTables2 } from '../Components/Table.js';

const BillingHeads = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTable, setSelectedTable] = useState(1);
  const [activeButton, setActiveButton] = useState(1); // Default active button is 1

  const handleButtonClick = (tableNumber) => {
    setActiveButton(tableNumber);
    setSelectedTable(tableNumber);
  };
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };
  const triggerSearch = () => {
    console.log('Current search query:', searchQuery);

    handleSearch(searchQuery);
  };

  //This is for options

  const { user } = useUserAuth();

  const handleSubmit = async () => {
    try {
      console.log(JSON.stringify());
      console.log(`Bearer ${await user.getIdToken()}`);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <InnerDisplay>
      <BreadCrumb
        link1='Administrator'
        link2='Billing heads'
        path1='/Home/'
        path2='/Home/BillingHeads'
      />
      <CustomPaper>
        <HighLight KeyWord='Billing Heads' />
        <SearchBar
          setSearchQuery={setSearchQuery}
          placeholder='    Search User ID/ User Name'
          onSearch={handleSearch}
        />

        <div className='CustomSelector'>
          <CustomSelector
            buttonText='All'
            onClick={() => handleButtonClick(1)}
            active={activeButton === 1} // Apply active class if activeButton is 4
          />
          {/* Buttons to select tables */}
          <CustomSelector
            buttonText='Assets'
            onClick={() => handleButtonClick(2)}
            active={activeButton === 2} // Apply active class if activeButton is 1
          />
          <CustomSelector
            buttonText='Liability'
            onClick={() => handleButtonClick(3)}
            active={activeButton === 3} // Apply active class if activeButton is 2
          />
          <CustomSelector
            buttonText='Income'
            onClick={() => handleButtonClick(4)}
            active={activeButton === 4} // Apply active class if activeButton is 3
          />
          <CustomSelector
            buttonText='Expenditure'
            onClick={() => handleButtonClick(5)}
            active={activeButton === 5} // Apply active class if activeButton is 4
          />
        </div>
        {/* Render selected table based on button click */}
        {selectedTable === 1 && <CustomizedTables2 />}
        {selectedTable === 2 && <CustomizedTables2 />}
        {selectedTable === 3 && <CustomizedTables2 />}
        {selectedTable === 4 && <CustomizedTables2 />}
        {selectedTable === 5 && <CustomizedTables2 />}
        <div className='buttonses'>
          <CustomButton buttonText='Add New' onClick={handleSubmit} />
        </div>
      </CustomPaper>
    </InnerDisplay>
  );
};

export default BillingHeads;
