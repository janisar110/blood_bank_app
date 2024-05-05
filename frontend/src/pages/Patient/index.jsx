import React from 'react'
import CMHeader from '../../components/Headers/CMHeader'
import CMLogin from '../../components/LoginForms/CMLogin'
import CMFooter from '../../components/Footers/CMFooter'
import { useSelector } from 'react-redux'
import { patientLogin } from '../../store/Slices/patientAuth/patientLoginSlice'

const PatientLogin = () => {
  const selector = useSelector((state) => state.patientLoginReducer);
  return (
    <>
     <CMHeader />
      <CMLogin title={"patient"} dispatchFunction={patientLogin} selector={selector} />
      <CMFooter />
    </>
  )
}

export default PatientLogin