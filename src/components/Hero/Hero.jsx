import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    // className={`${isMounted ? 'jumbotron' : ''}`}
    // <section id="hero" className="jumbotron">

    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1300} delay={800} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            {<span className="text-color-main">{name || 'Gareth Wiebe'}</span>}
            <br />
            {/* {subtitle || "I'm the Unknown Developer."} */}
            <Typewriter
              options={{
                strings: [
                  'Backend Developer',
                  'Software Engineer',
                  'C# Programmer',
                  'Wizard of the screen',
                  'Master of the digital realm',
                ],
                autoStart: true,
                loop: true,
                skipAddStyles: false,
                wrapperClassName: 'typerS',
                cursorClassName: 'typerSC',
                cursor: '_',
                pauseFor: 3000,
                delay: 90,
                deleteSpeed: 40,
              }}
            />
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1500} delay={1500} distance="30px">
          <p className="hero-cta">
            {isDesktop ? (
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'About me'}
                </Link>
              </span>
            ) : (
              <span className="cta-btn cta-btn--peris">
                <Link to="about" smooth duration={1000}>
                  {cta || 'About me'}
                </Link>
              </span>
            )}

            {isDesktop ? (
              <span className="cta-btn cta-btn--hero">
                <Link to="contact" smooth duration={1000}>
                  {cta || 'Contact'}
                </Link>
              </span>
            ) : (
              <span className="cta-btn cta-btn--peris">
                <Link to="contact" smooth duration={1000}>
                  {cta || 'Contact'}
                </Link>
              </span>
            )}

            {isDesktop ? (
              <span className="cta-btn cta-btn--hero">
                <Link to="projects" smooth duration={1000}>
                  {cta || 'Projects'}
                </Link>
              </span>
            ) : (
              <div />
            )}

            {isDesktop ? (
              <span className="cta-btn cta-btn-Res">
                <a href="/resume">Resume</a>
              </span>
            ) : (
              <div />
            )}
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
