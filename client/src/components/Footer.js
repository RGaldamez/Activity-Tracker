import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className='row footer-main mr-0 pt-4 pb-4'>
        <div className='col-xs-12 col-md-7 col-lg-7'>
          <div className='container'>
            <h4>Footer Content</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              odio omnis assumenda reprehenderit labore nisi optio eum quos
              amet, iusto ipsam reiciendis error perferendis voluptate aliquid
              velit laudantium rerum placeat!
            </p>
          </div>
        </div>
        <div className='col-xs-12 col-md-2 col-lg-2'>
          <div className='container'>
            <h4>Links</h4>

            <ul className='list-unstyled'>
              <li>
                <Link className='footer-link' to='/home'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='footer-link' to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link className='footer-link' to='/info'>
                  Info
                </Link>
              </li>
              <li>
                <Link className='footer-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-xs-12 col-md-2 col-lg-2'>
          <div className='container'>
            <h4>Follow me</h4>
            <ul className='list-unstyled'>
              <li>
                <a className='footer-link' href='https://facebook.com'>
                  Facebook
                </a>
              </li>
              <li>
                <a className='footer-link' href='https://github.com'>
                  Github
                </a>
              </li>
              <li>
                <a className='footer-link' href='https://twitter.com'>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-sub mb-0 text-white pt-3 pb-3 '>
        <div className='row mr-0'>
          <div className='col-xs-12 col-sm-6 offset-sm-4 col-md-4 offset-md-5 col-lg-4 offset-lg-5'>
            Copyright &#169; Ricardo Galdámez
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
