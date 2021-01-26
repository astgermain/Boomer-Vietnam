/**
 * Footer Component
 */

import React from "react";
import { Link } from "gatsby";
import "../styles/footer.css";
import logo from "../../public/static/BoomerVietnam.png";
import payments from "../../public/static/payments.png";

const Footer = ({ fullpageApi }) => {
  const handleScroll = () => {
    fullpageApi.moveTo(1);
  };
  console.log(fullpageApi);

  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
          </div>
          <div className="footer-top-middle">
            <Link to="/" className="footer-top-logo">
              <img
                src={logo}
                alt="Boomer Naturals Logo"
                className="header-logo"
              />
            </Link>
            <div className="footer-bottom-socials">
              <Link to="/">
                <svg
                  width="36px"
                  height="36px"
                  className="iconeffect instagramIcon"
                  viewBox="0 0 32 31"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <radialGradient id="rg" r="150%" cx="15%" cy="125%">
                    <stop stopColor="#fdf497" offset="0" />
                    <stop stopColor="#fdf497" offset="0.05" />
                    <stop stopColor="#fd5949" offset="0.45" />
                    <stop stopColor="#d6249f" offset="0.6" />
                    <stop stopColor="#285AEB" offset="0.9" />
                  </radialGradient>
                  <title>Instagram Icon</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Product-Page-Copy-7"
                      transform="translate(-1423.000000, -5634.000000)"
                    >
                      <g
                        id="Group-16"
                        transform="translate(1424.000000, 5634.000000)"
                      >
                        <path
                          d="M30.6040681,15.5 C30.6040681,24.0603771 23.6159781,31 14.996455,31 C6.37667844,31 -0.611005992,24.0603771 -0.611005992,15.5 C-0.611005992,6.93957259 6.37667844,0 14.996455,0 C23.6159781,0 30.6040681,6.93957259 30.6040681,15.5"
                          id="Fill-22"
                          className="iconBorder"
                        ></path>
                        <path
                          d="M23.5484888,16.0330916 C23.5484888,17.5430139 23.5669337,19.0531836 23.5440022,20.5627597 C23.5096048,22.8189144 22.366516,23.963312 20.0883146,23.9820556 C17.0448966,24.0070306 14.0004817,24.0046073 10.9565653,23.9829953 C8.62651857,23.9664277 7.471615,22.8104576 7.45865368,20.4965884 C7.44170426,17.4768921 7.4373672,14.4568495 7.46024892,11.4372026 C7.47724819,9.19825839 8.65094567,8.03645248 10.9221679,8.01790671 C13.9655859,7.99303065 17.0100008,7.99535506 20.0539172,8.01696706 C22.3889491,8.03358407 23.518578,9.17437144 23.5449992,11.5033739 C23.5624471,13.0130985 23.5484888,14.5231692 23.5484888,16.0330916"
                          id="Fill-23"
                          className="iconB"
                          fill="url(#rg)"
                        ></path>
                        <path
                          d="M10.8772774,14.012398 C10.2655718,16.2455161 10.788338,18.0672245 12.7776162,19.2709966 C14.3444323,20.2192693 16.010564,20.1443357 17.5042521,19.0981659 C19.2568527,17.8708985 19.7307021,16.0305775 19.1530901,14.0210516 C20.3093025,14.0210516 20.9635013,14.0237105 20.9635013,14.0237105 C20.9635013,14.0237105 21.5416272,13.9349504 21.53469,15.1166776 C21.53469,16.4612282 21.5539602,18.7586441 21.5282666,20.1027113 C21.5035612,21.3906991 20.934843,21.9709753 19.6249631,21.9814176 C16.5412359,22.0060249 13.4575087,22.00646 10.3742756,21.9811276 C9.08514815,21.9705402 8.49271281,21.373827 8.47047796,20.0894166 C8.43885506,18.2862724 8.47788958,16.4820645 8.45170186,14.6787753 C8.44478435,14.1798141 8.56979364,14.0071768 9.11924159,14.0029708 C9.76800522,13.9980397 10.09214,13.9980397 10.8772774,14.012398"
                          id="Fill-24"
                          className="iconB2"
                        ></path>
                        <path
                          d="M15.0219995,18.9997869 C13.6841138,19.0191998 12.5169468,17.7096968 12.4802378,16.1486152 C12.4399907,14.4368074 13.5602764,13.0166666 14.963619,13.0001472 C16.3718266,12.9835226 17.5257253,14.3768852 17.5137839,16.0792233 C17.5022847,17.6384109 16.3576738,18.980374 15.0219995,18.9997869"
                          id="Fill-25"
                          className="iconB2"
                        ></path>
                        <path
                          d="M18.5208136,10.4704565 C18.5208136,8.99958323 18.5208136,8.99958323 20.2007983,9 C21.5426764,9.00033777 21.5426764,9.00033777 21.541566,10.7035563 C21.5410108,12.0006692 21.5410108,12.0006692 19.7888523,11.9999685 C18.5208136,11.9994835 18.5208136,11.9994835 18.5208136,10.4704565"
                          id="Fill-26"
                          className="iconB2"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link to="/">
                <svg
                  width="36px"
                  height="36px"
                  className="iconeffect facebookIcon"
                  viewBox="0 0 32 31"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook Icon</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Product-Page-Copy-7"
                      transform="translate(-1423.000000, -5674.000000)"
                    >
                      <g
                        id="Group-14"
                        transform="translate(1423.000000, 5674.000000)"
                      >
                        <path
                          d="M31.6040681,15.5002517 C31.6040681,24.060483 24.6162989,31 15.9965311,31 C7.37671249,31 0.388994008,24.060483 0.388994008,15.5002517 C0.388994008,6.93961768 7.37671249,0 15.9965311,0 C24.6162989,0 31.6040681,6.93961768 31.6040681,15.5002517"
                          id="Fill-31"
                          fill="#26293E"
                          className="iconBorder"
                        ></path>
                        <path
                          d="M17.6856854,16.7180474 C17.460858,16.7247219 17.4443465,16.938821 17.4442945,17.051775 C17.4429965,19.0890538 17.4434118,21.1258193 17.4432041,23.1625847 C17.4431522,23.5194165 17.436558,23.9825278 17.089763,23.9825278 C15.971078,23.9825278 16.5000195,24 14.9642875,24 C14.5998906,24 14.5565347,24.0081991 14.5564828,23.6488001 C14.5562751,21.4354158 14.5565347,19.221518 14.5561712,17.0081337 C14.5561193,16.6749195 14.5501481,16.6687584 14.2209032,16.6682449 C13.6643905,16.6677315 13.4188977,16.6697852 12.862385,16.6697852 C12.4720784,16.6697852 12.5037516,16.6338453 12.4908746,16.3098728 C12.4720784,15.8349527 12.4720784,14.5020959 12.4722485,14.1134316 C12.4723381,13.962484 12.5215093,13.9137084 12.6735923,13.9157621 C13.2097511,13.9224367 13.7462734,13.9106279 14.2822764,13.9224367 C14.4726787,13.9265441 14.5355577,13.8752014 14.5332731,13.6800991 C14.5244981,12.9269015 14.5101673,12.172677 14.5405943,11.4210197 C14.6109502,9.6830689 15.5762022,8.54531439 17.2882654,8.1309787 C18.000963,7.95887793 18.723526,7.9985145 19.4449468,8.01905159 C19.7472955,8.02777985 20.0178153,8.06115261 20.3509544,8.08477026 C20.4904201,8.09452537 20.5173682,8.14946208 20.5143047,8.27011745 C20.4949893,9.02280162 20.4774912,9.77548578 20.4668989,10.5286834 C20.46477,10.6780907 20.3971141,10.7022217 20.2656965,10.7022217 C19.6289625,10.7032486 18.9915535,10.6519059 18.3555464,10.7150574 C17.8271761,10.767427 17.5710909,11.0128452 17.523737,11.535514 C17.4563407,12.2789564 17.5104447,13.0254795 17.4925831,13.7704622 C17.4882735,13.9491349 17.609566,13.9173024 17.7133605,13.9173024 C18.5526988,13.9188427 19.392089,13.9178158 20.2314792,13.9183293 C20.5313875,13.9183293 20.5471721,13.9198695 20.5170567,14.2212513 C20.4394834,14.9970397 20.3024582,15.7456164 20.173481,16.4469579 C20.1279963,16.6944297 20.0453865,16.7108594 19.8380572,16.7118863 C18.9382284,16.7170205 18.5483372,16.7159937 17.6856854,16.7180474"
                          id="Fill-32"
                          fill="#FFFFFE"
                          className="iconC"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link to="/">
                <svg
                  width="36px"
                  height="36px"
                  className="iconeffect youtubeIcon"
                  viewBox="0 0 32 31"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Youtube Icon</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Product-Page-Copy-7"
                      transform="translate(-1423.000000, -5714.000000)"
                    >
                      <g
                        id="Group-9"
                        transform="translate(1424.000000, 5714.000000)"
                      >
                        <path
                          d="M30.6040681,15.5 C30.6040681,24.0604274 23.6160122,31 14.9965311,31 C6.37704997,31 -0.611005992,24.0604274 -0.611005992,15.5 C-0.611005992,6.93962294 6.37704997,0 14.9965311,0 C23.6160122,0 30.6040681,6.93962294 30.6040681,15.5"
                          id="Fill-19"
                          fill="#26293E"
                          className="iconBorder"
                        ></path>
                        <path
                          d="M9.05225318,21.9048897 C7.45650249,21.8314215 6.72436486,21.0689818 6.59134267,19.5576796 C6.38820025,17.25447 6.3856223,14.9457792 6.58773354,12.6421673 C6.72694281,11.0618221 7.52610713,10.2690598 9.20074307,10.1705994 C13.0496215,9.94431137 16.9041715,9.94280278 20.7535656,10.1680851 C22.5540054,10.2734347 23.3108914,11.0770588 23.4351486,12.7877459 C23.5924035,14.9557358 23.5970438,17.1228206 23.4403045,19.291766 C23.3119226,21.0680263 22.577207,21.8721533 20.7097404,21.955025 C18.8422739,22.037947 11.0625381,21.9974163 9.05225318,21.9048897"
                          id="Fill-20"
                          fill="#FFFFFE"
                          className="iconD"
                        ></path>
                        <path
                          d="M13.4861243,13 C15.5270791,14.021812 17.4198023,14.9691017 19.5277515,16.0246077 C17.4382653,17.0537466 15.5349918,17.9911065 13.4861243,19 C13.4861243,16.9490492 13.4861243,15.0683522 13.4861243,13"
                          id="Fill-21"
                          fill="#26293E"
                          className="iconD2"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link to="/">
                <svg
                  width="36px"
                  height="36px"
                  className="iconeffect twitterIcon"
                  viewBox="0 0 32 31"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Product-Page-Copy-7"
                      transform="translate(-1423.000000, -5754.000000)"
                    >
                      <g
                        id="Group-8"
                        transform="translate(1423.000000, 5754.000000)"
                      >
                        <path
                          d="M31.6040681,15.5002517 C31.6040681,24.060483 24.6163943,31 15.9967592,31 C7.37676923,31 0.388994008,24.060483 0.388994008,15.5002517 C0.388994008,6.93961768 7.37676923,0 15.9967592,0 C24.6163943,0 31.6040681,6.93961768 31.6040681,15.5002517"
                          id="Fill-7"
                          fill="#26293E"
                          className="iconBorder"
                        ></path>
                        <path
                          d="M7.53149814,21.3416741 C7.9403883,21.3736067 8.35013842,21.3746892 8.75837096,21.3427566 C9.21061369,21.3070354 9.65526846,21.2171911 10.0928411,21.0872958 C10.8116744,20.8740511 11.4814388,20.5460654 12.1051695,20.1098337 C12.2574347,20.0032114 12.4086881,19.8928004 12.573094,19.7331374 C11.8041802,19.6930863 11.1268279,19.4544037 10.5359783,18.9808272 C9.94614046,18.508333 9.52677891,17.8945778 9.28497575,17.1114174 C9.80500431,17.2126275 10.3068217,17.1915195 10.8035805,17.0556707 C10.8000395,16.9896406 9.15952139,16.4722243 8.50695637,15.198168 C8.19332047,14.6293348 8.05319605,14.0069199 8.03447907,13.3498662 C8.03144388,13.252986 8.08455964,13.3044029 8.11187631,13.3200985 C8.45738167,13.5181889 8.82666264,13.6410482 9.21213128,13.7076195 C9.33606805,13.7292687 9.46354587,13.7303512 9.60518789,13.741717 C8.01930314,12.3448014 7.68027285,10.6707758 8.51707366,8.67904796 C8.73712465,8.9361324 8.93289416,9.17427377 9.13878095,9.40267299 C9.68258513,10.0050624 10.2886106,10.5262673 10.9492695,10.976571 C11.8067096,11.561641 12.7248534,11.9989552 13.7062302,12.2836423 C14.3628421,12.4736142 15.0290655,12.5937674 15.7079354,12.6392307 C15.8384485,12.6478904 15.8505892,12.5964735 15.8323781,12.4811914 C15.605245,11.0485546 16.0033602,9.83782222 17.0196417,8.88850412 C17.7329105,8.22279075 18.5888329,7.94135094 19.5403638,8.0100872 C20.423603,8.07395239 21.176835,8.43820044 21.8015775,9.10661997 C21.8658222,9.17535623 21.9275377,9.18130976 22.0115112,9.16074301 C22.6888635,8.9967502 23.335864,8.74886668 23.9418895,8.38191248 C23.9843821,8.35593342 24.0309217,8.33644913 24.1159069,8.29369193 C23.8311052,9.17860361 23.3378875,9.83403361 22.638783,10.3314243 C23.2964066,10.2805487 23.9171022,10.0770461 24.555503,9.80210102 C24.4725412,10.0056036 24.3572042,10.14037 24.2545137,10.2762188 C23.8771389,10.7784806 23.4562598,11.2369028 22.9645596,11.6141404 C22.8760333,11.6823354 22.840117,11.7602726 22.843658,11.8852968 C22.8740099,12.9271653 22.7571552,13.9511732 22.5047289,14.9589441 C22.1405066,16.4116065 21.5359987,17.7359973 20.6815938,18.9315752 C20.0406636,19.8283939 19.2849023,20.5942349 18.4127921,21.226392 C17.7440395,21.710252 17.0267238,22.095608 16.2628686,22.3813777 C15.556682,22.6454981 14.8322843,22.8197743 14.0896754,22.917737 C13.3834887,23.0113699 12.6752786,23.021112 11.969092,22.966989 C11.0706769,22.8977115 10.1960375,22.6893378 9.34770293,22.3597285 C8.70070242,22.1080563 8.0850655,21.7881892 7.49861696,21.4033744 C7.47615658,21.3887612 7.45784429,21.3665707 7.43755913,21.3481689 C7.46765806,21.324896 7.49942634,21.3313907 7.53149814,21.3416741"
                          id="Fill-8"
                          fill="#FFFFFE"
                          className="iconE"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="footer-top-links">
            <span className="footer-text-reg">
              <b>Phone:</b> (702) 960-4843
            </span>
            <br></br>
            <span className="footer-text-reg">
              <b>E-Mail:</b> info@BoomerVietnam.com
            </span>
            </div>
          </div>
          <div className="footer-top-right">
            
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Link to="/" className="header-link">
              Contact Us
            </Link>
            <Link to="/" className="header-link">
              F.A.Q
            </Link>
            <Link to="/" className="header-link">
              About
            </Link>
            <Link to="/" className="header-link">
              Terms of Service
            </Link>
            <Link to="/" className="header-link">
              Privacy Policy
            </Link>
          </div>
          <div className="footer-bottom-right">
            <div
              role="button"
              tabIndex={0}
              className="top-scroll-btn"
              onClick={handleScroll}
            >
              Back to Top
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
