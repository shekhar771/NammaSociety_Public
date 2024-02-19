import React from 'react';
import Style from '../Css/UserInfo.module.css';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';


const UserInfo = () => {

  return (
    <div className={Style.body}>
    <div className={Style.admin_user_head}>Administrator >> User</div>
        <section className="user_box"></section>
        <div className={Style.data}></div>
       
        <div className={Style.users_heading}>USERS</div>
        
        <label className={Style.userid_text}>User ID:</label>
        <input type="text" placeholder="Saroja_9827" className={Style.userid_input}></input>
        <label className={Style.username_text}>User Name:</label>
        <input type="text" placeholder="Saroja" className={Style.username_input}></input>
        <label className={Style.password_text}>Password:</label>
        <input type="password" placeholder="********" class={Style.password_input}></input>
        <label className={Style.usertype_text}>User Type:</label>
        <label className={Style.accesslevel_text}>User Access Level:</label>
        <Select
      placeholder="Select"
      
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 628,
        height: 78,
        top: 660,
        left: 82,
        backgroundColor:'#E6F5F1',
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="Admin">Admin</Option>
      <Option value="Society User">Society User</Option>
      
    </Select>

      <Select
      
      placeholder="Select"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 628,
        height: 78,
        top: 679,
        left: 82,
        backgroundColor:'#E6F5F1',
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="level_1">Level 1</Option>
      <Option value="level_2">Level 2</Option>
      <Option value="level_3">Level 3</Option>
    </Select>
     

    <div class={Style.searchbtn_position}>
    <button class={Style.search_btn}>SEARCH</button>
    </div>
    <div class={Style.resetbtn_position}>
        <button class={Style.reset_btn} >RESET</button>
    </div>
    
    </div>
  )
}

export default UserInfo