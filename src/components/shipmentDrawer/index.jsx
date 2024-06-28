import { Drawer, Steps } from "antd";
import React from "react";
import { clockIcon, locationIcon } from "../../assets/images";
import "./style.scss";

const ShipmentDrawer = ({ shipmentStatus, closeDrawer, shipmentDetails }) => {
  const item = [
    { 
      title: "USA Warehouse",
      description: (
        <div className="ps_subcontent_main">
          <div className="ps_subcontent_title">
            <span>Product is Scanned for Marked with the Details</span>
          </div>
          <div className="ps_subcontent_sec">
            <div className="ps_wrap">
              <span>{clockIcon}</span>
              <span>9:10 AM, 20 June 2023</span>
            </div>
            <div className="ps_wrap">
              <span>{locationIcon}</span>
              <span>USA Warehouse</span>
            </div>
          </div>
         
        </div>
       
      ),
    },
    {
      title: "Master Distributors",
      description: (
        <div className="ps_subcontent_main">
          <div className="ps_subcontent_title">
            <span>Product count update after shipping</span>
          </div>
          <div className="ps_subcontent_sec">
            <div className="ps_wrap">
              <span>{clockIcon}</span>
              <span>Delivery time </span>
            </div>
            <div className="ps_wrap">
              <span>{locationIcon}</span>
              <span>City Name</span>
            </div>
          </div>
        
        </div>
      ),
    },
    {
      title: "Sub Distributors",
      description: (
        <div className="ps_subcontent_main">
          <div className="ps_subcontent_title">
            <span>Product count update after shipping</span>
          </div>
          <div className="ps_subcontent_sec">
            <div className="ps_wrap">
              <span>{clockIcon}</span>
              <span>Delivery time </span>
            </div>
            <div className="ps_wrap">
              <span>{locationIcon}</span>
              <span>City Name</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Retailer",
      description: (
        <div className="ps_subcontent_main">
          <div className="ps_subcontent_title">
            <span>Product count update after shipping</span>
          </div>
          <div className="ps_subcontent_sec">
            <div className="ps_wrap">
              <span>{clockIcon}</span>
              <span>Delivery time </span>
            </div>
            <div className="ps_wrap">
              <span>{locationIcon}</span>
              <span>City Name</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Customers",
      description: (
        <div className="ps_subcontent_main">
          <div className="ps_subcontent_title">
            <span>Placed to the Customer with final Scan</span>
          </div>
          <div className="ps_subcontent_sec">
            <div className="ps_wrap">
              <span>{clockIcon}</span>
              <span>Delivery time </span>
            </div>
            <div className="ps_wrap">
              <span>{locationIcon}</span>
              <span>City Name</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <Drawer
      className="ship_sidebar_ps"
      title={
        <div className="ship_header">
          <span className="sh_no">#12345</span>
          <span className="sh_title">Weed CF</span>
        </div>
      }
      placement="right"
      size="large"
      onClose={closeDrawer}
      open={shipmentStatus}
    >
      <div>
        <Steps
        className="red"
          direction="vertical"
          current={shipmentDetails?.scanCount}
          items={item}
         
        />
        <div className="ship_footer">
          <div className="ship_footer_wrap">
            <span className="ship_ftitle">Product Name</span>
            <span className="ship_fcontent">
              {shipmentDetails?.productName}
            </span>
          </div>
          <div className="ship_footer_wrap">
            <span className="ship_ftitle">SKU</span>
            <span className="ship_fcontent">{shipmentDetails?.sku}</span>
          </div>
          <div className="ship_footer_wrap">
            <span className="ship_ftitle">Category</span>
            <span className="ship_fcontent">
              {shipmentDetails?.productName}
            </span>
          </div>
          <div className="ship_footer_wrap">
            <span className="ship_ftitle">Weight(kg)</span>
            <span className="ship_fcontent">{shipmentDetails?.weight}</span>
          </div>
          <div className="ship_footer_wrap">
            <span className="ship_ftitle">Order Date</span>
            <span className="ship_fcontent">30-06-2023</span>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ShipmentDrawer;
