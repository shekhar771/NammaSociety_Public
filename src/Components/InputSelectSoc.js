import { Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import '../Css/Component.css';
import { getFirestore, query,where,collection, onSnapshot, getDocs } from 'firebase/firestore'; // Firestore functions
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase/firebaseConfig';

//autocomplete
export const CustomSearchAuto = ({ label, placeholder, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate()
  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchKeys, setSearchKeys] = useState([]);
  // const db = getFirestore();
  const Societies = collection(db, 'societyNames');
  useEffect(() => {
    const fetchSocieties = async () => {
      if (value.length > 0) {
        const querySnapshot = await getDocs(collection(db, 'societyNames'));
        const societiesData = [];
        querySnapshot.forEach((doc) => {
          const societyName = doc.data().Name.toLowerCase();
          if (societyName.includes(value.toLowerCase())) {
            societiesData.push({ id: doc.id, name: societyName });
          }
        });
        setSearchResults(societiesData.map(s => s.name));
        setSearchKeys(societiesData.map(s => s.id));
      } else {
        setSearchResults([]);
        setSearchKeys([]);
      }
    };
  
    fetchSocieties();
  }, [value]);

  const getSocieties = (response) => {
    setSearchResults([]);
    setSearchKeys([]);
    let searchQuery = value.toLowerCase();
    for (const key in response) {
      let result = response[key].Name.toLowerCase();
      if (result.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
        setSearchResults((prevResults) => [...prevResults, result]);
        setSearchKeys((prevResults) => [...prevResults, key]);
      }
    }
  };


  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={searchResults}
      className='autocompleteContainer' // Apply the class to the Autocomplete component
      // sx={{ width: 300 }}
      label=''
      placeholder='Placeholder'
      // disableClearable // Add this prop to disable the clear button
      // label='Society'
      onChange = {(e,selectedValue)=>{
        if(selectedValue){
          navigate('/Home/EditSociety',{state:searchKeys[0]})
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label='' placeholder='Enter Society name' 
        onChange={(e)=>{
          setValue(e.target.value)
        }} />
      )}
    />
  );
};

const society = [
  { label: 'DattaMeghe Society', year: 1994 },
  { label: 'Namma Society ', year: 1994 },
  { label: 'Avadh society', year: 1994 },
  { label: 'The Shawshank Society', year: 1994 },
  { label: 'Ubra Society', year: 1994 },
  { label: 'Navi mumbai society', year: 1994 },
];

//input
export const CustomTextField = ({ label, placeholder }) => {
  return (
    <TextField
      sx={{
        '&:focus': {
          border: '2px solid #007bff', // Change the border color on focus
        },
      }}
      //     minHeight: '5vh',
      //     width: '57vw',
      //     maxHeight: '6vh',
      //     backgroundColor: '#f5f5f51f',
      //     borderRadius: '8%',
      //     fontFamily: 'Inter',
      //     fontWeight: 'Regular',
      //     fontSize: '24px',
      //     marginLeft: '1vh',
      //     boxShadow: '1px 2px 2px 1px rgba(201, 199, 199, 0.8)',
      //     border: '1px solid #afafaf',
      //     padding: '2px',
      //     transition: 'border-width 0.3s ease',
      //   }}
      id='outlined-basic'
      label={label}
      placeholder={placeholder}
      variant='outlined'
    />
  );
};

export const CustomTextFieldAddress = () => {
  return (
    <TextField
      id='outlined-multiline-static'
      multiline
      rows={4}
      label=''
      variant='outlined'
      placeholder='Address'
    />
  );
};
export const CustomTextField2 = ({ label, placeholder }) => {




  <TextField
    sx={{
      '&:focus': {
        border: '2px solid #007bff', // Change the border color on focus
      },
    }}
    //     minHeight: '5vh',
    //     width: '57vw',
    //     maxHeight: '6vh',
    //     backgroundColor: '#f5f5f51f',
    //     borderRadius: '8%',
    //     fontFamily: 'Inter',
    //     fontWeight: 'Regular',
    //     fontSize: '24px',
    //     marginLeft: '1vh',
    //     boxShadow: '1px 2px 2px 1px rgba(201, 199, 199, 0.8)',
    //     border: '1px solid #afafaf',
    //     padding: '2px',
    //     transition: 'border-width 0.3s ease',
    //   }}
    id='outlined-basic'
    label={label}
    placeholder={placeholder}
    variant='outlined'
  />;
};
export const CustomTextField3 = ({ label, placeholder }) => {
  <TextField
    sx={{
      '&:focus': {
        border: '2px solid #007bff', // Change the border color on focus
      },
    }}
    id='outlined-basic'
    label={label}
    placeholder={placeholder}
    type='number'
    variant='outlined'
  />;
};