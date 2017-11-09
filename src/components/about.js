import React from 'react';
import Back from './back';

import './about.css';

export default function About(props) {
    return (
        <div id='about'>
            <Back />
            <h1 id='about-head'> About</h1 >
            <p className='my-summary'>After my time in the US Army, I took the technical skills from my service to work for the Dell help desk via a contract through Stream International. After being laid off from that position, I sought higher education and turned to my second love: science. I recieved a Bachelor's of Science in General Biology in 2006. After some time working in that field, I decided that I missed tech and found my way working for first a digital documentation specialist, then as a technical trainer for a software company.</p>
            <p className='my-summary'> Currently, I am seeking to take my hobby of web design to a professional level.  To that end, I have been attending the Thinkful Full Stack Web Development bootcamp and expect to graduate in November or December of this year.</p>
            <h2 className='summary'>Skills Summary</h2>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Over 10 years of experience with HTML and CSS</li>
                <li className='bullet-list-item'>Expected to graduate from the Thinkful Full Stack Developer bootcamp 12/2017</li>
                <li className='bullet-list-item'>Javascript, Node.js, React.js, Express.js, MongoDB, Git, Linux, MacOS, Windows OS, RESTful APIs, Bootstrap, jQuery, AJAX</li>
                <li className='bullet-list-item'>US Army Veteran</li>
            </ul>

            <h2 className='summary'>Work Experience</h2>
            <h3 className='date'>2015 – present</h3>
            <h3 className='job'>Appspace  --  Technical Training Manager</h3>

            <ul className='bullet-list'>
                <li className='bullet-list-item'>Moved to a position that focused on improving the current client training model.</li>
                <li className='bullet-list-item'>Redesigned the training curriculum to be modularly standardized so that specific client training goals could be easily met on a per-client basis.</li>
                <li className='bullet-list-item'>Marked increase in client satisfaction of training curriculum based on customer surveys.</li>
            </ul>

            <h3 className='date'>2014 - 2016</h3>
            <h3 className='job'>NTXB  --  Web Lead</h3>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Volunteer position for a non-profit organization.</li>
                <li className='bullet-list-item'>Lead a team consisting of an assistant web lead, a graphics designer, and a Javascript developer.</li>
                <li className='bullet-list-item'>Complete overhaul of current website to a simpler UI that was more user-friendly.</li>
                <li className='bullet-list-item'>Initially utilized pure HTML5, but then moved to the Concrete5 CMS.</li>
            </ul>

            <h3 className='date'>2013 – 2015</h3>
            <h3 className='job'>Appspace  --  Technical Support and Training Manager</h3>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Trained clients on both end user and administration of Appspace either on premise or remote via Cisco WebEx and Citrix GoToMeeting.</li>
                <li className='bullet-list-item'>Installed Appspace digital signage software in client environment, typically involving Windows Server 2008/2012 on VMware virtual machines.</li>
                <li className='bullet-list-item'>Provided troubleshooting for both software issues and hardware issues.</li>
                <li className='bullet-list-item'>Provided proper internal documentation through Netsuite, Salesforce, and JIRA.</li>
                <li className='bullet-list-item'>Initiated and created training documents, forms, and workflow to streamline the training process.</li>
            </ul>
            <h3 className='date'>2012 – 2013</h3>
            <h3 className='job'>Jones-Blair  --  Documentation Control Specialist</h3>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Created digital documentation control systems from the ground up to mitigate document and information loss occurring within the company. </li>
                <li className='bullet-list-item'>Decreased the time taken to find most needed information from several hours to just a few minutes.</li>
                <li className='bullet-list-item'>Provided technical writing to update the troubleshooting field manual. </li>
                <li className='bullet-list-item'>Created technical drawings using Illustrator and Photoshop for use in manuals and on website.</li>
            </ul>

            <h3 className='date'>2008 – 2012</h3>
            <h3 className='job'>Parker University  --  Academic Lab Manager	</h3>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Assisted professors with teaching of microbiology and anatomy labs, and tutoring students.</li>
                <li className='bullet-list-item'>Responsible for setting up microbiology, chemistry, organic chemistry, physiology, and anatomy labs.  Included mixing and dilution of chemicals, inoculation and cultivation of bacterial specimens, set-up and testing of BIOPAC physiology computer equipment, and setting up anatomy models for classes.</li>
                <li className='bullet-list-item'>Involved in research for a study (A study of the effectiveness of table disinfection protocols in the clinics of a chiropractic college) involving the spread of S. aureus, E. coli, and MRSA in chiropractic offices that was published in <i>Journal of Chiropractic Education</i>.  2010;24(1):109.</li>
                <li className='bullet-list-item'>Responsible for replenishing laboratory stocks while adhering to a restrictive budget.</li>
            </ul>

            <h3 className='date'>2006 - 2008 </h3>
            <h3 className='job'>North Lake College  --  Lab Professor</h3>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Taught General Biology I (BIOL 1406) and General Biology II (BIOL 1408) labs.  Classes ranged in size from 4 to 20 students.</li>
                <li className='bullet-list-item'>Responsible for test and quiz design for classes, syllabus preparation, grade assessments, lab preparation, and lab supervision.</li>
                <li className='bullet-list-item'>Worked closely with lecture professors to ensure solidarity between the lecture series and the lab series.</li>
            </ul>

            <h3 className='date'>2002-2007</h3>
            <h3 className='job'>North Lake College  --  Academic Tutor</h3>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Tutored Biology, Chemistry, Physics, Organic Chemistry, and Microbiology.</li>
                <li className='bullet-list-item'>Assumed Assistant Managerial role during summer sessions.  Managed a group of 2-5 tutors.</li>
                <li className='bullet-list-item'>Continually pushed for improvement of the Science Learning Center: expanded hours to include Saturdays to accommodate more students; proposed, designed and implemented a quality assurance survey; designed marketing materials to help drive students to seek academic assistance at the Science Learning Center.</li>
            </ul>

            <h3 className='date'>1999-2001</h3>
            <h3 className='job'>U.S. Army  --  14 E - PATRIOT Fire Control Enhanced Operator/Maintainer</h3>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Supported electronic systems on the PATRIOT Missile systems. </li>
                <li className='bullet-list-item'>Included programming of PATRIOT system to define Theater of Operations (proprietary system); reading electronic schematics, generating error codes in hexadecimal and converting them to binary to determine which component needed repair or replacing.</li>
                <li className='bullet-list-item'>Received Honorable Discharge.</li>
            </ul>

            <h2 className='summary'>Education</h2>

            <h3 className='date'>2017-2017</h3>
            <h3 className='job'>Thinkful Bootcamp  --  Full Stack Web Development</h3>
            <p className='edu-descr'>Coursework included:</p>
            <p className='edu-descr'>HTML5, CSS3, JavaScript, JQuery, React, MongoDB, Git, Web API</p>

            <h3 className='date'>2004-2006</h3>
            <h3 className='job'>University of Texas-Arlington  --  B.S. Biological Sciences</h3>
            <p className='edu-descr'>Coursework included:</p>
            <p className='edu-descr'>Biology, Genetics, Statistics, Trigonometry, Pre-Calculus, Calculus</p>

            <h3 className='date'>2002-2007</h3>
            <h3 className='job'>North Lake College</h3>
            <p className='edu-descr'>Coursework leading up to degree and various personal enrichment courses including:</p>
            <p className='edu-descr'>UNIX, JavaScript, A+ certification prep classes</p>
            <ul className='bullet-list'>
                <li className='bullet-list-item'>Phi Theta Kappa Honor Society</li>
                <li className='bullet-list-item'>Served as North Lake chapter’s Public Relations Officer, 2002-2003</li>
                <li className='bullet-list-item'>National Dean’s List - 2002</li>
            </ul>
        </div >
    );
}