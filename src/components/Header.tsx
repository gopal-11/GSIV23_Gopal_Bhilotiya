import { FC,useState } from "react";
import { SearchOutlined,HomeOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {actions} from "../store/movies"

const Header: FC = () => {
    const goto=useNavigate();
    const dispatch=useDispatch();
    const [timeoutId, updateTimeoutId] = useState<NodeJS.Timeout>();
    const [searchText, setSearchText] = useState("");

    const onSearchTextChange = (e:any) => {  
     clearTimeout(timeoutId);
     setSearchText(e.target.value);
     const timeout = setTimeout(() => dispatch(actions.searchMovies({query:e.target.value})), 500);
     updateTimeoutId(timeout);   
    };

      const goToHome = () => {
        goto("/");
      };
  
    return (

        <div
        style={{
          color: "black",
          display: "flex",
          justifyContent: "space-between",
          position:"fixed",
          alignItems: "center",
          backgroundColor:"white",
          zIndex:1000,
          top:0,
          height:50,
          width: "100%",
          padding: "10px",
          fontSize: "25px",
          fontWeight: "bold",
          boxShadow: "0 3px 6px 0 #555",
         
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px 10px",
            borderRadius: "6px",
            marginLeft: "20px",
            width: "40%",
            // backgroundColor: "#9B9B9B"
            backgroundColor: "#DFDFDF",
            alignItems: "center"
          }}
        >
          <SearchOutlined color="disabled" />
          <input
            placeholder="Search"
            style={{
              fontSize: "16px",
              //font-weight: bold;
              border: "none",
              outline: "none",
              marginLeft: "15px",

              backgroundColor: "#DFDFDF"
            }}
            value={searchText}
            onChange={(e) => onSearchTextChange(e)}
          />
        </div>
        <div style={{marginRight:"20px"}}>
          <HomeOutlined  onClick={goToHome}/>
        </div>
      </div>
    );
  };
  
  export default Header;