//For main paper
import React from 'react';
// import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import '../Css/Component.css'
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FaAngleDown } from "react-icons/fa";
//Use UserUnlock as an example

//Title tag
export const HighLight = ({ KeyWord }) => {
  return <div className='highLight'>{KeyWord}</div>;
};
// Main body the 1st tag
// export const MainBody = ({ children }) => {
//   return <div className={Style.body}>{children}</div>;
// };

//Paper module

const Pager = ({ children }) => {
  return (
    <Stack direction='row' spacing={2}>
      {children}
    </Stack>
  );
};
export default Pager;

// export const DemoPaper = styled(Paper)(({ theme }) => ({
//   marginTop:"20px",
//   minWidth: '80vw',
//   width: "100%",
//   // never add height or code will break
//   minHeight: '90vh',
//   padding: theme.spacing(3),
//   ...theme.typography.body2,
//   textAlign: 'center',
//   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.18)',
//   marginBottom: '10vh',
//   // borderRadius: '3vh',
//   boxSizing: 'border-box',
//   padding: '3vh 5.5vh',
// }));

export const CustomPaper = ({children})=>{
  return(
    <div className='customPaper'>{children}
    </div>
  )
}

export const InnerDisplay = ({children}) =>{
  return <div  className='innerDisplay'>
    {children}
    </div>
}


export const AdminInnList = ({ListItemClick}) =>{
  return <div style={{marginLeft:"20px",borderLeft:"0.5px solid", borderColor:"#ccc"}}> 
    < List >
    {[
      {text:"User"},
      {text:"Userunlock"},
      {text:"AdminList"},
      {text:"Accounting group"},
    ].map(({text}, index)=>(
      <ListItem key ={text} disablePadding>
        <ListItemButton style={{minHeight:48}} onClick={()=> ListItemClick(index)}>
          <ListItemText primary ={text}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  </div>
}

const SocInfoInList = () =>{
  return <div style={{marginLeft:"20px",borderLeft:"0.5px solid", borderColor:"#ccc"}}> 
    < List >
    {[
      "Billing Heads",
      "Soc Gls",
      "Invoice Note",
      "Accounting Order",
      "Banks",
      "Create User",
      "User List",
    ].map((text, index)=>(
      <ListItem key ={text} disablePadding>
        <ListItemButton style={{minHeight:48}}>
          <ListItemText primary ={text}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  </div>
}

export const SocietyInList = () =>{
  const [SocInfo, setSocInfo] = React.useState(false)
  const handleOpenSocInfo = ()=>{
    setSocInfo((prevSocInfo)=>!prevSocInfo);
  }
  return <div style={{marginLeft:"20px",borderLeft:"0.5px solid", borderColor:"#ccc"}}> 
    < List >
    <ListItem disablePadding>
      <ListItemButton onClick={handleOpenSocInfo} style={{minHeight:48}}>
        <ListItemText primaryTypographyProps={{color:"rgba(57, 56, 106, 1)", fontWeight:"bold"}} primary ={'Society Info'}/>
        <ListItemIcon><FaAngleDown/></ListItemIcon>
      </ListItemButton>
    </ListItem>
    <Collapse in={SocInfo} timeout='auto' unmountOnExit>
    <SocInfoInList/>
    </Collapse>
    {[
      "Members",
      "Billing Heads",
      "Opening Balance",
      "Cost Center Op",
      "Members",
      "Billing Heads",
      "Opening Balance",
      "Cost Center Op",
      "Members Upload",
      "Sub-Ledger Map",
      "Pre-Reconcilliation",
      "Provisions",
      "Recon Date",
      "Budget",
    ].map((text, index)=>(
      <ListItem key ={text} disablePadding>
        <ListItemButton style={{minHeight:48}}>
          <ListItemText primary ={text}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  </div>
}

export const OperaInList = () =>{
  return <div style={{marginLeft:"20px",borderLeft:"0.5px solid", borderColor:"#ccc"}}> 
    < List >
    {[
      "Voucher Entry",
      "Cheque Return",
      "Monthly Data",
      "Modify Due Date",
      "Invoice Generate",
      "Invoice Generate-Other",
      "Invoice Search",
      "Reconciliation",
      "Edit Reconciliation",
    ].map((text, index)=>(
      <ListItem key ={text} disablePadding>
        <ListItemButton style={{minHeight:48}}>
          <ListItemText primary ={text}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  </div>
}

export const RepoInList = () =>{
  return <div style={{marginLeft:"20px",borderLeft:"0.5px solid", borderColor:"#ccc"}}> 
    < List >
    {[
      "Ad Hoc Report",
      "Pay-In-Slip",
      "Invoices",
      "Receipts",
      "Bank/Cash Book",
      "Member Ledger ",
      "General Ledger",
      "Member-Os",
      "Trail Balance",
      "Receipt & Payments",
      "Transaction Summary",
      "Journal Voucher",
      "Debit/Credit Note",
      "Cheque Return List",
      "Payments",
      "Reconciliation",
      "balancesheet",
      "Sub Ledger",
      "Sub Ledger Out Standing",
      "Purchase/Sale Register",
      "Budget Report",
    ].map((text, index)=>(
      <ListItem key ={text} disablePadding>
        <ListItemButton style={{minHeight:48}}>
          <ListItemText primary ={text}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  </div>
}

export const UtilInList = () =>{
  return <div style={{marginLeft:"20px",borderLeft:"0.5px solid", borderColor:"#ccc"}}> 
    < List >
    {[
      "Batch Process-Maker",
      "Batch Process-Checker",
      "Download Invoices",
      "Alie Receipts",
      "Alie Payments",
      "Cost Center Recon ",
      "Web Email",
      "Data Recon",
      "Adjust Bills",
    ].map((text, index)=>(
      <ListItem key ={text} disablePadding>
        <ListItemButton style={{minHeight:48}}>
          <ListItemText primary ={text}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  </div>
}

// export const DemoPaper = styled(Paper)(({ theme }) => ({
//   width: '80vw',
//   // never add height or code will break
//   minHeight: '90vh',
//   padding: theme.spacing(3),
//   ...theme.typography.body2,
//   textAlign: 'center',
//   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.18)',
//   marginBottom: '10vh',
//   borderRadius: '3vh',
//   boxSizing: 'border-box',
//   padding: '3vh 5.5vh',
//   backgroundColor: 'blue',
// }));
