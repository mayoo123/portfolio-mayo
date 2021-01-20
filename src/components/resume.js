import React from 'react';
import '../App.css'

function Resume() {
    return ( <div>
    <div className="resume-main-div">
        <div className="resume-page">
            <h3>Mayooran Kugathas</h3>
            <h4>Experienced Software Developer and Engineer</h4>
            <p style={{textAlign:'center', color:'#3399ff'}}>M: 0426 559 667 | E: kmayooran@gmail.com | Melbourne, Australia.</p>
            <p className="resume-heading">Overview</p>
            <p className="resume-body">I am an experienced Software Developer and Software Engineer, with experience working in both the UK and Australia. This experience has allowed me to develop a strong industry understanding and the skills to communicate with a wide variety of people. 
            I am experienced in the use of multiple complex computer systems and believe that my experience in both design and development, will make me a valuable asset in your high performing team.</p>
            <hr />
            <p className="resume-heading">Key Skills & Experience 	</p>
            <div className = "bulletPoints" >
            <ul>
                <li>
                    Demonstrated ability to learn and competently utilise a variety of different software solutions
                </li>
                <li>
                    Proven database development, design and maintenance
                </li>
                <li>
                    Extensive experience in effectively utilising various types of architectures
                </li>
                <li>
                    Demonstrated ability to manage multiple tasks with competing priorities, while meeting deadlines and budgets
                </li>
                <li>
                    Ability to effectively coordinate and liaise with both internal and external stakeholders
                </li>
                <li>
                    Experienced in both front-end and back-end web applications developments
                </li>
                <li>
                    Extensive experience in utilising the Agile Methodology
                </li>
            </ul>
            </div>
            <hr />
            <p className="resume-heading">Technologies</p>
            <p className="resume-body">
            C#, .Net framework, C#, ASP.Net Web forms, MVC, jQuery, JavaScript, SQL Server, CSS/CSS3, HTML/HTML5, LINQ, XML, Jira, SVN, Telerik, visual studio 2017 & 2019 and GIT.
            </p>
            <hr />
            <p className="resume-heading">Education</p>
            <p className="resume-body">
            Master of Computer Science – University of HertFordShire
            <br />
            Bachelor of Information Technology – University of Moratuwa
            </p>
        </div>
        {/* work history */}
        <div className="resume-page work">
            <p className="resume-heading">Career History</p>
            <p className="resume-body resume-history-heading">
            November 2017 - Current | InteractSport
            </p>
            <p className="resume-body">
            InteractSport is Australia's leading provider of digital and web-based sports administration and management solutions.
            </p>
            <p className = "resume-history-heading">
            Software Developer
            </p>
            <div className = "bulletPoints" >
            <ul>
                <li>
                 Responsible for working with a variety of sports management solutions, ensuring that they are accessible and user friendly
                </li>
                <li>
                Manage the design, development and maintenance of backend and front-end web applications
                </li>
                <li>
                Liaise and coordinate with various internal and external stakeholders, as well as various third parties
                </li>
                <li>
                Utilise strong development skills to upgrade InteractSports registration system and over one thousand template-based websites for sporting organisations
                </li>
                <li>
                Identify, analyse, test and review a wide variety of systems as required
                </li>
                <li>
                Manage tasks with competing priorities, ensuring that tasks are completed within agreed upon time frames and SLA’s
                </li>
                <li>
                Utilise Agile Methodology, ensuring that key stakeholders have opportunities to collaborate and be part of the decision-making process
                </li>
                <li>
                Work with complex business domains and existing applications
                </li>
                <li>
                Provide ongoing mentorship and guidance to team members with varying levels of experience
                </li>
            </ul>
            </div>
            <hr /> 
            {/* history second */}
            <p className="resume-body resume-history-heading">
            February 2009 - November 2017 | GoQuo
            </p>
            <p className="resume-body">
            Established in 2002, GoQuo provides a full-service e-Commerce solution to leading airlines and online travel agencies in creating a personalised, 
            digital shopping experience. While working with GoQuo, 
            I fulfilled roles in both London and Australia.
            </p>
            <p className = "resume-history-heading">
            Software Engineer
            </p>
            <div className = "bulletPoints" >
            <ul>
                <li>
                Responsible for managing various Travel Technology Solutions, ensuring that they are effectively develop and designed to specifications
                </li>
                <li>
                Manage the development and maintenance on both B2B and B2C holiday packaging system and internet booking engine, allowing for an improved user experience
                </li>
                <li>
                Effectively gain an in depth understanding of supplier’s web services, in order to programmatically interact with data
                </li>
                <li>
                Maintain systems, as well as identify and complete repairs, bug fixes and defects
                </li>
                <li>
                Analyse stack traces, code, log files and other artefacts as needed
                </li>
                <li>
                Managed the integration of popular third-party flight APIs such as Sabre, Amadeus, SITA, Navaitaire, TravellFusion, FlyDubai and VietJet.
                </li>
            </ul>
            </div>
            <hr />
            <p className="resume-heading">References</p>
            <p className="resume-body resume-history-heading">
            Available upon request
            </p>
        </div>

    </div>
</div> );

}

export default Resume