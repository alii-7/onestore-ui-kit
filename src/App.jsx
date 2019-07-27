import React, { Children } from "react";
import "./App.css";
import Button from '@material-ui/core/Button';
import CustomButton from "./components/CustomButton";
import { ReactComponent as Cart } from "./generic/images/cart.svg";
import CustomFormField from "./components/CustomFormField";
import CustomSearchField from "./components/CustomSearchField";
import CustomDropDownField from "./components/CustomDropDownField";
import MenuItem from "@material-ui/core/MenuItem";
import CustomTextArea from "./components/CustomTextArea/TextArea";
import CustomNotificationMenu from "./components/CustomMenus/CustomNotificationMenu";

const arr = ["one", "two"];
const arr2 = ["only item"];

const allNotifications = [{ primaryText: 'To Scott, Alex, Jennifer to Scott, Alex, Jennifer to Scott, Alex,Jennifer to Scott, Alex, Jennifer' , secondaryText: '09 jab 2017'},{ primaryText: 'To Scott, Alex, Jennifer to Scott, Alex, Jennifer to Scott, Alex,Jennifer to Scott, Alex, Jennifer' , secondaryText: '09 jab 2017'}]

function App() {
  return (
    <div className="App">
      {/*  <CustomButton icon={<Cart />} pos='left' title='Primary' color='primary' variant='contained' />
      <CustomButton icon={<Cart />} pos='left' title='Secondary' color='secondary' variant='contained' />
      <CustomButton icon={<Cart />} pos='left' title='Tertiary' color='tertiary' variant='contained' />
      <CustomButton icon={<Cart />} disabled pos='left' title='Primary Custom' color='primary' variant='contained' />
      <CustomButton icon={<Cart />} disabled pos='left' title='Primary Custom' color='secondary' variant='contained' />
      <CustomButton icon={<Cart />} disabled pos='left' title='Primary Custom' color='tertiary' variant='contained' />

      <br />
      <CustomButton pos='left' title='Ghost Button' color='ghostPrimary' variant='text' />
      <CustomButton pos='left' title='Ghost Button' color='ghostPrimary' variant='text' disabled/>
      <CustomButton pos='left' title='Ghost Button' color='ghostSecondary' variant='text' />
      <CustomButton pos='left' title='Ghost Button' color='ghostSecondary' variant='text' disabled/> 
      */}

      <br />
      <br />
      <br />

      {/* 
        <CustomFormField placeholder='Placeholder' label="Label" />
        <CustomFormField placeholder='Placeholder' disabled label="Label"/>
        <CustomFormField placeholder='Placeholder' errortext="Wrong Format" type='email' error label="Label"/>
      */}

      {/* <CustomSearchField placeholder='placeholder' name="searchh" disabled={false} />
      <CustomSearchField placeholder='placeholder' disabled /> 
      */}

      {/* <CustomDropDownField value={arr[0]} label="Label" >
        {arr.map((item, index) => { return (<MenuItem key={index}>{item}</MenuItem>) })}
      </CustomDropDownField>

      <CustomDropDownField disabled value={arr[0]} label="Label">
        {arr.map((item, index) => { return (<MenuItem key={index}>{item}</MenuItem>) })}
      </CustomDropDownField>

      <CustomDropDownField value={arr2[0]} label="Label">
        {arr2.map((item, index) => { return (<MenuItem key={index}>{item}</MenuItem>) })}
    </CustomDropDownField> */}

      {/*
        <CustomTextArea placeholder="Placeholder" />
        <CustomTextArea disabled placeholder="Placeholder" />
       */}

      
       
      <CustomNotificationMenu allnotifications={allNotifications}/>
    </div>
  );
}

export default App;
