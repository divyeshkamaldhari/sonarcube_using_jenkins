import { useState } from "react";
import { filterIcon, plusIcon, searchIcon } from "../../assets/images";
const Marketing = () => { 
//For active table
const [activetable,setActivetable]=useState('My Products')
//for search
const[search,setSearch]=useState("")
const ActiveTable=(activetable)=>{
  switch(activetable){

    case 'My Products':
      return 'dsa'
      case 'Order History':
        return 'fdffdsf'
    }
}
  return (
    <div className="product_table">
    <div className="product_wrap">
      <div className="product_wrap_sec">
        <div className="product_left_wrap">
          <button className={`btn ${activetable==='My Products'?"blue_btn":"border_btn"}`} onClick={()=>setActivetable("My Products")}
            >My Product</button>
          <button className={`btn ${activetable==='Order History'?"blue_btn":"border_btn"}`} onClick={()=>setActivetable("Order History")}
            >Order History</button>
        </div>
        <div className="product_right_wrap">
          <div className="pr_btn">
              {searchIcon}
              <input 
                className="product_input"
                type="text"
                placeholder="Search Product"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
          </div>
          <button className="pr_btn product_filter">
            {filterIcon}Filter
          </button>
        </div>
      </div>
      <div className="product_table_sec">
           {ActiveTable(activetable)}
      </div>
    </div>
  </div>
  );
};
export default Marketing;
