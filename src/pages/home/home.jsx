import React from 'react'
import Main from  "./main"
import SectionOne from  "./sectionOne"
import SectionTwo from "./sectionTwo"
import SectionThree from "./sectionThree"
import SectionFour from "./sectionFour"
import Faq from "../../components/faq"
import Shq from "./shq"
import LastContainer from "./last-container"
import { faqContent } from '../../constant/faq-content'


export default function Home() {

  
    
  return (
    <>
     <Main />
     <SectionOne />
     <SectionTwo />
     <SectionThree />
     <SectionFour />
     <Faq faq={faqContent} />
     <Shq />
     <LastContainer />
    </>
  )
}
