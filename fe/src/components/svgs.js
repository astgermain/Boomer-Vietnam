import * as React from "react";
import "../styles/svg.css";
export default function SVG({ name, color }) {
  //check, world, clipboard, building
  let r = "";
  if (color == "white") {
    r = "svgWhite";
  } else {
    r = "svgBlack";
  }
  const svg = {
    check: (
      <>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="48px"
          height="48px"
          className={r}
        >
          <defs></defs>
          <path
            className="cls-1"
            d="M109.74,241.05a5,5,0,0,1-3-9l87.9-65.79a5,5,0,0,1,6.59.53l40.17,41.65,140.51-99.6A5,5,0,0,1,387.7,117l-144,102.08a5,5,0,0,1-6.49-.61L197.1,176.91l-84.36,63.15A5,5,0,0,1,109.74,241.05Z"
          />
          <path
            className="cls-1"
            d="M382.32,149.29l-.41,0a5,5,0,0,1-4.58-5.38l2.09-26.4-23.64-1.88a5,5,0,0,1,.79-10l28.63,2.28a5,5,0,0,1,4.59,5.38l-2.5,31.38A5,5,0,0,1,382.32,149.29Z"
          />
          <path
            className="cls-1"
            d="M411,397.72H89a5,5,0,0,1,0-10H411a5,5,0,0,1,0,10Z"
          />
          <rect
            className="cls-1"
            x="326.41"
            y="207.16"
            width="63.31"
            height="185.56"
          />
          <path
            className="cls-1"
            d="M389.71,397.72h-63.3a5,5,0,0,1-5-5V207.16a5,5,0,0,1,5-5h63.3a5,5,0,0,1,5,5V392.72A5,5,0,0,1,389.71,397.72Zm-58.3-10h53.3V212.16h-53.3Z"
          />
          <rect
            className="cls-1"
            x="217.8"
            y="281.93"
            width="63.85"
            height="110.24"
          />
          <path
            className="cls-1"
            d="M281.65,397.17H217.8a5,5,0,0,1-5-5V281.93a5,5,0,0,1,5-5h63.85a5,5,0,0,1,5,5V392.17A5,5,0,0,1,281.65,397.17Zm-58.85-10h53.85V286.93H222.8Z"
          />
          <rect
            className="cls-1"
            x="109.74"
            y="327.23"
            width="63.85"
            height="65.49"
          />
          <path
            className="cls-1"
            d="M173.59,397.72H109.74a5,5,0,0,1-5-5V327.23a5,5,0,0,1,5-5h63.85a5,5,0,0,1,5,5v65.49A5,5,0,0,1,173.59,397.72Zm-58.85-10h53.85V332.23H114.74Z"
          />
        </svg>
      </>
    ),
    building: (
      <>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="48px"
          height="48px"
          className={r}
        >
          <defs></defs>
          <path
            className="cls-1"
            d="M411.83,140.64l39.72,106.5-76.14,36.33-48.82-46.68s-56.28-19.45-58.35-60.41l-21.52,3.72s-34.4,35.59-52.58,15.31,40.69-67.66,70.79-61.65l73.66,35.58Z"
          />
          <path
            className="cls-1"
            d="M231.29,141.43c-38.19-3.92-74.1,18.81-74.1,18.81l-44.12-27L51.83,226.86l81.93,58.2"
          />
          <path
            className="cls-1"
            d="M166.66,284.07s-21.52-21.62-33,2.17,2.37,30.92,14.27,32.67"
          />
          <path
            className="cls-1"
            d="M197.59,294.52s-13.35-39-41.07,2.74,20.53,42.26,20.53,42.26"
          />
          <path
            className="cls-1"
            d="M224.59,308.56s-17-29.66-34.55-7.22-15.67,47.34-.42,53.28c8,3.1,17.78-.45,17.78-.45"
          />
          <path
            className="cls-1"
            d="M241.86,326.38s-8-29.4-29.48-11-4.19,44,3.47,47.65c7.88,3.72,19,6.31,24.05-3.1S241.86,326.38,241.86,326.38Z"
          />
          <path
            className="cls-1"
            d="M242.8,349.55S250.68,358,271.55,367c20.38,8.8,22.35-14.58,22.35-14.58,16.13,16.14,34.55-6,31-18.42,10.76,9.42,33.21-7.82,28-23.37,17.48,9.51,37.55-9.63,22.44-27.19"
          />
          <line
            className="cls-1"
            x1="257.17"
            y1="314.28"
            x2="293.9"
            y2="352.45"
          />
          <line
            className="cls-1"
            x1="324.93"
            y1="334.03"
            x2="278.69"
            y2="285.83"
          />
          <line
            className="cls-1"
            x1="352.97"
            y1="310.66"
            x2="302.9"
            y2="263.59"
          />
        </svg>
      </>
    ),
    world: (
      <>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="48px"
          height="48px"
          className={r}
        >
          <defs></defs>
          <polyline
            className="cls-1"
            points="100 350.26 100 256 405 256 381.29 348.01"
          />
          <rect className="cls-1" x="226.5" y="222" width="74" height="34" />
          <rect className="cls-1" x="300.5" y="222" width="74" height="34" />
          <rect className="cls-1" x="261.5" y="188" width="74" height="34" />
          <rect
            className="cls-1"
            x="83.53"
            y="186.14"
            width="105.73"
            height="34"
            transform="translate(339.53 66.74) rotate(90)"
          />
          <path
            className="cls-1"
            d="M435,328.68c0,13.43-28.68,24.32-64,24.32s-64.06-10.89-64.06-24.32c0,13.43-28.67,24.32-64.05,24.32s-64.05-10.89-64.05-24.32c0,13.43-28.68,24.32-64.06,24.32s-64-10.89-64-24.32"
          />
        </svg>
      </>
    ),
    clipboard: (
      <>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="48px"
          height="48px"
          className={r}
        >
          <defs></defs>
          <rect
            className="cls-1"
            x="101.69"
            y="177.78"
            width="297.35"
            height="209.48"
          />
          <polygon
            className="cls-1"
            points="399.05 177.78 101.69 177.78 139.26 110.63 360.95 110.63 399.05 177.78"
          />
          <rect
            className="cls-2"
            x="203.28"
            y="175.66"
            width="94.18"
            height="97.88"
          />
          <polygon
            className="cls-2"
            points="216.45 110.63 282.12 110.63 297.46 176.4 203.28 176.4 216.45 110.63"
          />
          <rect
            className="cls-2"
            x="133.09"
            y="302.39"
            width="78.2"
            height="56.87"
          />
        </svg>
      </>
    ),
  };
  if (name == "world") {
    return svg.world;
  } else if (name == "building") {
    return svg.building;
  } else if (name == "clipboard") {
    return svg.clipboard;
  } else {
    return svg.check;
  }
}
