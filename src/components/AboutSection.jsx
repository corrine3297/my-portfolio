import React from 'react'
import './AboutSection.css';
import AboutPic from '../IMG1.png'

function AboutSection() {
    return (
        <div className='aboutSection'>
            <div className='aboutTitle align-items-center justify-content-center d-flex mb-5'>
                About me
            </div>
            <div className='row w-100' style={{
                marginRight: '0px', marginLeft: '0px',alignItems:'center',justifyContent:'center'

            }}>
                <div className='col-lg-4 mt-5 ' data-aos="fade-right">
                    <p> Being a software professional with 2 years of experience. I am equipped with development of web-based applications using Microsoft Technologies.

                        <br />
                        <br />
                        Proficient in Angular, front-end JavaScript framework and back-end technology like .NET Core Web API, C#, MS SQL Server.</p>
                </div>
                <div className='col-lg-4 about-pic' data-aos="fade-right">
                    <img src={AboutPic} alt="" />
                </div>
                <div className='col-lg-4 mt-5' style={{marginLeft:'0px'}} data-aos="fade-right">
                    <p>
                        Championed data preparation initiatives for Retail Banking and Credit Unions, specializing in Altair Monarch Altair Monarch Server and Altair Monarch Data Prep Studio.
                        <br />
                        <br />
                        Elevated efficiency across key areas—Mortgage Loan Operations, Deposit Operations, Banking Optimization & Conversions, Accounting.

                    </p>
                </div>
            </div>
        </div >
    )
}

export default AboutSection