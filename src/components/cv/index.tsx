import React, { Component } from "react";
import styled from "styled-components";
import LongAvatar from "./img/Long.png";
import Tenpoint7Logo from "./img/Tenpoint7.png";
import SmartOSCLogo from "./img/SmartOSC.jpeg";
import PycoGroupLogo from "./img/PycoGroup.png";
import { AimOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Skill from "./Skill";
import WorkExperience, { WorkExperienceEmpty } from "./WorkExperience";
import ProjectExperience from "./ProjectExperience";
import Education from "./Education";
type TProps = {};

type TState = {};

export default class CVPage1 extends Component<TProps, TState> {
  render() {
    return (
      <>
        <PageA4>
          <LeftSide>
            <BasicInfo>
              <Avatar src={LongAvatar} />
              <Name>Long Huynh Bao</Name>
              <Title>Fullstack Developer</Title>
            </BasicInfo>
            <ContactInfo>
              <ContactItem>
                <AimOutlined />
                Ho Chi Minh, Viet Nam
              </ContactItem>
              <ContactItem>
                <PhoneOutlined />
                (+84) 778070600
              </ContactItem>
              <ContactItem>
                <MailOutlined />
                longhb@zoho.com
              </ContactItem>
            </ContactInfo>
            <SkillInfo>
              <LeftTitle>Skills</LeftTitle>
              <Skill name="Java" strength={8}></Skill>
              <Skill name="Python" strength={7}></Skill>
              <Skill name="Nodejs" strength={7}></Skill>
              <Skill name="Javascript" strength={8}></Skill>
              <Skill name="Typescript" strength={8}></Skill>
              <Skill name="ES6" strength={8}></Skill>
              <Skill name="React" strength={8}></Skill>
              <Skill name="Angular" strength={7}></Skill>
              <Skill name="JQuery" strength={8}></Skill>
              <Skill name="Boostrap" strength={8}></Skill>
              <Skill name="MySQL" strength={8}></Skill>
              <Skill name="Oracle" strength={7}></Skill>
              <Skill name="UI, UX Design" strength={8}></Skill>
              <Skill name="GIT" strength={7}></Skill>
              <Skill name="AWS" strength={6}></Skill>
            </SkillInfo>
            <SkillInfo>
              <LeftTitle>English Skills</LeftTitle>
              <Skill name="Communication" strength={6}></Skill>
              <Skill name="Reading" strength={7}></Skill>
              <Skill name="Writing" strength={7}></Skill>
            </SkillInfo>
          </LeftSide>
          <RightSide>
            <RightTitle>Summary</RightTitle>
            <p>
              Senior Web Developer, working well on both Back-end side and
              Front-end side. Well-versed in numerous programing language
              including Java, Python, Nodejs, Javascript, CSS, MySQL, MongDB,
              React, Anguar. Strong background code management, testing driven
              development and security.
            </p>
            <RightTitle>Work experience</RightTitle>
            <WorkExperience
              startDate="July 2019"
              endDate="Mar 2020"
              company="Tenpoint7"
              position="Fullstack Developer"
              logo={<img src={Tenpoint7Logo}></img>}
            >
              <ProjectExperience
                projectName="Addy (https://addy.ai/)"
                techandtools="Python (Pandas, gensim, boto, JWT), AWS, React, Nextjs, Ant Design, Recharts, D3"
              >
                <p>
                  Addy automatically organizes the collected information into
                  top topics by using AI. Quickly understand the top trends on
                  any subject. Use the various filters to dig deeper into the
                  top themes, words, entities, sentiment, and emotions. Addy can
                  read and organize hundreds or thousands of documents in the
                  time it would take you to read just one.
                </p>
                <ul>
                  <li>
                    Implement products and consulting projects related to Text
                    Analytics
                  </li>
                  <li>
                    Pipeline framework on top of AWS Step Func to allow run
                    application on lambda func, container or EC2 depend on data
                    load.
                  </li>
                  <li>API (API Gateway, Lambda)</li>
                  <li>Visualize data (Recharts, D3, ReactJS)</li>
                  <li>Custom and build UI library base on Ant Design UI</li>
                </ul>
              </ProjectExperience>
            </WorkExperience>
            <WorkExperience
              position="Senior Java"
              startDate="Jan 2016"
              endDate="Jun 2019"
              company="SmartOSC"
              logo={<img src={SmartOSCLogo} />}
            >
              <ProjectExperience
                projectName="Singapore Economic Development Board (EDB).(https://www.edb.gov.sg/)"
                techandtools="AEM (AEM form, touchUI), OSGi, Jquery, Google Analytic, Adobe Analytic, JWT, Google 2-Step Verification, Bootstrap"
              >
                <p>
                  EDB is a government agency under the Ministry of Trade and
                  Industry, is responsible for strategies that enhance
                  Singapore’s position as a global centre for business,
                  innovation, and talent.
                </p>
                <ul>
                  <li>
                    Using Adobe Experience Manager (a Java CMS) to improve
                    online branding. Allow non technical guys can create,
                    update, delete content. Make sure all content can review by
                    approval process.
                  </li>
                  <li>
                    Apply Replicate multi servers. Between Stating Server to
                    Production Servers, between Production Server with others
                    Production Servers. With high performance and no downtime.
                  </li>
                  <li>Apply Google Analytics base on AEM Platform </li>
                  <li>Apply React and React Native for EDB UI</li>
                  <li>Build components on both AdminUI and end-client UI</li>
                  <li>
                    Writing Unitest, Intergration Test and Automation Test
                  </li>
                </ul>
              </ProjectExperience>
              <ProjectExperience
                projectName="Pham Nguyen Food"
                techandtools="Apache Camel, RabitMQ, SpringBoot, Gmail API, JHipster, React, Nodejs, Expressjs, MySQL, Bootstrap, Regular expressions"
              >
                <p>
                  Pham Nguyen is a confectionery manufacturing company. Pham
                  Nguyen got orders via email. The issue is Pham Nguyen got many
                  emails per day. And too hard for manage orders without any
                  mistake
                </p>
                <ul>
                  <li>
                    Build a intergration System base on Apache Camel and
                    RabbitMQ
                  </li>
                  <li>
                    Build microservices to read email(include email content,
                    attachment file like PDF, DOC, DOCX), create orders in a
                    Magento System (PHP), follow orders status, manager shiper,
                    manager customer. Notify manager when application can not
                    create orders.
                  </li>
                </ul>
              </ProjectExperience>
            </WorkExperience>
          </RightSide>
        </PageA4>
        <PageA4>
          <LeftSide>
            <SkillInfo>
              <LeftTitle>Personal Skills</LeftTitle>
              <Skill name="Creative" strength={8}></Skill>
              <Skill name="Willingness to learn" strength={8}></Skill>
              <Skill name="Teamwork" strength={7}></Skill>
              <Skill name="Organization" strength={7}></Skill>
              <Skill name="Leadership" strength={6}></Skill>
              <Skill name="Handle pressure" strength={7}></Skill>
              <Skill name="Flexibility" strength={8}></Skill>
            </SkillInfo>
          </LeftSide>
          <RightSide>
            <WorkExperienceEmpty>
              <ProjectExperience
                projectName="Magento Ecommerce Chat Bot"
                techandtools="Wit.AI API, weka library, Facebook Chat platform, JHipster, Magento, MongoDB"
              >
                <p>
                  Create a chat Bot allow client can do everything in Magento
                  Ecommerce instead goto website
                </p>
                <ul>
                  <li>
                    Create restful allow Bot can connect to Magento and build
                    Model by Product List, Product Categroy
                  </li>
                  <li>
                    When client try buy a out of stock product. Suggest to
                    Client when the product restock.
                  </li>
                  <li>
                    When client try buy a out of stock product. Suggest client a
                    Similar Product.
                  </li>
                </ul>
              </ProjectExperience>
            </WorkExperienceEmpty>
            <WorkExperience
              startDate="Jan 2013"
              endDate="Dec 2015"
              company="PycoGroup"
              position="Senior Java"
              logo={<img src={PycoGroupLogo} />}
            >
              <ProjectExperience
                projectName="Godzilist V2"
                techandtools="Nodejs, Expressjs, Angular, MongoDB"
              >
                <p>
                  Godzilist is a one-stop destination that gathers many
                  curiosities in the form of top five rankings. The original
                  content of more than 8.000 lists keeps growing everyday with
                  the help of our experts and personalities, but most of all, by
                  our active users. Everyday news related tops are created and
                  aim at entertain and inform a growing community of users.
                </p>
                <ul>
                  <li>
                    Re-design most of current pages with new more content
                    blocked added: Homepage, Category page, Guest category page,
                    Search page, Index pages.
                  </li>
                  <li>
                    Re-factoring the current source-code: The current
                    source-code had been developed by a partner that not be in
                    well architecture and organization. It won't fit a long-term
                    project with new stuff to be added in the future
                  </li>
                  <li>
                    Support responsive design: The current version (V1) didn't
                    support responsive design. We're in charged to enhance this
                    feature.
                  </li>
                  <li>
                    Improve the current inline translation to the new technique
                    approaching for better user friendly.
                  </li>
                  <li>
                    SEO improvement: by auto generate and add meta data ( Meta
                    tag, Meta title and Meta description) of all pages.
                  </li>
                  <li>
                    Some more advanced features such as: auto get remote image
                    (from Bing service), generate thumbnail and save both 2
                    images locally.
                  </li>
                  <li>
                    Email sending in some cases (registration, forgot password,
                    ..) are just considering to keep plant text as current. Just
                    support compatibility to gmail (best march) only.
                  </li>
                  <li>
                    Browser compatibility testing: Window: Chrome (latest) -
                    Best Match, Mac: Safari (latest) - Best Match
                  </li>
                  <li>
                    Mobile compatibility testing: Apple iOS 8.X: iPhone 5 (5,
                    5S) - Safari (latest) - Best Match. For Android: at least
                    4.0 (optional)
                  </li>
                </ul>
              </ProjectExperience>
              <ProjectExperience
                projectName="PYCO GOVEMENT AEM RDS"
                techandtools="AEM, Bootlstrap, Google Analytics, sling, OSGi"
              >
                <p>
                  With PYCO GOVEMENT AEM RDS you can expect: Fully responsive
                  interface with customer exposure, Capability to enjoy the
                  benefits of all the powerful features of the full, AEM
                  platform and Suite, Ease of upgrade to future AEM releases
                </p>
                <ul>
                  <li>
                    Apply bootstrap to allow AEM component can be responsive by
                    multi screen size
                  </li>
                  <li>
                    Create common components (menu, Navigation, Banner, Breacum,
                    Event Page, ...). Make sure there components meet the
                    criteria: easy to extend, easy to custom, easy to apply any
                    theme.
                  </li>
                </ul>
              </ProjectExperience>
            </WorkExperience>
          </RightSide>
        </PageA4>
        <PageA4>
          <LeftSide></LeftSide>
          <RightSide>
            <WorkExperienceEmpty>
              <ProjectExperience
                projectName="Pyco RDS"
                techandtools="Hybris, Bootstrap, Jquery"
              >
                <p>
                  PYCOGroup strategy for hybris is to try to bring in new kinds
                  of customer (SMB) by lowering the entry price of a hybris
                  Project By putting together a unique hybris Rapid Deployment
                  Solution (RDS), PYCOGroup intend to address those 2
                  challenges. Everything is reusable and easily extendable
                  through isolated new Add-On components that are:
                </p>
                <ul>
                  <li>
                    Ready to use, Easy to configure with CMS, Easy to enhance
                  </li>
                  <li>
                    Follow strictly hybris Best Practices build to ensure future
                    compatibility
                  </li>
                  <li>
                    Work closely with hybris to receive hybris Certified status
                    for the PYCO Accelerator.
                  </li>
                  <li>
                    Ensure optimal performance of the site based on leading
                    performance tools and standards
                  </li>
                  <li>Import data & optimize data performance</li>
                </ul>
              </ProjectExperience>
              <ProjectExperience
                projectName="Microsoft China Store (https://www.microsoftstore.com.cn/)"
                techandtools="Hybris, Google analytics, Bootstrap"
              >
                <p>
                  Microsoft Corporation - Greater China Region GCR is a division
                  of Microsoft with focus on the Mainland China customer base.
                  GCR presented a goal to change the mentality of a consumer
                  friendly company through the following:
                </p>
                <ul>
                  <li>
                    Improve customer experience on MS China’s Official eCommerce
                    Site
                  </li>
                  <li>
                    Enhance Marketing campaigns, on both eCommerce site and
                    Electronic Direct Mailings (EDMs)
                  </li>
                  <li>
                    Increase touch points with Microsoft Support through the
                    eCommerce site
                  </li>
                  <li>
                    Extend the capabilities of eCommerce site to integrate CRM
                    functionality
                  </li>
                </ul>
              </ProjectExperience>
            </WorkExperienceEmpty>
            <RightTitle>Education</RightTitle>
            <Education
              scholl="University of Science HoChiMinh City"
              fieldOfStudy="Information Technology"
              startDate="2007"
              endDate="2011"
            ></Education>
            <RightTitle>Certification</RightTitle>
            <Education
              scholl="Hybris Commerce V5 Certification"
              fieldOfStudy="Hybris software"
              startDate="Jun 2005"
              endDate="No Expire"
            ></Education>
            <Education
              scholl="Hybris Core Platform V5 Certification"
              fieldOfStudy="Hybris software"
              startDate="Jun 2005"
              endDate="No Expire"
            ></Education>
          </RightSide>
        </PageA4>
      </>
    );
  }
}
const leftSideWidth = 300;
const PageA4 = styled.div`
  display: flex;
  font-family: Roboto;
  width: 297mm;
  height: 420mm;
`;
const Avatar = styled.img`
  width: 250px;
  margin: 20px auto -40px auto;
  display: block;
`;
const LeftSide = styled.div`
  flex: 1;
  height: 100%;
  background: #425370;
  color: white;
  > :first-child {
    padding-top: 40px;
  }
`;
const BasicInfo = styled.div`
  text-align: center;
`;
const ContactInfo = styled.div`
  margin: 20px 30px 0 30px;
  text-align: left;
`;
const ContactItem = styled.div`
  margin-top: 10px;
  .anticon {
    font-size: 15px;
    margin-right: 5px;
  }
`;

const SkillInfo = styled.div`
  padding: 20px 30px 0 30px;
`;

const LeftTitle = styled.div`
  border-bottom: solid white 1px;
  padding-top: 20px;
  font-family: Roboto Condensed;
  font-size: 22px;
  font-weight: bold;
  width: 100%;
`;

const RightSide = styled.div`
  flex: 2;
  padding: 40px;
  > p {
  }
`;

const RightTitle = styled.div`
  display: block;
  width: 100%;
  font-family: Roboto Condensed;
  font-size: 22px;
  font-weight: bold;
  color: #555;
  border-bottom: solid #555 1px;
`;

const Name = styled.div`
  font-family: Roboto Condensed;
  font-size: 33px;
  font-weight: lighter;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: lighter;
`;
