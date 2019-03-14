import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.css'
const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <Link to='/'>
      <svg
        width="136"
        height="34"
        viewBox="0 0 136 34"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>egghead-logo-white</title>
        <g fill="none">
          <path
            fill="#FFF"
            d="M16.556,33.984 C9.666,33.993 3.984,28.592 3.641,21.711 L3.641,21.686 C2.38330604,21.5276246 1.35108978,20.6148613 1.04,19.386 C0.679,17.972 0.19,15.86 0.132,13.83 C0.0943730103,12.6557373 0.771608539,11.5756395 1.845,11.098 C2.899,10.625 4.402,10.238 6.297,9.945 C7.357,7.495 8.608,5.365 9.931,3.76 C11.992,1.265 14.221,0 16.556,0 C18.891,0 21.118,1.265 23.176,3.761 C24.493,5.366 25.749,7.493 26.807,9.938 C28.689,10.222 30.19,10.611 31.273,11.093 C32.3458049,11.568777 33.0234964,12.6469944 32.987,13.82 C32.929,15.861 32.441,17.974 32.08,19.385 C31.7694332,20.6162666 30.7350536,21.5307296 29.475,21.688 L29.475,21.711 C29.1224003,28.5910063 23.4390344,33.9872358 16.55,33.983 L16.555,33.984 L16.556,33.984 Z"
          />
          <path
            fill="#FCFBFA"
            d="M16.548,2.15 C22.531,2.15 27.382,15.01 27.382,20.994 C27.382,26.978 22.532,31.829 16.547,31.829 C10.564,31.829 5.713,26.979 5.713,20.994 C5.714,15.01 10.565,2.15 16.548,2.15 Z"
          />
          <path
            fill="#252526"
            d="M30.286,12.529 L25.866,14.088 C25.866,14.088 26.55,16.168 26.556,16.183 C26.563,16.199 30.96,15.616 30.96,15.616 L30.286,12.529 Z M2.81,12.529 L7.23,14.088 C7.23,14.088 6.547,16.168 6.54,16.183 C6.534,16.199 2.138,15.616 2.138,15.616 L2.811,12.529 L2.81,12.529 Z"
          />
          <path
            fill="#E0E0E0"
            d="M12,12.16 C12.6891044,12.1438469 13.2841428,12.6393563 13.393,13.32 C13.533,14.072 13.626,14.833 13.67,15.598 C13.674206,15.8121531 13.6547548,16.026116 13.612,16.236 C13.5608848,15.7224979 13.4881536,15.2113778 13.394,14.704 C13.2851428,14.0233563 12.6901044,13.5278469 12.001,13.544 C10.341,13.561 8.681,13.687 7.037,13.922 C7.193,13.438 7.36,12.952 7.539,12.472 C9.0184704,12.2793603 10.5081178,12.1751751 12,12.16 Z M27.362,20.513 C23.46,20.312 20.127,19.063 19.375,18.617 C18.788,18.337 18.04,17.742 17.825,16.255 C17.681,17.893 17.99,19.385 19.528,20.122 C19.641,20.19 22.585,21.647 27.336,21.897 C27.3743575,21.4367026 27.3830422,20.9744133 27.362,20.513 Z M5.746,20.513 C9.648,20.312 12.981,19.063 13.733,18.617 C14.32,18.337 15.068,17.742 15.283,16.255 C15.427,17.893 15.118,19.385 13.58,20.122 C13.467,20.19 10.523,21.647 5.772,21.897 C5.73364246,21.4367026 5.72495783,20.9744133 5.746,20.513 Z M21.085,12.16 C20.3958956,12.1438469 19.8008572,12.6393563 19.692,13.32 C19.552,14.072 19.46,14.833 19.416,15.598 C19.411294,15.8121706 19.4307502,16.026189 19.474,16.236 C19.529,15.685 19.605,15.16 19.691,14.704 C19.800666,14.023817 20.3952023,13.5287257 21.084,13.544 C22.745,13.561 24.404,13.687 26.048,13.922 C25.8916915,13.4349199 25.7243148,12.9514614 25.546,12.472 C24.0668607,12.2794 22.5775483,12.1752149 21.086,12.16 L21.085,12.16 Z"
          />
          <path
            fill="#56555C"
            d="M7.071,10.988 C8.135,8.408 9.411,6.175 10.761,4.531 C12.6,2.301 14.546,1.171 16.545,1.171 C18.545,1.171 20.491,2.301 22.329,4.529 C23.684,6.171 24.965,8.404 26.019,10.987 L26.071,11.119 L25.939,11.1 C25.563,11.05 25.258,11.014 24.885,10.968 L24.838,10.968 L24.82,10.926 C23.623,8.132 21.58,4.483 18.941,2.959 C18.2180927,2.51884066 17.3912212,2.2786476 16.545,2.263 C15.6991196,2.27882404 14.8726156,2.51901057 14.15,2.959 C11.517,4.481 9.48,8.113 8.273,10.922 L8.255,10.964 L8.209,10.964 C7.833,11.004 7.527,11.041 7.154,11.096 L7.023,11.115 L7.071,10.988 Z M27.486,19.164 C27.192,19.156 26.896,19.144 26.604,19.127 L26.514,19.127 L26.502,19.036 C26.238,16.982 25.648,14.576 24.828,12.265 L24.775,12.092 L24.953,12.116 C25.288,12.161 25.612,12.211 25.928,12.264 L25.993,12.274 L26.014,12.336 C26.804,14.644 27.364,17.025 27.604,19.041 L27.619,19.173 L27.486,19.163 L27.486,19.164 Z"
          />
          <path
            fill="#252526"
            d="M26.52,13.96 C26.360779,13.4156783 26.1897385,12.8748837 26.007,12.338 L25.987,12.276 L25.922,12.265 C25.611,12.212 25.282,12.162 24.947,12.117 L24.775,12.092 L24.835,12.262 C25.016,12.774 25.186,13.29 25.345,13.808 C25.907,13.873 26.225,13.918 26.52,13.96 Z"
          />
          <path
            fill="#56555C"
            d="M5.572,18.995 C5.812,16.979 6.377,14.598 7.162,12.29 L7.183,12.228 L7.248,12.216 C7.559,12.164 7.888,12.113 8.223,12.069 L8.401,12.045 L8.341,12.214 C7.523,14.525 6.929,16.929 6.668,18.984 L6.656,19.076 L6.566,19.076 C6.273,19.093 5.976,19.105 5.684,19.112 L5.552,19.112 L5.572,18.995 Z"
          />
          <path
            fill="#252526"
            d="M7.248,12.216 L7.183,12.226 L7.163,12.289 C6.98025357,12.8268881 6.80921322,13.3686826 6.65,13.914 C7.2,13.844 7.359,13.852 7.819,13.803 C7.981,13.276 8.155,12.739 8.346,12.213 L8.406,12.045 L8.227,12.069 C7.89999558,12.1134214 7.57363016,12.1624262 7.248,12.216 Z"
          />
          <path
            fill="#56555C"
            d="M16.548,32.802 C11.6950457,32.802368 7.33549873,29.8349252 5.556,25.32 C4.95803562,23.7900989 4.68162524,22.1534226 4.744,20.512 L4.744,20.438 L4.818,20.438 C5.203,20.428 5.466,20.418 5.74,20.404 L5.826,20.404 L5.826,20.489 C5.61387559,24.9551461 8.19420614,29.0844695 12.3013673,30.8515816 C16.4085284,32.6186937 21.1810255,31.6529351 24.278,28.428 C25.2593494,27.4101114 26.0276881,26.2066075 26.538,24.888 C27.082,23.488 27.325,21.99 27.254,20.491 L27.254,20.405 L27.34,20.405 C27.723,20.425 27.987,20.433 28.262,20.439 L28.336,20.439 L28.336,20.513 C28.4039497,22.1520989 28.1340233,23.7876557 27.543,25.318 C25.7675295,29.8366926 21.405984,32.8070829 16.551,32.804 L16.548,32.804 L16.548,32.802 Z"
          />
          <path
            fill="#252526"
            d="M5.863,21.898 C5.825,21.428 5.815,20.955 5.834,20.483 L5.834,20.397 L5.748,20.397 C5.472,20.412 5.208,20.422 4.826,20.432 L4.752,20.432 L4.752,20.505 C4.736,20.979 4.746,21.453 4.784,21.925 L4.819,21.925 C5.175,21.925 5.523,21.909 5.854,21.893 L5.863,21.898 Z M28.345,20.437 L28.271,20.437 C27.992,20.437 27.728,20.422 27.349,20.403 L27.263,20.403 L27.263,20.488 C27.283,20.956 27.273,21.424 27.236,21.89 L28.316,21.937 C28.354,21.464 28.364,20.991 28.348,20.517 L28.345,20.437 Z"
          />
          <path
            fill="#252526"
            d="M28.954,20.678 C26.6952475,20.6864276 24.445226,20.3972736 22.262,19.818 C21.322,19.571 20.407,19.238 19.528,18.827 L19.507,18.811 C17.662,17.929 17.594,16.161 17.766,14.549 C17.809,14.142 17.66,13.603 17.231,13.317 C16.8217025,13.0439161 16.2882975,13.0439161 15.879,13.317 C15.449,13.601 15.3,14.139 15.343,14.545 C15.515,16.158 15.443,17.926 13.603,18.808 L13.582,18.818 C12.7024943,19.2342431 11.7870861,19.5699486 10.847,19.821 C8.66377172,20.4002622 6.41375178,20.689416 4.155,20.681 L4.145,20.681 C3.20778056,20.6696199 2.39589547,20.0281608 2.168,19.119 C1.818,17.766 1.351,15.739 1.297,13.837 C1.27273427,13.0757044 1.7114252,12.3753797 2.407,12.065 C4.947,10.938 10.089,10.514 12.282,10.543 C13.047,10.537 13.782,10.841 14.32,11.385 C15.0216745,11.0561128 15.785163,10.8798969 16.56,10.868 C17.3346989,10.8792095 18.0981933,11.054745 18.8,11.383 C19.3336751,10.84257 20.0624847,10.5398004 20.822,10.543 C22.14,10.523 27.806,10.768 30.705,12.058 C31.3996549,12.3656831 31.838584,13.0636199 31.815,13.823 C31.761,15.728 31.288,17.766 30.949,19.116 C30.7211045,20.0251608 29.9092194,20.6666199 28.972,20.678 L28.954,20.678 Z M21.098,12.244 C20.4473812,12.2295607 19.8855629,12.6966761 19.781,13.339 C19.641,14.089 19.549,14.846 19.504,15.607 C19.494,16.477 19.806,17.072 20.426,17.377 C22.75,18.413 25.45,18.925 28.681,18.941 C28.9286853,18.9397268 29.1447252,18.7724701 29.208,18.533 C29.515,17.333 29.929,15.548 29.977,13.907 C29.9821038,13.74977 29.891037,13.6052509 29.747,13.542 C27.543,12.551 22.82,12.212 21.098,12.239 L21.098,12.244 Z M3.348,13.539 C3.20435474,13.6025589 3.11372656,13.7470099 3.119,13.904 C3.167,15.541 3.581,17.331 3.888,18.53 C3.95,18.77 4.167,18.938 4.415,18.939 C7.649,18.923 10.345,18.411 12.676,17.373 C13.298,17.07 13.609,16.473 13.599,15.6 C13.5541546,14.8398962 13.4613028,14.0833876 13.321,13.335 C13.2163861,12.692292 12.6539949,12.2250549 12.003,12.24 C11,12.224 5.845,12.427 3.349,13.54 L3.348,13.539 Z"
          />
          <path
            fill="#FFFFFB"
            d="M47.765,20.49 C47.635,20.947 47.43,21.381 47.16,21.773 C46.884,22.178 46.544,22.533 46.152,22.827 C45.7301716,23.1378636 45.2607537,23.3783136 44.762,23.539 C44.196009,23.7205941 43.604363,23.8094086 43.01,23.802 C42.3070701,23.8053911 41.6094961,23.6796379 40.952,23.431 C40.3116052,23.1883661 39.7281224,22.8162852 39.238,22.338 C38.73,21.838 38.328,21.238 38.06,20.576 C37.7594756,19.8274932 37.6115791,19.026472 37.625,18.22 C37.6146857,17.4426327 37.7591575,16.6709833 38.05,15.95 C38.3110665,15.3041617 38.6971203,14.7162453 39.186,14.22 C39.6565318,13.7477818 40.2150608,13.3723715 40.83,13.115 C41.4408126,12.8544061 42.0979211,12.7197193 42.762,12.719 C44.389,12.719 45.656,13.203 46.562,14.169 C47.467,15.135 47.918,16.456 47.912,18.132 C47.912,18.33 47.905,18.518 47.892,18.694 C47.8824398,18.7964955 47.8751047,18.8991863 47.87,19.002 L40.4,19.002 C40.41,19.331 40.494,19.653 40.643,19.946 C40.9335048,20.5226678 41.4293868,20.9696751 42.033,21.199 C42.352,21.321 42.69,21.383 43.031,21.38 C43.696,21.38 44.216,21.232 44.591,20.935 C44.966,20.637 45.25,20.24 45.408,19.788 L47.765,20.489 L47.765,20.49 Z M45.129,17.072 C45.1140567,16.8140279 45.0601111,16.5598092 44.969,16.318 C44.877094,16.0704952 44.732411,15.8459636 44.545,15.66 C44.3375251,15.4581932 44.092138,15.2994733 43.823,15.193 C43.4948148,15.0659561 43.1448214,15.0047922 42.793,15.013 C42.4578652,15.0063017 42.1251482,15.0710725 41.817,15.203 C41.5484578,15.3209231 41.3037612,15.4869914 41.095,15.693 C40.7211025,16.0618034 40.4943052,16.5541454 40.457,17.078 L45.129,17.072 Z M51.547,23.377 C51.632,23.93 51.913,24.434 52.337,24.799 C52.762,25.166 53.314,25.35 53.993,25.351 C54.883,25.351 55.57,25.121 56.051,24.661 C56.533,24.202 56.773,23.463 56.773,22.444 L56.773,21.679 C56.5071406,22.0671831 56.1500145,22.3841325 55.733,22.602 C55.253,22.878 54.63,23.016 53.866,23.016 C53.2025774,23.0218753 52.545009,22.8915188 51.934,22.633 C51.3539325,22.3885874 50.8301448,22.0278239 50.395,21.573 C49.9559677,21.1087323 49.6100527,20.5645698 49.376,19.97 C48.8847593,18.6859906 48.8812016,17.2664556 49.366,15.98 C49.596,15.382 49.934,14.831 50.363,14.356 C50.7901093,13.8886112 51.30888,13.5141704 51.887,13.256 C52.5093648,12.981101 53.1836913,12.8436434 53.864,12.853 C54.698,12.853 55.357,13.001 55.84,13.298 C56.324,13.595 56.656,13.92 56.838,14.274 L56.838,13.04 L59.554,13.04 L59.554,22.357 C59.556828,23.0582937 59.4529737,23.7559383 59.246,24.426 C58.8490479,25.7611735 57.869921,26.8454168 56.582,27.376 C55.889,27.68 55.055,27.832 54.078,27.832 C53.4110577,27.840793 52.7474113,27.7370032 52.115,27.525 C51.5574022,27.3376123 51.0351644,27.0580715 50.57,26.698 C50.1436972,26.3649373 49.7840721,25.9544219 49.51,25.488 C49.2488764,25.0503587 49.0756407,24.5659781 49,24.062 L51.547,23.377 Z M54.349,20.597 C55.0156534,20.6192204 55.6601759,20.3562465 56.121,19.874 C56.581,19.394 56.811,18.749 56.811,17.942 C56.811,17.135 56.57,16.495 56.089,16.023 C55.6304516,15.5582987 55.0017647,15.3014042 54.349,15.312 C54.0115608,15.3088502 53.676604,15.3699366 53.362,15.492 C53.0638143,15.6093361 52.7941313,15.7890111 52.571,16.019 C52.341,16.261 52.161,16.546 52.044,16.857 C51.9130221,17.2024916 51.848228,17.5695451 51.853,17.939 C51.853,18.759 52.086,19.407 52.553,19.882 C53.0266572,20.3589011 53.6771945,20.6175223 54.349,20.596 L54.349,20.597 Z M63.417,23.377 C63.502,23.93 63.782,24.434 64.207,24.799 C64.632,25.166 65.183,25.35 65.862,25.351 C66.753,25.351 67.439,25.121 67.921,24.661 C68.402,24.202 68.643,23.463 68.643,22.444 L68.643,21.679 C68.3771406,22.0671831 68.0200145,22.3841325 67.603,22.602 C67.122,22.878 66.499,23.016 65.736,23.016 C65.0725774,23.0218753 64.415009,22.8915188 63.804,22.633 C63.2235749,22.3887065 62.6994371,22.0279363 62.264,21.573 C61.8253256,21.1086468 61.4797537,20.5644899 61.246,19.97 C60.7547593,18.6859906 60.7512016,17.2664556 61.236,15.98 C61.466,15.382 61.804,14.831 62.233,14.356 C63.1283903,13.3743857 64.4036198,12.8266092 65.732,12.853 C66.567,12.853 67.226,13.001 67.709,13.298 C68.192,13.595 68.524,13.92 68.706,14.274 L68.706,13.04 L71.422,13.04 L71.422,22.357 C71.424828,23.0582937 71.3209737,23.7559383 71.114,24.426 C70.7172639,25.7609662 69.7385386,26.8451718 68.451,27.376 C67.758,27.68 66.923,27.832 65.947,27.832 C65.2797227,27.8409057 64.6157288,27.7371144 63.983,27.525 C63.426104,27.3374086 62.904557,27.0578757 62.44,26.698 C62.0136972,26.3649373 61.6540721,25.9544219 61.38,25.488 C61.1188764,25.0503587 60.9456407,24.5659781 60.87,24.062 L63.417,23.377 Z M66.218,20.597 C66.8849975,20.6195082 67.5299409,20.3565109 67.991,19.874 C68.451,19.394 68.68,18.749 68.68,17.942 C68.68,17.135 68.44,16.495 67.958,16.023 C67.4992104,15.5580454 66.8701099,15.3011296 66.217,15.312 C65.880311,15.3105052 65.546399,15.372944 65.233,15.496 C64.9348143,15.6133361 64.6651313,15.7930111 64.442,16.023 C64.212,16.264 64.032,16.55 63.915,16.861 C63.7840221,17.2064916 63.719228,17.5735451 63.724,17.943 C63.724,18.763 63.957,19.411 64.424,19.886 C64.8976169,20.3606602 65.5468188,20.617734 66.217,20.596 L66.218,20.596 L66.218,20.597 Z M75.626,23.482 L73.097,23.482 L73.097,8.116 L75.627,8.116 L75.627,13.915 C75.966,13.505 76.414,13.199 76.92,13.035 C77.4121188,12.8638746 77.9289902,12.7746889 78.45,12.771 C79.0428626,12.7574774 79.6318428,12.8699563 80.178,13.101 C80.641,13.301 81.054,13.601 81.388,13.981 C81.715,14.365 81.958,14.814 82.099,15.298 C82.2569685,15.8209963 82.3358407,16.3646749 82.333,16.911 L82.3330741,23.482 L79.51,23.482 L79.51,17.392 C79.5292192,16.8595094 79.3685903,16.3360564 79.054,15.906 C78.75,15.51 78.258,15.312 77.579,15.312 C76.985,15.312 76.518,15.506 76.179,15.895 C75.8329711,16.3001007 75.6376069,16.8123577 75.626,17.345 L75.626,23.482 Z M93.641,20.49 C93.5108902,20.9478882 93.3065068,21.3813162 93.036,21.773 C92.761,22.178 92.42,22.533 92.028,22.827 C91.6061716,23.1378636 91.1367537,23.3783136 90.638,23.539 C90.072009,23.7205941 89.480363,23.8094086 88.886,23.802 C88.1830701,23.8053911 87.4854961,23.6796379 86.828,23.431 C86.1879617,23.1882442 85.6048295,22.8161698 85.115,22.338 C84.606,21.838 84.205,21.238 83.937,20.576 C83.6364756,19.8274932 83.4885791,19.026472 83.502,18.22 C83.4908592,17.4426566 83.6350092,16.67091 83.926,15.95 C84.1870665,15.3041617 84.5731203,14.7162453 85.062,14.22 C85.5328266,13.7476736 86.0917044,13.3722572 86.707,13.115 C87.3178126,12.8544061 87.9749211,12.7197193 88.639,12.719 C90.266,12.719 91.532,13.203 92.438,14.169 C93.344,15.135 93.794,16.456 93.79,18.132 C93.79,18.33 93.783,18.518 93.769,18.694 C93.7597736,18.7965027 93.7527719,18.8991936 93.748,19.002 L86.276,19.002 C86.286,19.331 86.37,19.653 86.519,19.946 C86.8095048,20.5226678 87.3053868,20.9696751 87.909,21.199 C88.229,21.321 88.566,21.383 88.907,21.38 C89.572,21.38 90.093,21.232 90.467,20.935 C90.843,20.637 91.126,20.24 91.285,19.788 L93.641,20.489 L93.641,20.49 Z M91.009,17.078 C90.9940567,16.8200279 90.9401111,16.5658092 90.849,16.324 C90.7576451,16.0758709 90.6132933,15.8506413 90.426,15.664 C90.2181416,15.4624415 89.9724112,15.3040593 89.703,15.198 C89.3751272,15.0710855 89.0254863,15.0099239 88.674,15.018 C88.0405248,15.0064039 87.4289918,15.2500081 86.977,15.694 C86.604566,16.0616886 86.3782221,16.5520412 86.34,17.074 L91.01,17.078 L91.009,17.078 Z M94.727,20.636 C94.7045605,19.8101791 95.0364873,19.0142098 95.639,18.449 C95.926,18.179 96.26,17.962 96.626,17.813 C97.0180123,17.6524669 97.4274633,17.5383576 97.846,17.473 L100.415,17.091 C100.712,17.049 100.917,16.961 101.03,16.827 C101.142946,16.6936624 101.203388,16.5237117 101.2,16.349 C101.201061,15.9822079 101.042237,15.633161 100.765,15.393 C100.475,15.124 100.033,14.99 99.438,14.99 C98.815,14.99 98.338,15.16 98.006,15.499 C97.6842365,15.8154938 97.4848058,16.2356089 97.443,16.685 L94.939,16.158 C94.987637,15.7272638 95.117245,15.3096005 95.321,14.927 C95.54,14.507 95.835,14.133 96.191,13.822 C96.5927804,13.4790476 97.0531594,13.2114248 97.55,13.032 C98.1483322,12.8161986 98.7810448,12.7114808 99.417,12.723 C100.131128,12.7061363 100.842463,12.8179176 101.517,13.053 C102.043905,13.2366549 102.525609,13.530518 102.93,13.915 C103.289,14.268 103.56,14.701 103.721,15.177 C103.884,15.663 103.967,16.171 103.965,16.683 L103.965,21.823 C103.965,22.106 103.979,22.406 104.007,22.724 C104.035,23.042 104.064,23.294 104.093,23.478 L101.498,23.478 C101.46283,23.2848086 101.438128,23.0898576 101.424,22.894 C101.403974,22.6718803 101.393298,22.4490168 101.392,22.226 C101.091,22.667 100.696,23.036 100.235,23.308 C99.733,23.619 99.093,23.775 98.315,23.775 C97.8037652,23.7828325 97.2957156,23.6932366 96.818,23.511 C96.3988108,23.3509213 96.0134517,23.1134641 95.682,22.811 C95.0747712,22.2505541 94.7286781,21.4623314 94.727,20.636 Z M98.908,21.676 C99.198,21.676 99.488,21.638 99.768,21.559 C100.040234,21.4839459 100.29099,21.345893 100.5,21.156 C100.722901,20.9493464 100.896805,20.6954941 101.009,20.413 C101.148,20.043 101.213,19.65 101.2,19.256 L101.2,18.791 L98.844,19.151 C98.5058138,19.1957638 98.1864791,19.3327698 97.921,19.547 C97.674,19.752 97.55,20.059 97.55,20.47 C97.55,20.782 97.672,21.083 97.89,21.308 C98.115,21.555 98.455,21.678 98.908,21.678 L98.908,21.675 L98.908,21.676 Z M115.837,21.594 C115.837,21.945 115.844,22.297 115.858,22.648 C115.872,22.999 115.893,23.278 115.922,23.486 L113.232,23.486 C113.195296,23.3183026 113.170567,23.1482067 113.158,22.977 C113.136534,22.7442857 113.125856,22.5107022 113.126,22.277 C112.854026,22.7167834 112.469412,23.0758493 112.012,23.317 C111.453925,23.613025 110.828447,23.7587976 110.197,23.74 C109.489248,23.7487938 108.787613,23.608058 108.138,23.327 C107.529614,23.0609925 106.983845,22.6702328 106.536,22.18 C106.07709,21.6723952 105.719348,21.0818155 105.482,20.44 C104.976536,19.0380797 104.973002,17.5042348 105.472,16.1 C105.701885,15.4633733 106.05075,14.8762758 106.5,14.37 C107.724794,13.0706201 109.547049,12.5186523 111.287,12.92 C111.585,12.99 111.874,13.095 112.147,13.232 C112.362014,13.3417803 112.559234,13.483374 112.732,13.652 C112.865,13.778 112.976,13.924 113.062,14.086 L113.062,8.116 L115.837,8.116 L115.837,21.594 Z M107.942,18.24 C107.942,19.174 108.186,19.903 108.675,20.426 C109.156096,20.9275626 109.821005,21.2111234 110.516,21.2111234 C111.210995,21.2111234 111.875904,20.9275626 112.357,20.426 C112.852,19.899 113.1,19.163 113.1,18.219 C113.1,17.285 112.852,16.567 112.357,16.064 C111.870289,15.5796687 111.211058,15.308605 110.524428,15.3104806 C109.837798,15.3123561 109.180058,15.587017 108.696,16.074 C108.196,16.585 107.946,17.307 107.946,18.24 L107.942,18.24 Z M117.287,22.386 C117.281761,22.0991148 117.393709,21.8224932 117.597,21.62 C117.794117,21.4121161 118.069569,21.2967092 118.356,21.302 C118.954,21.302 119.439,21.787 119.439,22.386 C119.444,22.672 119.329,22.948 119.121,23.145 C118.918749,23.3480382 118.64254,23.4599659 118.356,23.455 C118.0716,23.4588034 117.797734,23.347504 117.596615,23.1463848 C117.395496,22.9452655 117.284197,22.6714001 117.288,22.387 L117.287,22.386 Z M120.837,11.004 C120.837,10.1532053 121.526705,9.4635 122.3775,9.4635 C123.228295,9.4635 123.918,10.1532053 123.918,11.004 C123.918,11.8545185 123.228519,12.544 122.378,12.544 C121.527481,12.544 120.838,11.8545185 120.838,11.004 L120.837,11.004 Z M121.082,23.47 L121.082,13.614 L123.673,13.614 L123.673,23.469 L121.083,23.47 L121.082,23.47 Z M125.024,18.527 C125.024,15.732 126.982,13.365 130.227,13.365 C133.491,13.365 135.449,15.737 135.449,18.527 C135.449,21.317 133.491,23.71 130.227,23.71 C126.982,23.714 125.024,21.328 125.024,18.527 Z M132.757,18.527 C132.757,16.997 131.859,15.67 130.227,15.67 C128.615,15.67 127.723,16.996 127.723,18.527 C127.723,20.078 128.62,21.404 130.227,21.404 C131.858,21.409 132.757,20.082 132.757,18.527 Z"
          />
        </g>
      </svg>
      </Link>
      <Link className="link" to="/instructors">
        Instructors
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
