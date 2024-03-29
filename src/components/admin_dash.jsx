import React,{useState,useEffect,useContext} from 'react'
import { config } from '../utils/config';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import {toast} from "react-toastify"
import {Typography} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { Select, MenuItem } from "@mui/material";
import Sidebar from "./sidebar";

function Banners() {
    const [offers, setOffers] = useState([{
      "image":"",
      "product_id":""
    }

    ])
    const [products, setProducts] = useState([])
    // const context=useContext(DashboardContext)
    // const {setLoading}=context;
  useEffect(()=>{
    // setLoading(true);
    const requestOptions = {
        headers: {
          method: "GET",
          Authorization: localStorage.getItem('token'),
        },
      };
    axios.get(`${config.BASEURL}/offers/getOffers_deals/`,requestOptions)
    .then((res)=>{
        console.log(res.data.results);
        // setOffers(res.data.results);
        // setLoading(false);
    })
    .catch((err)=>{
        console.log(err);
        // setLoading(false);
    })

    // axios.get(`${config.BASE_URL}/products/getProducts/`,requestOptions)
    // .then((res)=>{
    //     // console.log(res.data.results);
    //     let prod_id=[];
    //     res.data.results?.map((item)=>{prod_id.push({id:item.id,name:item.name})})
    //     setProducts([...prod_id]);
    //     // setLoading(false);
    // })
    // .catch((err)=>{
    //     console.log(err);
    //     // setLoading(false);
        
    // })

  },[])  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width:"30%",
    width: 400,
    bgcolor: "#ffffff",
    border: "none",
    borderRadius: "12px",
    boxShadow: 24,
    p: 1,
    backdropfilter: "blur(4px)",
   
  };
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(-1)

  const handleOpen=(i)=>{
    setId(i);
    console.log(i,offer_deals_data);
    setOpen(true);
}
  const handleClose = () => setOpen(false);
 const [images, setImages] = useState([])
 const [offer_deals_data,setOffer_deals_data]=useState({
  "product_id":0,
  "image":"",
  "status":"ACTIVE",
})
const [offer_deals_update_data,setOffer_deals_update_data]=useState([])
const refresh=()=>{
  const ref_data={
  "product_id":0,
  "image":"",
  "status":"ACTIVE",
  }
  setOffer_deals_data({...ref_data})
}

