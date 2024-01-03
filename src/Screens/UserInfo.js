import React from 'react';
import Style from '../Css/UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={Style.body}>
    <div className={Style.admin_user_head}>Administrator >> User</div>
        <section className="user_box"></section>
        <div className={Style.data}></div>
       
        <div className={Style.users_heading}>USERS</div>
        <form>   
        <label className={Style.userid_text}>User ID:</label>
        <input type="text" placeholder="Saroja_9827" className={Style.userid_input}></input>
        <label className={Style.username_text}>User Name:</label>
        <input type="text" placeholder="Saroja" className={Style.username_input}></input>
        <label className={Style.password_text}>Password:</label>
        <input type="password" placeholder="********" class={Style.password_input}></input>
        <label className={Style.usertype_text}>User Type:</label>
        {/* <input type="dropdown" placeholder="Select" className={Style.usertype_input}></input> */}
        {/* <div className={Style.t-dropdown-block}>
            <div className={Style.t-dropdown-select}>
              <input type="text"  className={Style.t-dropdown-input} placeholder="Select" />
              <div className={Style.t-select-btn}>
            </div>
            </div>
            <ul className="t-dropdown-list">
              <li className="t-dropdown-item">Admin</li>
              <li className="t-dropdown-item">Society User</li>
              
            </ul>
        </div>
        */}
        <label className={Style.accesslevel_text}>User Access Level:</label>
        {/* <div className="custom-dropdown-block">
            <div className="custom-dropdown-select">
              <input type="text" className="custom-dropdown-input" placeholder="Select" />
              <span className="custom-select-btn"></span>
            </div>
            <ul className="custom-dropdown-list">
              <li className="custom-dropdown-item">Level 1</li>
              <li className="custom-dropdown-item">Level 2</li>
              <li className="custom-dropdown-item">Level 3</li>
            </ul>
        </div>
 */}


    <div class={Style.searchbtn_position}>
    <button class={Style.search_btn}>SEARCH</button>
    </div>
    <div class={Style.resetbtn_position}>
        <button class={Style.reset_btn} >RESET</button>
    </div>
    </form>
    </div>
  )
}

export default UserInfo