import React from 'react'
import CMRegistration from '../../components/RegistrationForms/CMRegistration'
import CMHeader from '../../components/Headers/CMHeader'
import CMFooter from '../../components/Footers/CMFooter'
import { donorRegistration } from '../../store/Slices/donorAuth/donorRegistrationSlice'
import { useSelector } from 'react-redux'

const DonorRegistration = () => {
  const selector = useSelector((state) => state.donorRegistrationReducer);
  return (
    <>
    <CMHeader />
    <CMRegistration title={"donor"} dispatchFunction={donorRegistration} selector={selector} />
    <CMFooter />
    </>
  )
}

export default DonorRegistration