import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <footer className="footerContainer">
        <div className="footerWrapper">
          {/* Footer section1 */}
          <div className="section">
            <div className="sectionWrapper">
              <h3 className="section__head">
                <Link onClick={scrollToTop} to="/about">
                  About Us
                </Link>
              </h3>

              <div className="section1__text">
                <p>
                  Lisieux Guest Centre is located in Fort Portal, 2.4 km from
                  MarketPlace. Guests can enjoy the on-site restaurant. Free
                  private parking is available on site.
                </p>
                <p>
                  There is a 24-hour front desk and gift shop at the property.
                  For your comfort, you will find slippers and free toiletries.
                  Lisieux Guest Centre features free Wi-Fi . A TV is available.
                </p>
                <p>
                  An array of activities are offered in the area, such as
                  golfing, cycling and hiking. Tourism office is 2.8 km from
                  Lisieux Guest Centre, while Quick Saver Supermarket is 2.9 km
                  away.
                </p>
              </div>
              <div className="sectionButton">
                <button className="section1__btn">Button</button>
              </div>
            </div>
          </div>

          {/* Footer section2 */}
          <div className="section">
            <div className="sectionWrapper">
              <h3 className="section__head">
                <Link onClick={scrollToTop} to="/blog">
                  Blog
                </Link>
              </h3>
              <div className="section2Items">
                <Link onClick={scrollToTop} to="/" className="section2__item">
                  <img
                    className="f-blog__img"
                    src="/assets/bachelor.webp"
                    alt=""
                  />
                  <div className="f-blog__text">
                    Our Luxury Hotels & Restaurants
                  </div>
                </Link>

                <Link onClick={scrollToTop} to="/" className="section2__item">
                  <img
                    className="f-blog__img"
                    src="/assets/family.webp"
                    alt=""
                  />
                  <div className="f-blog__text">
                    Our Luxury Hotels & Restaurants
                  </div>
                </Link>

                <Link onClick={scrollToTop} to="/" className="section2__item">
                  <img
                    className="f-blog__img"
                    src="/assets/presedential.webp"
                    alt=""
                  />
                  <div className="f-blog__text">
                    Our Luxury Hotels & Restaurants
                  </div>
                </Link>
                {/* <Link
                    onClick={scrollToTop}
                    to="/services"
                    className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
                  >
                    Services
                  </Link> */}
              </div>
            </div>
          </div>

          {/* Footer section3 */}
          <div className="section">
            <div className="sectionWrapper">
              <h3 className="section__head"><Link onClick={scrollToTop} to="/contact">
              Get Support
                </Link></h3>
              <div className="section3Items">
                <div className="section3__item">
                  <img
                    src="https://img.icons8.com/material-outlined/2x/company.png"
                    alt="Company Email"
                    className="f-support__img"
                  />
                  <div className="section3__text">
                    <a target="_blank" rel="noreferrer" href="/">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </a>  
                  </div>
                </div>
                <div className="section3__item">
                  <img
                    className="f-support__img"
                    src="https://img.icons8.com/ios-glyphs/60/000000/phone-disconnected.png"
                    alt="Call Us"
                  />{" "}
                  <div className="section3__text">
                    <a target="_blank" rel="noreferrer" href="tel:+17215202238">
                      +1 (123) 456-7890
                    </a>{" "}
                  </div>
                </div>
                <div className="section3__item">
                  <img
                    src="https://img.icons8.com/material-rounded/24/000000/mail.png"
                    alt="Company Email"
                    className="f-support__img"
                  />
                  <div className="section3__text">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:info@test.com"
                    >
                      info@test.com
                    </a>{" "}
                  </div>
                </div>
                <div className="section3__item">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.IjJY8uougVuI6pH4cZcdjQHaHY&pid=Api&P=0&w=161&h=161"
                    alt="Company Email"
                    className="f-support__img"
                  />
                  <div className="section3__text">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:info@test.com"
                    >
                      Monday - Friday 8:00am - 5:00pm
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
                  <h3 className="text-gray-200 uppercase dark:text-white">
                    Find Us
                  </h3>
                  <div className="flex mt-4 -mx-2">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                      aria-label="Linkden"
                    >
                      <img
                        className="w-10 h-10"
                        src="https://image.flaticon.com/icons/png/512/145/145807.png"
                        alt="linkedin"
                      />
                    </a>

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                      aria-label="Instagram"
                    >
                      <img
                        className="w-10 h-10"
                        src="https://image.flaticon.com/icons/png/512/1409/1409946.png"
                        alt="instagram"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                      aria-label="Facebook"
                    >
                      <img
                        className="w-10 h-10"
                        src="https://image.flaticon.com/icons/png/512/1384/1384053.png"
                        alt="facebook"
                      />
                    </a>

                  </div>
                </div> */}
        </div>
        <hr className="bottom__line" />

        {/* copyright section */}
        <div className="copyright">
          <div className="copyrightContainer">
            <p className="cc__text">
              © Lisieux Guest Center 2021 - All rights reserved
            </p>{" "}
            <a
              href="https://engagenreap.com/"
              target="_blank"
              rel="noreferrer"
              className="px-2"
            >
              {" "}
              Developed by EnR Team
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
