import React from 'react'
import './LandingSection.css'
import landingImage from '../Cropped_Image.png'


function LandingSection() {
    return (
        <>
            <div className="landingContainer">
                <div className="landingSection">
                    <div className="landingContent" style={{ marginTop: '50px' }}>
                        <div data-aos="fade-right">
                            <div className="landingTitle">
                                I'm Corrine Elizabeth Rodrigues
                            </div>
                        </div>
                        <div data-aos="fade-right">
                        <div className="landingParagraph">
                            Being a software professional with 2 years of experience.
                        </div>
                        </div>
                        <div data-aos="fade-right">
                        <div className="landingButton">
                            Portfolio
                        </div>
                        </div>
                    </div>

                    {/* <div > */}
                    <div data-aos="fade-up" className="landingImage" >
                        <img src={landingImage} alt="" />
                    </div>
                    {/* </div> */}

                </div>
            </div>
        </>
    )
}

export default LandingSection