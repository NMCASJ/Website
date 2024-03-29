import * as React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              {/* <div className="column is-4"> */}
              <div className="column is-6">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/events">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Resources
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              {/*<div className="column is-6">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Resources
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>*/}
              <div className="column is-6 social">
                <a title="facebook" href="https://www.facebook.com/people/NM-Counselors-for-Advocacy-and-Social-Justice/100081790421708/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                {/* <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a> */}
              </div>
            </div>
            <div className="column is-12">
              Icons used on this site are from{' '}
              <a
                className="text-is-white"
                href="https://thenounproject.com/"
                target="_blank"
                rel="noreferrer"
              >
                NounProject
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