const handleInput=(key,value)=>{
  setOffer_deals_data({...offer_deals_data,[key]:value})

}


  const handleupload=()=>{
    const  imginput=document.getElementById("offer_deals_img");
    imginput.click();
    const geturl=(e)=>{
     const file=e.target.files[0];
    //  console.log(file)
     if(!file) return;
     setImages([file]);
    
    }
    imginput.addEventListener("change",geturl)

  }

  const handlesubmit=()=>{
    // setLoading(true);
    console.log(offer_deals_data);
    const token= localStorage.getItem("token");
    if(id>=0)
    {
      let offer_deals_update={};
      for(const key in offer_deals_data)
      {
        if(offer_deals_update_data[key]!=offer_deals_data[key])
        offer_deals_update={...offer_deals_update,[key]:offer_deals_data[key]}
      }
      console.log(offer_deals_update,id);
      if(Object.keys(offer_deals_update).length)
      {
        axios
        .patch(`${config.BASE_URL}/offers/updateOffer_deals/${id}`, { offer_deals_update, token })
        .then((res) => {
          console.log(res);
          toast.success("Offer Updated!"); 
           handleClose();
          //  setLoading(false)
        })
        .catch((err) =>{console.log(err)
          toast.error("Something Went Wrong");
          // setLoading(false)
    // navigate("/content")
        });
  
      }


    }
    else
    {
    axios.post(`${config.BASE_URL}/offers/createOffer_deals`,{offer_deals_data,token})
    .then((res)=>{console.log(res.data);
      handleClose();
      toast.success("Offer Created!"); 
    })
    .catch((err)=>{console.log(err);
      toast.error("Something Went Wrong");
    })
    // setLoading(false);

  }
}

  useEffect(()=>{
    
    if(id>=0)
    {
      
          const offers_deals_id_data=offers?.filter((item)=>{return item.id==id})
          // console.log(offers_deals_id_data[0]);
          // const offers_deals_data=offers_deals_data;
          let offer=offer_deals_data;
          for(const key in offers_deals_id_data[0])
          {
            if(offer[key]!=undefined)
            offer[key]=offers_deals_id_data[0][key];
          }
          // console.log(offers);
          setOffer_deals_data({...offer})
          setOffer_deals_update_data({...offer})
          // setoffers_data({...offers_id_data[0]});

          console.log(offer_deals_data);
        
  

    }
    

  },[id])
  const [status, setStatus] = useState({})
  
  
   
  useEffect(()=>{
    let status={};
    offers?.map((item,index)=> {
      status={...status,[index]:item.status};
     
    }
    )
    console.log(status);
    setStatus({...status});
   },[offers])

   
   const handleStatus=(key,value,id)=>{
     const token= localStorage.getItem("token");
    //  setLoading(true);
     const offer_deals_update={"status":value}
     axios.patch(`${config.BASE_URL}/offers/updateOffer_deals/${id}`,
     {offer_deals_update,token})
     .then((res) => {
       console.log(res);
       toast.success("Status Updated!", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
       });
      //  setLoading(false)
  
     })
     .catch((err) =>{
       toast.error("Something Went Wrong");
       console.log(err);
      //  setLoading(false)

     });
   // navigate("/content")

   
     
     setStatus({...status,[key]:value})

   }
   const handleDelete=(orderid)=>{
    if(orderid>=0)
    {
      console.log(orderid);
      
const requestOptions = {
  headers: {
    method: "DELETE",
    Authorization: localStorage.getItem('token'),
  },
};
      axios.delete(`${config.BASE_URL}/offers/deleteBanner/${orderid}/`,requestOptions)
      .then((res)=>{
        console.log(res);
        toast.success("Offer Deleted! It may take few minutes to reflect the changes");
        // setLoading(false)
        handleClose1();
   
      })
      .catch((err) =>{
        toast.error("Something Went Wrong");
        console.log(err)
      })
     
    }
    
  }
  const [open1, setOpen1] = React.useState(false);
  const [bannerid,setBannerId]=useState(-1);
  const handleOpen1 = (id) =>{setBannerId(id); setOpen1(true)};
  const handleClose1 = () => setOpen1(false);
  return (
    // <>
    // </>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "100px",
        justifyContent: "center",
      }}
    >
      <Sidebar />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p className="text-white">Offers and Deals</p>
        <button
          onClick={() => {
            refresh();
            handleOpen(-1);
          }}
          className="create-new-post-button"
          style={{ marginBottom: "10px" }}
        >
          Create New Offer
        </button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="modal-head" style={{display:"flex",justifyContent:"space-between"}}>
              <p className="modal-title">{id>=0?<>Edit Offer</>:<>Add a Offer</>}</p>
              <button className="close-button" onClick={handleClose}>
                X
              </button>
            </div>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex",flexDirection:"column" }}>
                 
                <p className="Customer-info">Product Id</p>

                  <Select className='product-select1' value={offer_deals_data.product_id} onChange={(e) => handleInput("product_id", e.target.value)}>
                     {products?.map((item,index)=>(
                        <MenuItem key={index}  value={item.id}>{item.name}</MenuItem>
                     ))}
                  </Select>
                    <p
                    style={{ margin: "0px 0px 10px 0px" }}
                    className="Customer-info"
                  >
                    Upload Image
                  </p>
                  {offer_deals_data?.image!=""?<img src={offer_deals_data?.image} style={{width:"3rem",height:"3rem",marginBottom:"10px"}} className='offer_deals_img'/>:<></>}

                  <button className="upload-image-button" onClick={handleupload} style={{marginBottom:"1rem"}}>
                    <input type="file" accept="image/*" hidden id="offer_deals_img"/>
                    Upload image
                  </button>
                  <button className="upload-image-button" style={{marginTop:"1rem"}} onClick={handlesubmit}>Save</button>
                  </Box>
                  
                  </Box>
        </Box>
      </Modal>
    

     <TableContainer component={Paper}>
     <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Are you Sure, You want to Delete?
          </Typography>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button className="create-new-post-button" style={{margin:"10px 20px"}} onClick={()=>handleDelete(bannerid)}>Delete</button>
        <button className="create-new-post-button" style={{margin:"10px 20px"}} onClick={handleClose1}>Cancel</button>
          </div>
        </Box>
        </Modal>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
       
        <TableCell>Image</TableCell>
        
        <TableCell>Assigned Product</TableCell>
        <TableCell>Status</TableCell>
        
      </TableRow>
    </TableHead>
    <TableBody>
      {offers?.map((row,index) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        
          <TableCell><img style={{width:"5rem",height:"5rem"}} src={row.image} /></TableCell>
         
          <TableCell>
            {row.product_id}
          </TableCell>
          <TableCell>
          <select value={status[index]} className='product-select' onChange={(e)=>handleStatus(index,e.target.value,row.id)}>
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>

            </select>
            </TableCell>
          <TableCell><button className='edit-button' onClick={()=>{handleOpen(row.id);}}>Edit</button>
          </TableCell>
          <TableCell>
            <DeleteIcon onClick={()=>handleOpen1(row.id)} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</Box>
  )
}

export default Banners