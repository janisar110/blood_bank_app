import React from 'react'
import CMHeader from '../../components/Headers/CMHeader'
import CMRegistration from '../../components/RegistrationForms/CMRegistration'
import CMFooter from '../../components/Footers/CMFooter'
import { useSelector } from 'react-redux'
import { patientRegistration } from '../../store/Slices/patientAuth/patientRegistrationSlice'

const PatientRegistration = () => {
  const selector = useSelector((state) => state.patientRegistrationReducer);
  return (
    <>
    <CMHeader />
    <CMRegistration title={"patient"} dispatchFunction={patientRegistration} selector={selector}/>
    <CMFooter />
    </>
  )
}

export default PatientRegistration