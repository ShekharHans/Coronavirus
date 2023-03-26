import { Button, TextField } from "@mui/material";
import styles from "./CovidDesktop.module.css";

const CovidDesktop = () => {
  return (
    <div className={styles.covidDesktop}>
      <section className={styles.section3} id="section-3">
        <img className={styles.feverIcon} alt="" src="/fever@2x.png" />
        <img className={styles.faceMaskIcon} alt="" src="/face-mask@2x.png" />
        <img className={styles.shieldIcon} alt="" src="/shield@2x.png" />
        <img
          className={styles.hospitalBedIcon}
          alt=""
          src="/hospital-bed@2x.png"
        />
        <div className={styles.symptoms}>Symptoms</div>
        <div className={styles.protection}>Protection</div>
        <div className={styles.security}>Security</div>
        <div className={styles.treatment}>Treatment</div>
        <div className={styles.section31}>
          <div className={styles.section3Left}>
            <div className={styles.downRightSection}>
              <Button
                className={styles.section2Button}
                sx={{ width: 266 }}
                variant="contained"
                color="primary"
              >
                Learn More
              </Button>
              <div className={styles.leftSectionText}>
                <p className={styles.avoidTouchingYour}>
                  Avoid touching your eyes, nose and mouth
                </p>
                <p className={styles.avoidTouchingYour}>
                  Wash your hands frequently
                </p>
                <p className={styles.avoidTouchingYour}>Cover your cough</p>
                <p className={styles.avoidTouchingYour}>
                  Stay at home if you feel unwell
                </p>
                <p className={styles.avoidTouchingYour}>
                  Avoid crowded places and close contact with anyone that has
                  fever or cough
                </p>
                <p className={styles.avoidTouchingYour}>
                  If you have a fever, cough and difficulty breathing, seek
                  medical care early — but call first
                </p>
                <p className={styles.getInformationFrom}>
                  Get information from trusted sources
                </p>
              </div>
              <b className={styles.leftSectionHeader}>
                How To Prevent CoronaVirus ?
              </b>
            </div>
          </div>
          <div className={styles.section3Right}>
            <div className={styles.section3Box}>
              <div className={styles.boxUp}>
                <img className={styles.houseIcon} alt="" src="/house@2x.png" />
              </div>
              <div className={styles.boxText}>
                consectetur adipisicing elit. Maiores non veniam iure nam!
                Quisquam, eaque provident
              </div>
              <b className={styles.boxHeader}>Stay At Home</b>
            </div>
            <div className={styles.section3Box1}>
              <div className={styles.boxUp}>
                <img
                  className={styles.healthCheckIcon}
                  alt=""
                  src="/health-check@2x.png"
                />
              </div>
              <div className={styles.boxText1}>
                consectetur adipisicing elit. Maiores non veniam iure nam!
                Quisquam, eaque provident
              </div>
              <b className={styles.boxHeader1}>Body Checkup</b>
            </div>
            <div className={styles.section3Box2}>
              <div className={styles.boxUp}>
                <img
                  className={styles.healthCheckIcon}
                  alt=""
                  src="/social-distancing@2x.png"
                />
              </div>
              <b className={styles.boxHeader2}>Maintain Distance</b>
              <div className={styles.boxText2}>
                consectetur adipisicing elit. Maiores non veniam iure nam!
                Quisquam, eaque provident
              </div>
            </div>
            <div className={styles.section3Box3}>
              <div className={styles.boxUp}>
                <img className={styles.maskIcon} alt="" src="/mask@2x.png" />
              </div>
              <b className={styles.boxHeader3}>Wear Mask</b>
              <div className={styles.boxText3}>
                consectetur adipisicing elit. Maiores non veniam iure nam!
                Quisquam, eaque provident
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2} id="section-2">
        <div className={styles.downLeftSection}>
          <img
            className={styles.rightSectionImgIcon}
            alt=""
            src="/rightsectionimg@2x.png"
          />
        </div>
        <div className={styles.downRightSection1}>
          <Button
            className={styles.section2Button}
            sx={{ width: 266 }}
            variant="contained"
            color="primary"
          >
            Learn More
          </Button>
          <div className={styles.leftSectionText}>
            <p className={styles.getInformationFrom}>
              As the novel coronavirus continues to spread throughout the world,
              keeping people and businesses in our communities and across the
              United States shuttered, the virus is clearly something to be
              feared.
            </p>
            <p className={styles.getInformationFrom}>&nbsp;</p>
            <p className={styles.getInformationFrom}>
              But of the many viruses known to infect humans, what makes this
              one, which has caused the worst pandemic in a century, so
              dangerous?
            </p>
            <p className={styles.getInformationFrom}>&nbsp;</p>
            <p className={styles.getInformationFrom}>
              The virus that causes COVID-19 is not the most deadly. Ebola kills
              upwards of 50% of people it infects. The coronaviruses that cause
              Severe Acute Respiratory Syndrome (SARS) and Middle East
              Respiratory Syndrome (MERS) result in death in about 10% of
              infections and between 30% to 40% of cases, respectively.
            </p>
          </div>
          <b className={styles.leftSectionHeader1}>Why Is It dangerous?</b>
        </div>
        <div className={styles.upLeftSection}>
          <Button
            className={styles.section2Button2}
            sx={{ width: 266 }}
            variant="contained"
            color="primary"
          >
            Learn More
          </Button>
          <div className={styles.leftSectionText2}>
            <p className={styles.getInformationFrom}>
              Coronaviruses are a type of virus. There are many different kinds,
              and some cause disease. A coronavirus identified in 2019,
              SARS-CoV-2, has caused a pandemic of respiratory illness, called
              COVID-19.
            </p>
            <p className={styles.getInformationFrom}>&nbsp;</p>
            <ul className={styles.covid19IsTheDiseaseCaused}>
              <li className={styles.covid19IsThe}>
                COVID-19 is the disease caused by SARS-CoV-2, the coronavirus
                that emerged in December 2019.
              </li>
            </ul>
            <p className={styles.getInformationFrom}>&nbsp;</p>
            <ul className={styles.covid19IsTheDiseaseCaused}>
              <li className={styles.covid19IsThe}>
                COVID-19 can be severe, and has caused millions of deaths around
                the world as well as lasting health problems in some who have
                survived the illness.
              </li>
            </ul>
            <p className={styles.getInformationFrom}>&nbsp;</p>
            <ul className={styles.covid19IsTheDiseaseCaused}>
              <li>
                The coronavirus can be spread from person to person. It is
                diagnosed with a test.
              </li>
            </ul>
          </div>
          <b className={styles.leftSectionHeader2}>What Is Coronavirus ?</b>
        </div>
        <div className={styles.upRightSection}>
          <img
            className={styles.rightSectionImgIcon1}
            alt=""
            src="/rightsectionimg1@2x.png"
          />
        </div>
        <div className={styles.recoveredTitle}>Recovered Case</div>
        <b className={styles.recoverNum}>595,856,25</b>
        <div className={styles.deathTitle}>Death Case</div>
        <b className={styles.deathNum}>5,856,25</b>
        <div className={styles.activeTitle}>Active Case</div>
        <b className={styles.activeNum}>95,856,25</b>
        <img className={styles.virusIcon} alt="" src="/virus.svg" />
        <b className={styles.header2}>
          Reported Cases and Deaths by Country or Territory
        </b>
        <b className={styles.mainHeader}>Coronavirus Statistics</b>
      </section>
      <header className={styles.heroSection} id="hero-section">
        <a className={styles.logo} href="/">CoronaVirus.</a>
        <Button
          className={styles.heroButton}
          sx={{ width: 266 }}
          variant="contained"
          color="primary"
        href="#section-3">
          How To Prevent
        </Button>
        <nav className={styles.nav} id="navbar" >
          <a className={styles.home} href="#hero-section"> Home</a>
          <a className={styles.reports}href="#section-2">Reports</a>
          <a className={styles.prevent}href="#section-3">Prevent</a>
          <a className={styles.prevent}href="#section-4">Protect</a>
          <a className={styles.symptoms1}href="#section-5">Symptoms</a>
          <a className={styles.contact}href="#contact">Contact</a>
        </nav>
        <img className={styles.heroImageIcon} alt="" src="/heroimage@2x.png" />
        <b className={styles.heroStay}>Stay Safe. Stay Home.</b>
        <div className={styles.heroCovid}>COVID-19 AWARENESS</div>
        <div
          className={styles.heroText}
        >{`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores non veniam iure nam! Quisquam, eaque provident. `}</div>
      </header>
      <section className={styles.section4} id="section-4">
        <div className={styles.section4Left}>
          <div className={styles.leftPortion}>
            <img className={styles.cancelIcon} alt="" src="/cancel@2x.png" />
            <img className={styles.cancelIcon1} alt="" src="/cancel@2x.png" />
            <img className={styles.cancelIcon2} alt="" src="/cancel@2x.png" />
            <img className={styles.cancelIcon3} alt="" src="/cancel@2x.png" />
            <img className={styles.cancelIcon4} alt="" src="/cancel@2x.png" />
            <img className={styles.cancelIcon5} alt="" src="/cancel@2x.png" />
            <img className={styles.cancelIcon6} alt="" src="/cancel@2x.png" />
            <b className={styles.dont}>Don’t</b>
            <div className={styles.heroText1}>Lorem ipsum dolor</div>
            <div className={styles.heroText2}>Lorem ipsum dolor</div>
            <div className={styles.heroText3}>Lorem ipsum dolor</div>
            <div className={styles.heroText4}>Lorem ipsum dolor</div>
            <div className={styles.heroText5}>Lorem ipsum dolor</div>
            <div className={styles.heroText6}>Lorem ipsum dolor</div>
            <div className={styles.heroText7}>Lorem ipsum dolor</div>
          </div>
          <div className={styles.rightPortion}>
            <img className={styles.checkIcon} alt="" src="/check@2x.png" />
            <img className={styles.checkIcon1} alt="" src="/check@2x.png" />
            <img className={styles.checkIcon2} alt="" src="/check@2x.png" />
            <img className={styles.checkIcon3} alt="" src="/check@2x.png" />
            <img className={styles.checkIcon4} alt="" src="/check@2x.png" />
            <img className={styles.checkIcon5} alt="" src="/check@2x.png" />
            <img className={styles.checkIcon6} alt="" src="/check@2x.png" />
            <b className={styles.do}>Do</b>
            <div className={styles.leftSectionText3}>
              <p className={styles.avoidTouchingYour}>
                Avoid touching your eyes, nose and mouth
              </p>
            </div>
            <div className={styles.leftSectionText4}>
              <p className={styles.avoidTouchingYour}>
                Avoid touching your eyes, nose and mouth
              </p>
            </div>
            <div className={styles.leftSectionText5}>
              <p className={styles.avoidTouchingYour}>
                Avoid touching your eyes, nose and mouth
              </p>
            </div>
            <div className={styles.leftSectionText6}>
              <p className={styles.avoidTouchingYour}>
                Avoid touching your eyes, nose and mouth
              </p>
            </div>
            <div className={styles.leftSectionText7}>
              <p className={styles.avoidTouchingYour}>
                Avoid touching your eyes, nose and mouth
              </p>
            </div>
            <div className={styles.leftSectionText8}>
              <p className={styles.avoidTouchingYour}>
                Avoid touching your eyes, nose and mouth
              </p>
            </div>
            <div className={styles.leftSectionText9}>
              <p className={styles.avoidTouchingYour}>
                Avoid touching your eyes, nose and mouth
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section4Right}>
          <img
            className={styles.fightVirusConceptDoctorNurIcon}
            alt=""
            src="/fightvirusconceptdoctornursesuseswordshieldfightingcovid19coronavirusillustration-138260615-1@2x.png"
          />
        </div>
        <b className={styles.mainHeader1}>How To Protect Yourself</b>
      </section>
      <section className={styles.mainHeaderParent} id="section-5">
        <b className={styles.mainHeader2}>Symptoms</b>
        <div className={styles.feverParent}>
          <img className={styles.sneezingIcon} alt="" src="/fever1@2x.png" />
          <b className={styles.mainHeader3}>High Fever</b>
        </div>
        <div className={styles.headacheParent}>
          <img className={styles.headacheIcon} alt="" src="/headache@2x.png" />
          <b className={styles.mainHeader4}>Headache</b>
        </div>
        <div className={styles.sneezingParent}>
          <img className={styles.sneezingIcon} alt="" src="/sneezing@2x.png" />
          <b className={styles.mainHeader5}>Cough</b>
        </div>
        <div className={styles.vomitingParent}>
          <img className={styles.headacheIcon} alt="" src="/vomiting@2x.png" />
          <b className={styles.mainHeader6}>Vomitting</b>
        </div>
        <div className={styles.lungsParent}>
          <img className={styles.sneezingIcon} alt="" src="/lungs@2x.png" />
          <b className={styles.mainHeader7}>Shortness of Breath</b>
        </div>
        <img className={styles.frameChild} alt="" src="/line-1.svg" />
        <Button
          className={styles.section2Button3}
          sx={{ width: 266 }}
          variant="contained"
          color="primary"
        >
          Learn More
        </Button>
      </section>
      <footer className={styles.footer} id="footer">
        <div className={styles.footerText}>
          Copyright @ Shekhar 2023, All rights reserved
        </div>
      </footer>
      <img className={styles.backImgIcon} alt="" src="/backimg@2x.png" />
      <section className={styles.section5} id="contact">
        <form className={styles.contactForm} id="conatct-form">
          <TextField
            className={styles.name}
            sx={{ width: 330 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Name"
            placeholder="name"
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.mail}
            sx={{ width: 330 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Email"
            placeholder="email"
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.textarea}
            sx={{ width: 330 }}
            color="primary"
            variant="outlined"
            multiline
            label="Messege"
            placeholder="messege"
            margin="none"
          />
          <Button
            className={styles.contactButton}
            sx={{ width: 116 }}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </form>
        <b className={styles.contactHeader}>Contact</b>
      </section>
    </div>
  );
};

export default CovidDesktop;
