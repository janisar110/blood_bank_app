import React from 'react'
import CMHeader from '../../components/Headers/CMHeader'
import CMLogin from '../../components/LoginForms/CMLogin'
import CMFooter from '../../components/Footers/CMFooter'
import { useSelector } from 'react-redux'
import {donorLogin} from "../../store/Slices/donorAuth/donorLoginSlice"

const DonorLogin = () => {
  const selector = useSelector((state) => state.donorLoginReducer);
  return (
    <> 
    <CMHeader />
    <CMLogin title={"donor"} dispatchFunction={donorLogin} selector={selector}  />
    <CMFooter />
    </>
  )
}

export default DonorLogin