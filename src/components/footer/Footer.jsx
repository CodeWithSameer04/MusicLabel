import React from "react";
import "./footer.css";

const Footer = () => {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-inner">
          {/* Back to top button */}
          <a
            href="#"
            id="back-to-top-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Back to top
          </a>
          <div className="footer-left">
            <a
              href="https://www.awal.com"
              className="logo-link"
              aria-label="AWAL"
            >
              <span>RVM</span>
            </a>
            <div className="menu-block has-social">
              <ul className="text-link">
                <li>
                  <a
                    href="https://www.awal.com/company"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    COMPANY
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.awal.com/faq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/AWAL"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    {/* Facebook SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path
                        d="M11.7226 5.32458H13.0006V3.09858C12.7801 3.06825 12.0218 3 11.1386 3C9.29589 3 8.03356 4.15908 8.03356 6.28942V8.25H6.00006V10.7385H8.03356V17H10.5267V10.7391H12.478L12.7877 8.25058H10.5261V6.53617C10.5267 5.81692 10.7204 5.32458 11.7226 5.32458Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/awal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    {/* Twitter SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 5.42059C16.4856 5.66154 15.9317 5.82449 15.3508 5.89729C15.9441 5.52286 16.3993 4.92914 16.6138 4.22189C16.0583 4.56858 15.4444 4.8208 14.7887 4.95601C14.2661 4.3675 13.5191 4 12.6924 4C11.1073 4 9.82127 5.35645 9.82127 7.02925C9.82127 7.26674 9.84592 7.49729 9.89523 7.71918C7.50807 7.59263 5.39209 6.38787 3.97458 4.55298C3.72724 5.00195 3.5859 5.52286 3.5859 6.07757C3.5859 7.12806 4.09292 8.05547 4.86371 8.59892C4.39367 8.58418 3.94993 8.44637 3.56207 8.22102V8.25829C3.56207 9.72654 4.55227 10.9512 5.86705 11.2286C5.62628 11.2997 5.37237 11.3352 5.11023 11.3352C4.92534 11.3352 4.74456 11.317 4.56953 11.2815C4.9352 12.4845 5.99525 13.3608 7.25251 13.3842C6.26971 14.1972 5.03052 14.6817 3.68533 14.6817C3.4536 14.6817 3.22434 14.6678 3 14.6401C4.27123 15.4982 5.78159 16 7.40289 16C12.6867 16 15.5751 11.3846 15.5751 7.38115C15.5751 7.2494 15.5726 7.11766 15.5677 6.98852C16.129 6.56121 16.6162 6.02817 17 5.42059Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/awal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    {/* Instagram SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8287 3H7.1713C4.86971 3 3 4.87005 3 7.17205V12.8305C3 15.1299 4.86971 17 7.1713 17H12.8287C15.1277 17 17 15.1299 17 12.828V7.17205C16.9975 4.87005 15.1277 3 12.8287 3ZM15.5901 12.8304C15.5901 14.3549 14.3529 15.5923 12.8287 15.5923H7.1713C5.64707 15.5923 4.40991 14.3549 4.40991 12.8304V7.17199C4.40991 5.64749 5.64707 4.4101 7.1713 4.4101H12.8287C14.3529 4.4101 15.5901 5.64749 15.5901 7.17199V12.8304ZM9.99877 6.37923C8.00204 6.37923 6.37876 8.00281 6.37876 9.99991C6.37876 11.997 8.00204 13.6206 9.99877 13.6206C11.9955 13.6206 13.6188 11.997 13.6188 9.99991C13.6188 8.00281 11.9955 6.37923 9.99877 6.37923ZM9.99876 12.213C8.77684 12.213 7.78611 11.2221 7.78611 9.99994C7.78611 8.77783 8.77684 7.78687 9.99876 7.78687C11.2207 7.78687 12.2115 8.77783 12.2115 9.99994C12.2115 11.2221 11.2207 12.213 9.99876 12.213ZM14.4927 6.40658C14.4927 6.88501 14.1048 7.27284 13.6264 7.27284C13.148 7.27284 12.7602 6.88501 12.7602 6.40658C12.7602 5.92815 13.148 5.54031 13.6264 5.54031C14.1048 5.54031 14.4927 5.92815 14.4927 6.40658Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/user/awaluk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Spotify"
                    className="spotify-link"
                  >
                    {/* Spotify SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path
                        d="M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10Z"
                        fill="#22222B"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1407 9.20566C11.8843 7.86569 8.16252 7.74242 6.00842 8.39617C5.66253 8.5012 5.29674 8.30589 5.19193 7.95999C5.08711 7.6139 5.28221 7.24832 5.62841 7.14319C8.10099 6.39266 12.2114 6.53757 14.809 8.07955C15.1202 8.26425 15.2223 8.66611 15.0378 8.97665C14.8532 9.28781 14.4512 9.39036 14.1407 9.20566ZM14.0668 11.1904C13.9086 11.4473 13.5727 11.5278 13.3162 11.3701C11.435 10.2138 8.56654 9.87879 6.34092 10.5544C6.05233 10.6416 5.74746 10.4788 5.65985 10.1908C5.57286 9.90219 5.73571 9.59794 6.02378 9.51012C8.56613 8.73867 11.7267 9.11228 13.8873 10.4401C14.1438 10.5981 14.2245 10.9341 14.0668 11.1904ZM13.2103 13.0964C13.0845 13.3027 12.8159 13.3673 12.6104 13.2417C10.9667 12.237 8.8976 12.0101 6.46099 12.5667C6.2262 12.6205 5.99214 12.4733 5.93865 12.2386C5.88484 12.0038 6.03141 11.7698 6.26681 11.7162C8.93326 11.1066 11.2205 11.3689 13.0655 12.4965C13.2712 12.622 13.3361 12.8908 13.2103 13.0964ZM10 3C6.13406 3 3 6.13396 3 9.9999C3 13.8662 6.13406 17 10 17C13.866 17 17 13.8662 17 9.9999C17 6.13396 13.866 3 10 3Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/awal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    {/* YouTube SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.403 6.62663C15.7626 6.98903 15.88 7.81197 15.88 7.81197C15.88 7.81197 16 8.7786 16 9.74486V10.651C16 11.6177 15.88 12.5839 15.88 12.5839C15.88 12.5839 15.7626 13.4069 15.403 13.7693C14.9918 14.198 14.5359 14.2423 14.2783 14.2673C14.2499 14.2701 14.224 14.2726 14.2008 14.2753C12.5215 14.3963 10 14.4 10 14.4C10 14.4 6.88 14.3716 5.92 14.2798C5.87452 14.2714 5.81938 14.2648 5.75694 14.2573C5.45285 14.221 4.97557 14.1641 4.59662 13.7693C4.237 13.4069 4.12 12.5839 4.12 12.5839C4.12 12.5839 4 11.6177 4 10.651V9.74486C4 8.7786 4.12 7.81197 4.12 7.81197C4.12 7.81197 4.237 6.98903 4.59662 6.62663C5.0087 6.19733 5.46503 6.15351 5.72274 6.12877C5.75068 6.12608 5.77629 6.12362 5.79925 6.12092C7.4785 6 9.99738 6 9.99738 6H10.0026C10.0026 6 12.5215 6 14.2008 6.12092C14.2237 6.12363 14.2493 6.12609 14.2773 6.12878C14.5348 6.15352 14.9913 6.1974 15.403 6.62663ZM11.75 10.2001L9 8.4707L9.00035 11.9295L11.75 10.2001Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://itunes.apple.com/us/playlist/awal-first/pl.c004992e54bf4b13bf1dc14e65bcd6e0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="iTunes"
                  >
                    {/* iTunes SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <rect x="5.5" y="5.5" width="9" height="9" fill="#22222B"></rect>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 4C5.34315 4 4 5.34315 4 7V13C4 14.6569 5.34315 16 7 16H13C14.6569 16 16 14.6569 16 13V7C16 5.34315 14.6569 4 13 4H7ZM12.4433 12.3064C12.5284 12.1327 12.5541 11.9447 12.5541 11.7535C12.5547 11.0994 12.5546 10.4447 12.5546 9.79004C12.5545 9.57181 12.5545 9.35358 12.5545 9.13537C12.5549 8.2598 12.5549 7.38423 12.5541 6.50828C12.5541 6.47394 12.5522 6.4396 12.5487 6.40566C12.5342 6.26285 12.4367 6.1735 12.2946 6.18482C12.1945 6.1929 12.094 6.21277 11.9946 6.23242L11.9907 6.2332C11.7523 6.28009 11.5142 6.32838 11.2763 6.37663C11.2073 6.39061 11.1384 6.40459 11.0695 6.41853C10.8802 6.45687 10.6907 6.49508 10.5012 6.53331C10.3435 6.56512 10.1858 6.59694 10.0281 6.62884C9.94395 6.64577 9.85977 6.66269 9.77556 6.67962C9.5239 6.73022 9.27196 6.78087 9.02024 6.83174C8.99094 6.83771 8.96162 6.8435 8.93231 6.84928C8.84295 6.86691 8.75371 6.88452 8.66557 6.90743C8.54071 6.93982 8.44785 7.01434 8.41585 7.14505C8.4022 7.20007 8.39634 7.25821 8.39634 7.31478C8.39556 8.67144 8.39556 10.0285 8.39556 11.3855C8.39556 11.3913 8.39559 11.397 8.39561 11.4028C8.39568 11.4198 8.39576 11.4367 8.39517 11.4542C8.38776 11.6333 8.29607 11.7437 8.12087 11.7816C8.05028 11.7967 7.97946 11.8109 7.9086 11.8252C7.84786 11.8374 7.78709 11.8496 7.7264 11.8623C7.55433 11.8982 7.38265 11.9361 7.21878 12.0048C6.79582 12.1839 6.62531 12.5838 6.69047 12.9564C6.76617 13.3887 7.13098 13.6806 7.57033 13.6642C7.73694 13.6584 7.90198 13.6318 8.06274 13.5854C8.36747 13.4968 8.5926 13.3138 8.72019 13.0196C8.79784 12.8405 8.81891 12.6501 8.81891 12.4578C8.81938 11.7424 8.81942 11.027 8.81947 10.3116C8.8195 9.83441 8.81953 9.35727 8.81969 8.88019C8.81969 8.8751 8.81966 8.87003 8.81964 8.86498C8.81957 8.84991 8.8195 8.83501 8.82008 8.8201C8.82593 8.689 8.87197 8.63086 8.99878 8.59575C9.00062 8.59524 9.00249 8.5947 9.00438 8.59415C9.00969 8.59262 9.01516 8.59105 9.02063 8.5899C9.12564 8.56862 9.23075 8.54744 9.33586 8.52626C9.44087 8.50511 9.54587 8.48395 9.65078 8.4627C9.76925 8.43877 9.88776 8.4148 10.0063 8.39082C10.2434 8.34287 10.4804 8.29492 10.7171 8.24732C10.787 8.23324 10.8568 8.21915 10.9265 8.20506C11.205 8.14886 11.4831 8.0927 11.762 8.03779C11.8338 8.02335 11.9064 8.01165 11.9794 8.00735C12.0504 8.00345 12.1007 8.04559 12.1191 8.11465C12.1257 8.14197 12.1304 8.17084 12.1304 8.19932C12.1312 9.0308 12.1312 9.86228 12.1308 10.6941C12.1308 10.7238 12.1284 10.7538 12.123 10.7827C12.098 10.9138 12.0141 10.9903 11.8885 11.0192C11.7797 11.0443 11.67 11.0668 11.5603 11.0893C11.4964 11.1024 11.4325 11.1156 11.3687 11.1292C11.2092 11.1635 11.0507 11.2045 10.9025 11.2779C10.5306 11.4601 10.3609 11.8503 10.4257 12.2041C10.5037 12.633 10.8806 12.9287 11.3168 12.908C11.4838 12.9006 11.6473 12.8745 11.8069 12.8288C12.0941 12.7473 12.3106 12.5772 12.4433 12.3064Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5 4H5.5C4.67157 4 4 4.67157 4 5.5V14.5C4 15.3284 4.67157 16 5.5 16H14.5C15.3284 16 16 15.3284 16 14.5V5.5C16 4.67157 15.3284 4 14.5 4ZM4.49999 5.49999C4.49999 4.94771 4.94771 4.49999 5.49999 4.49999H14.5C15.0523 4.49999 15.5 4.94771 15.5 5.49999V14.5C15.5 15.0523 15.0523 15.5 14.5 15.5H5.49999C4.94771 15.5 4.49999 15.0523 4.49999 14.5V5.49999Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-block">
              <ul>
                <li>
                  <a
                    href="https://www.awal.com/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.awal.com/privacy-cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy & Cookie Policy
                  </a>
                </li>
              </ul>
              <p className="copyright">© 2025 AWAL</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
