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
            d="M375.42,288.47a5,5,0,0,1-3.46-1.38l-48.07-45.95c-7.86-2.92-54-21.55-60.05-58.92l-14.71,2.54c-4.94,4.81-24.07,22.21-41.56,21.89a22.78,22.78,0,0,1-17.15-7.9c-3.59-4-8.39-12.91-.11-27.41,6.25-11,18.7-22.69,33.29-31.35,15.69-9.31,31.11-13.37,42.31-11.13a4.71,4.71,0,0,1,1.2.4l71.68,34.63L410,136a5,5,0,0,1,6.51,2.91l39.73,106.5a5,5,0,0,1-2.53,6.26L377.57,288A5,5,0,0,1,375.42,288.47ZM268.24,171.38a5,5,0,0,1,5,4.75c1.88,37.16,54.46,55.75,55,55.94a4.89,4.89,0,0,1,1.82,1.11l46.34,44.29,68.89-32.87-36.35-97.45L340.41,174a5,5,0,0,1-4-.15l-73.05-35.3c-19.49-3.3-53.64,18.94-64.37,37.74-3.94,6.91-4.32,12.22-1.12,15.79a13,13,0,0,0,9.88,4.58h.33c12.82,0,29.62-14.43,35-20a5,5,0,0,1,2.74-1.45l21.52-3.73A4.88,4.88,0,0,1,268.24,171.38Z"
          />
          <path
            className="cls-1"
            d="M133.75,290.06a5,5,0,0,1-2.89-.92l-81.93-58.2a5,5,0,0,1-1.29-6.81l61.24-93.63a5,5,0,0,1,6.8-1.53l41.55,25.43c9.3-5.3,40.78-21.41,74.57-17.94a5,5,0,1,1-1,9.94c-35.95-3.68-70.57,17.85-70.92,18.07a5,5,0,0,1-5.28,0L114.6,140,58.65,225.57l78,55.41a5,5,0,0,1-2.9,9.08Z"
          />
          <path
            className="cls-1"
            d="M147.93,323.92a4.49,4.49,0,0,1-.73-.06c-10-1.48-17.08-5.69-20.52-12.19-3.77-7.11-2.94-16.39,2.47-27.6,3.85-8,9.22-12.6,16-13.74,12.43-2.09,23.83,8.95,25.09,10.21a5,5,0,0,1-7.08,7.06h0c-2.43-2.42-10.11-8.48-16.37-7.4-3.34.57-6.24,3.33-8.59,8.21-2.72,5.63-5.38,13.42-2.65,18.58,2.4,4.51,8.47,6.29,13.15,7a5,5,0,0,1-.73,9.95Z"
          />
          <path
            className="cls-1"
            d="M177.05,344.52H177c-1,0-24-.43-31.66-14.95-4.8-9.05-2.44-20.85,7-35.08,10.4-15.66,20.25-22.66,30.14-21.38,13.27,1.71,19.2,17.94,19.83,19.79a5,5,0,0,1-9.46,3.24c-1.18-3.39-5.57-12.34-11.67-13.11-5.48-.69-12.77,5.34-20.51,17-5,7.51-10.17,17.92-6.51,24.85,4.06,7.7,17.94,9.57,22.94,9.64a5,5,0,0,1-.06,10Z"
          />
          <path
            className="cls-1"
            d="M197.13,360.91a25.64,25.64,0,0,1-9.32-1.63c-6.93-2.7-11.94-8.55-14.11-16.46-3.65-13.33,1-30,12.4-44.56,5.74-7.32,12.23-10.77,19.26-10.26,13.42,1,22.57,16.33,23.57,18.08a5,5,0,0,1-8.68,5c-2-3.47-8.72-12.59-15.63-13.08-3.5-.25-7.09,1.92-10.65,6.46-11.15,14.24-12.8,27.8-10.62,35.75.92,3.38,3.08,7.83,8.09,9.78s12,.31,14.27-.49a5,5,0,0,1,3.39,9.4A37.78,37.78,0,0,1,197.13,360.91Z"
          />
          <path
            className="cls-1"
            d="M228.61,371.33a35.38,35.38,0,0,1-14.9-3.81C208,364.8,199,354,197.28,340.88c-1.05-7.87.15-19.34,11.85-29.33,7.47-6.37,14.63-8.56,21.29-6.5,11.5,3.55,15.81,18.35,16.27,20a5,5,0,0,1,.13.67c.34,2.63,3.15,26-2.52,36.53C241.07,368.26,235.56,371.33,228.61,371.33Zm-3.1-57c-2.8,0-6.11,1.62-9.88,4.84-6.65,5.67-9.49,12.53-8.44,20.4,1.3,9.73,8.16,17.67,10.8,18.92,6.18,2.92,14.23,5.13,17.5-1,3.09-5.74,2.55-21.36,1.46-30.14-.94-3.14-4.36-11.22-9.5-12.79A6.55,6.55,0,0,0,225.51,314.32Z"
          />
          <path
            className="cls-1"
            d="M279.94,374a26.22,26.22,0,0,1-10.37-2.41C248,362.31,239.49,353.33,239.14,353a5,5,0,0,1,7.31-6.83c.16.17,7.8,8,27.08,16.31,4.25,1.83,7.58,2.06,9.91.68,3.87-2.3,5.26-8.8,5.48-11.11a5,5,0,0,1,8.51-3.1c4.56,4.56,9.33,5.43,14.17,2.58,6.21-3.64,9.74-11.78,8.52-16.09a5,5,0,0,1,8.1-5.13c3.2,2.8,8.46,1,12-1.31,5.52-3.67,10-10.59,8-16.73a5,5,0,0,1,7.14-6,14.15,14.15,0,0,0,17.88-3c3.81-4.73,3.21-10.9-1.62-16.52a5,5,0,0,1,7.59-6.52c8,9.29,8.69,20.8,1.8,29.32a24,24,0,0,1-22.42,8.32c-1,8.09-6.61,15.3-12.83,19.44-5.26,3.49-10.87,4.91-15.85,4.22a29.1,29.1,0,0,1-13.24,18.61,20,20,0,0,1-19.67.75c-1.45,3.85-4,8.17-8.4,10.81A16.49,16.49,0,0,1,279.94,374Z"
          />
          <path
            className="cls-1"
            d="M293.9,357.45a5,5,0,0,1-3.61-1.53l-36.72-38.18a5,5,0,1,1,7.21-6.93L297.5,349a5,5,0,0,1-3.6,8.47Z"
          />
          <path
            class="cls-1"
            d="M324.93,339a5,5,0,0,1-3.61-1.53l-46.24-48.21a5,5,0,0,1,7.22-6.92l46.24,48.2a5,5,0,0,1-3.61,8.46Z"
          />
          <path
            className="cls-1"
            d="M353,315.66a5,5,0,0,1-3.42-1.36l-50.07-47.07a5,5,0,0,1,6.85-7.29L356.39,307a5,5,0,0,1-3.43,8.65Z"
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
          <path
            className="cls-1"
            d="M100,355.26a5,5,0,0,1-5-5V256a5,5,0,0,1,5-5H405a5,5,0,0,1,4.84,6.25l-23.71,92a5,5,0,1,1-9.69-2.49L398.55,261H105v89.26A5,5,0,0,1,100,355.26Z"
          />
          <path
            className="cls-1"
            d="M300.5,261h-74a5,5,0,0,1-5-5V222a5,5,0,0,1,5-5h74a5,5,0,0,1,5,5v34A5,5,0,0,1,300.5,261Zm-69-10h64V227h-64Z"
          />
          <path
            className="cls-1"
            d="M374.5,261h-74a5,5,0,0,1-5-5V222a5,5,0,0,1,5-5h74a5,5,0,0,1,5,5v34A5,5,0,0,1,374.5,261Zm-69-10h64V227h-64Z"
          />
          <path
            className="cls-1"
            d="M335.5,227h-74a5,5,0,0,1-5-5V188a5,5,0,0,1,5-5h74a5,5,0,0,1,5,5v34A5,5,0,0,1,335.5,227Zm-69-10h64V193h-64Z"
          />
          <path
            className="cls-1"
            d="M153.39,261h-34a5,5,0,0,1-5-5V150.27a5,5,0,0,1,5-5h34a5,5,0,0,1,5,5V256A5,5,0,0,1,153.39,261Zm-29-10h24V155.27h-24Z"
          />
          <path
            className="cls-1"
            d="M370.91,358c-25.93,0-53.11-6.16-64.06-17.79C295.91,351.84,268.72,358,242.8,358s-53.11-6.16-64.05-17.79C167.8,351.84,140.62,358,114.69,358c-33.47,0-69-10.28-69-29.32a5,5,0,0,1,10,0c0,8.07,22.46,19.32,59.05,19.32s59.06-11.25,59.06-19.32a5,5,0,0,1,10,0c0,8.07,22.46,19.32,59.05,19.32s59.05-11.25,59.05-19.32a5,5,0,1,1,10,0c0,8.07,22.47,19.32,59.06,19.32s59-11.25,59-19.32a5,5,0,0,1,10,0C440,347.72,404.38,358,370.91,358Z"
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
          <path
            className="cls-1"
            d="M399.05,392.26H101.69a5,5,0,0,1-5-5V177.78a5,5,0,0,1,5-5H399.05a5,5,0,0,1,5,5V387.26A5,5,0,0,1,399.05,392.26Zm-292.36-10H394.05V182.78H106.69Z"
          />
          <path
            className="cls-1"
            d="M399.05,182.78H101.69a5,5,0,0,1-4.36-7.44l37.57-67.15a5,5,0,0,1,4.36-2.56H361a5,5,0,0,1,4.35,2.53l38.1,67.15a5,5,0,0,1-4.35,7.47Zm-288.83-10H390.46L358,115.63H142.19Z"
          />
          <rect
            className="cls-1"
            x="203.28"
            y="175.66"
            width="94.18"
            height="97.88"
          />
          <path
            className="cls-1"
            d="M297.46,278.54H203.28a5,5,0,0,1-5-5V175.66a5,5,0,0,1,5-5h94.18a5,5,0,0,1,5,5v97.88A5,5,0,0,1,297.46,278.54Zm-89.18-10h84.18V180.66H208.28Z"
          />
          <polygon
            className="cls-1"
            points="216.45 110.63 282.12 110.63 297.46 176.4 203.28 176.4 216.45 110.63"
          />
          <path
            className="cls-1"
            d="M297.46,181.4H203.28a5,5,0,0,1-4.9-6l13.17-65.77a5,5,0,0,1,4.9-4h65.67a5,5,0,0,1,4.87,3.86l15.34,65.77a5,5,0,0,1-4.87,6.14Zm-88.08-10h81.78l-13-55.77h-57.6Z"
          />
          <rect
            className="cls-1"
            x="133.09"
            y="302.39"
            width="78.2"
            height="56.87"
          />
          <path
            className="cls-1"
            d="M211.28,364.26H133.09a5,5,0,0,1-5-5V302.39a5,5,0,0,1,5-5h78.19a5,5,0,0,1,5,5v56.87A5,5,0,0,1,211.28,364.26Zm-73.19-10h68.19V307.39H138.09Z"
          />
        </svg>
      </>
    ),
    p1: (
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
            d="M432.66,372.05H72.34a5,5,0,0,1-5-5V138a5,5,0,0,1,5-5H432.66a5,5,0,0,1,5,5v229.1A5,5,0,0,1,432.66,372.05Zm-355.32-10H427.66V143H77.34Z"
          />
          <rect
            className="cls-1"
            x="72.34"
            y="138"
            width="170.37"
            height="109.48"
          />
          <path
            className="cls-1"
            d="M242.71,252.54H72.34a5,5,0,0,1-5-5.06V138a5,5,0,0,1,5-5.05H242.71a5,5,0,0,1,5,5.05V247.48A5,5,0,0,1,242.71,252.54ZM77.34,242.43H237.71V143.06H77.34Z"
          />
          <rect
            className="cls-1"
            x="242.71"
            y="233.54"
            width="189.95"
            height="19"
          />
          <rect
            className="cls-1"
            x="242.71"
            y="195.89"
            width="189.95"
            height="19"
          />
          <rect
            className="cls-1"
            x="242.71"
            y="158.25"
            width="189.95"
            height="19"
          />
          <rect
            className="cls-1"
            x="72.34"
            y="346.46"
            width="360.32"
            height="19"
          />
          <rect
            className="cls-1"
            x="72.34"
            y="308.82"
            width="360.32"
            height="19"
          />
          <rect
            className="cls-1"
            x="72.34"
            y="271.18"
            width="360.32"
            height="19"
          />
          <path
            className="cls-1"
            d="M91.83,162.34a2.74,2.74,0,0,1-1.27-.31l-3.22-1.69L84.13,162a2.77,2.77,0,0,1-2.89-.21,2.72,2.72,0,0,1-1.08-2.67l.61-3.58L78.17,153a2.74,2.74,0,0,1,1.51-4.67l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52A2.74,2.74,0,0,1,96.52,153l-2.61,2.54.62,3.58a2.75,2.75,0,0,1-1.09,2.67A2.71,2.71,0,0,1,91.83,162.34Z"
          />
          <path
            className="cls-1"
            d="M137.49,162.34a2.75,2.75,0,0,1-1.28-.31L133,160.34,129.78,162a2.74,2.74,0,0,1-4-2.88l.61-3.58-2.6-2.54a2.74,2.74,0,0,1,1.52-4.67l3.59-.52,1.61-3.26a2.74,2.74,0,0,1,4.91,0l1.61,3.26,3.59.52a2.74,2.74,0,0,1,1.52,4.67l-2.6,2.54.61,3.58a2.73,2.73,0,0,1-2.69,3.19Z"
          />
          <path
            className="cls-1"
            d="M113.28,186.9a2.72,2.72,0,0,1-1.27-.32l-3.22-1.69-3.22,1.69a2.71,2.71,0,0,1-2.88-.21,2.75,2.75,0,0,1-1.09-2.67l.62-3.58-2.6-2.54a2.73,2.73,0,0,1,1.51-4.67l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.73,2.73,0,0,1,1.51,4.67l-2.6,2.54.62,3.58a2.75,2.75,0,0,1-2.7,3.2Z"
          />
          <path
            className="cls-1"
            d="M159.58,186.9a2.72,2.72,0,0,1-1.27-.32l-3.22-1.69-3.22,1.69a2.71,2.71,0,0,1-2.88-.21,2.75,2.75,0,0,1-1.09-2.67l.62-3.58-2.6-2.54a2.73,2.73,0,0,1,1.51-4.67l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.74,2.74,0,0,1,1.51,4.67l-2.6,2.54.62,3.58a2.75,2.75,0,0,1-2.7,3.2Z"
          />
          <path
            className="cls-1"
            d="M205.88,186.9a2.72,2.72,0,0,1-1.27-.32l-3.22-1.69-3.22,1.69a2.71,2.71,0,0,1-2.88-.21,2.75,2.75,0,0,1-1.09-2.67l.62-3.58-2.61-2.54a2.74,2.74,0,0,1,1.52-4.67l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.74,2.74,0,0,1,1.51,4.67l-2.6,2.54.61,3.58a2.74,2.74,0,0,1-2.69,3.2Z"
          />
          <path
            className="cls-1"
            d="M183.14,162.34a2.74,2.74,0,0,1-1.27-.31l-3.22-1.69L175.44,162a2.77,2.77,0,0,1-2.89-.21,2.72,2.72,0,0,1-1.08-2.67l.61-3.58-2.6-2.54a2.74,2.74,0,0,1,1.51-4.67l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.74,2.74,0,0,1,1.52,4.67l-2.61,2.54.62,3.58a2.75,2.75,0,0,1-1.09,2.67A2.71,2.71,0,0,1,183.14,162.34Z"
          />
          <path
            className="cls-1"
            d="M228.8,162.34a2.75,2.75,0,0,1-1.28-.31l-3.21-1.69L221.09,162a2.74,2.74,0,0,1-4-2.88l.62-3.58L215.13,153a2.74,2.74,0,0,1,1.52-4.67l3.6-.52,1.6-3.26a2.74,2.74,0,0,1,4.91,0l1.61,3.26,3.59.52a2.74,2.74,0,0,1,1.52,4.67l-2.6,2.54.61,3.58a2.73,2.73,0,0,1-2.69,3.19Z"
          />
          <path
            className="cls-1"
            d="M91.83,214.13a2.74,2.74,0,0,1-1.27-.31l-3.22-1.69-3.21,1.69a2.77,2.77,0,0,1-2.89-.21,2.73,2.73,0,0,1-1.08-2.68l.61-3.58-2.6-2.54a2.73,2.73,0,0,1,1.51-4.66l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.73,2.73,0,0,1,1.52,4.66l-2.61,2.54.62,3.58a2.73,2.73,0,0,1-2.7,3.2Z"
          />
          <path
            className="cls-1"
            d="M137.49,214.13a2.75,2.75,0,0,1-1.28-.31L133,212.13l-3.22,1.69a2.74,2.74,0,0,1-4-2.89l.61-3.58-2.6-2.54a2.73,2.73,0,0,1,1.52-4.66l3.59-.52,1.61-3.26a2.73,2.73,0,0,1,4.91,0l1.61,3.26,3.59.52a2.73,2.73,0,0,1,1.52,4.66l-2.6,2.54.61,3.58a2.72,2.72,0,0,1-1.09,2.68A2.75,2.75,0,0,1,137.49,214.13Z"
          />
          <path
            className="cls-1"
            d="M113.28,238.68a2.71,2.71,0,0,1-1.27-.31l-3.22-1.69-3.22,1.69a2.74,2.74,0,0,1-4-2.89l.62-3.58-2.6-2.53a2.73,2.73,0,0,1,1.51-4.67l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.73,2.73,0,0,1,1.51,4.67l-2.6,2.53.62,3.58a2.76,2.76,0,0,1-1.09,2.68A2.71,2.71,0,0,1,113.28,238.68Z"
          />
          <path
            className="cls-1"
            d="M159.58,238.68a2.71,2.71,0,0,1-1.27-.31l-3.22-1.69-3.22,1.69a2.74,2.74,0,0,1-4-2.89l.62-3.58-2.6-2.53a2.73,2.73,0,0,1,1.51-4.67l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.74,2.74,0,0,1,1.51,4.67l-2.6,2.53.62,3.58a2.76,2.76,0,0,1-1.09,2.68A2.71,2.71,0,0,1,159.58,238.68Z"
          />
          <path
            className="cls-1"
            d="M205.88,238.68a2.71,2.71,0,0,1-1.27-.31l-3.22-1.69-3.22,1.69a2.74,2.74,0,0,1-4-2.89l.62-3.58-2.61-2.53a2.74,2.74,0,0,1,1.52-4.67l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.74,2.74,0,0,1,1.51,4.67L208,231.9l.61,3.58a2.72,2.72,0,0,1-2.69,3.2Z"
          />
          <path
            className="cls-1"
            d="M183.14,214.13a2.74,2.74,0,0,1-1.27-.31l-3.22-1.69-3.21,1.69a2.77,2.77,0,0,1-2.89-.21,2.73,2.73,0,0,1-1.08-2.68l.61-3.58-2.6-2.54a2.73,2.73,0,0,1,1.51-4.66l3.6-.52,1.61-3.26a2.73,2.73,0,0,1,4.9,0l1.61,3.26,3.6.52a2.73,2.73,0,0,1,1.52,4.66l-2.61,2.54.62,3.58a2.73,2.73,0,0,1-2.7,3.2Z"
          />
          <path
            className="cls-1"
            d="M228.8,214.13a2.75,2.75,0,0,1-1.28-.31l-3.21-1.69-3.22,1.69a2.74,2.74,0,0,1-4-2.89l.62-3.58-2.61-2.54a2.73,2.73,0,0,1,1.52-4.66l3.6-.52,1.6-3.26a2.73,2.73,0,0,1,4.91,0l1.61,3.26,3.59.52a2.73,2.73,0,0,1,1.52,4.66l-2.6,2.54.61,3.58a2.72,2.72,0,0,1-1.09,2.68A2.75,2.75,0,0,1,228.8,214.13Z"
          />
        </svg>
      </>
    ),
    p2: (
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
            d="M277.61,417.39A166.39,166.39,0,0,1,160,369.06a5,5,0,0,1,7-7.11,156.43,156.43,0,0,0,110.62,45.44C364.4,407.39,435,336.78,435,250S364.4,92.61,277.61,92.61A156.56,156.56,0,0,0,168.1,137a5,5,0,0,1-7-7.18A166.52,166.52,0,0,1,277.61,82.61C369.91,82.61,445,157.7,445,250S369.91,417.39,277.61,417.39Z"
          />
          <path
            className="cls-1"
            d="M339.69,320.08a8,8,0,0,1-5.66-2.35L272,255.66a8,8,0,0,1-2.35-5.66V123.86a8,8,0,0,1,16,0V246.69l59.73,59.73a8,8,0,0,1-5.65,13.66Z"
          />
          <rect
            className="cls-1"
            x="60"
            y="170.76"
            width="133.16"
            height="23.3"
          />
          <path
            className="cls-1"
            d="M193.16,199.06H60a5,5,0,0,1-5-5v-23.3a5,5,0,0,1,5-5H193.16a5,5,0,0,1,5,5v23.3A5,5,0,0,1,193.16,199.06ZM65,189.06H188.16v-13.3H65Z"
          />
          <rect
            className="cls-1"
            x="60"
            y="237.34"
            width="133.16"
            height="23.3"
          />
          <path
            className="cls-1"
            d="M193.16,265.64H60a5,5,0,0,1-5-5v-23.3a5,5,0,0,1,5-5H193.16a5,5,0,0,1,5,5v23.3A5,5,0,0,1,193.16,265.64ZM65,255.64H188.16v-13.3H65Z"
          />
          <rect
            className="cls-1"
            x="60"
            y="303.92"
            width="133.16"
            height="23.3"
          />
          <path
            className="cls-1"
            d="M193.16,332.22H60a5,5,0,0,1-5-5v-23.3a5,5,0,0,1,5-5H193.16a5,5,0,0,1,5,5v23.3A5,5,0,0,1,193.16,332.22ZM65,322.22H188.16v-13.3H65Z"
          />
        </svg>
      </>
    ),
    p3: (
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
            d="M109.3,157.94h0a5,5,0,0,1-3.53-1.51l-9.56-9.79a5,5,0,1,1,7.15-7l6.06,6.2,16.86-16.59a5,5,0,1,1,7,7.13L112.8,156.5A5,5,0,0,1,109.3,157.94Z"
          />
          <path
            className="cls-1"
            d="M320,147.88H163.72a5,5,0,0,1,0-10H320a5,5,0,0,1,0,10Z"
          />
          <path
            className="cls-1"
            d="M109.3,211.5h0a5,5,0,0,1-3.53-1.51l-9.56-9.8a5,5,0,1,1,7.15-7l6.06,6.2,16.86-16.59a5,5,0,1,1,7,7.13L112.8,210.06A5,5,0,0,1,109.3,211.5Z"
          />
          <path
            className="cls-1"
            d="M320,201.44H163.72a5,5,0,1,1,0-10H320a5,5,0,0,1,0,10Z"
          />
          <path
            className="cls-1"
            d="M109.3,265.05h0a5,5,0,0,1-3.53-1.5l-9.56-9.8a5,5,0,1,1,7.15-7l6.06,6.2,16.86-16.59a5,5,0,1,1,7,7.13L112.8,263.62A5,5,0,0,1,109.3,265.05Z"
          />
          <path
            className="cls-1"
            d="M320,255H163.72a5,5,0,0,1,0-10H320a5,5,0,0,1,0,10Z"
          />
          <path
            className="cls-1"
            d="M109.3,318.61h0a5,5,0,0,1-3.53-1.5l-9.56-9.8a5,5,0,1,1,7.15-7l6.06,6.2,16.86-16.59a5,5,0,1,1,7,7.13L112.8,317.18A5,5,0,0,1,109.3,318.61Z"
          />
          <path
            className="cls-1"
            d="M320,308.56H163.72a5,5,0,1,1,0-10H320a5,5,0,0,1,0,10Z"
          />
          <path
            className="cls-1"
            d="M109.3,372.17h0a5,5,0,0,1-3.53-1.51l-9.56-9.79a5,5,0,1,1,7.15-7l6.06,6.2,16.86-16.59a5,5,0,1,1,7,7.13L112.8,370.74A5,5,0,0,1,109.3,372.17Z"
          />
          <path
            className="cls-1"
            d="M283.72,362.12h-120a5,5,0,0,1,0-10h120a5,5,0,0,1,0,10Z"
          />
          <path
            className="cls-1"
            d="M346.88,423.68H69a5,5,0,0,1-5-5V81.32a5,5,0,0,1,5-5h277.9a5,5,0,0,1,5,5v206a5,5,0,0,1-10,0v-201H74V413.68h267.9V350.23a5,5,0,0,1,10,0v68.45A5,5,0,0,1,346.88,423.68Z"
          />
          <path
            className="cls-1"
            d="M306.27,400.32a5,5,0,0,1-5-5.12l.79-32.95a5.09,5.09,0,0,1,.58-2.22l97.92-184.54a5,5,0,0,1,2.95-2.43,5,5,0,0,1,3.81.36l26,13.81a5,5,0,0,1,2.07,6.76L337.52,378.53a4.93,4.93,0,0,1-1.51,1.73l-26.83,19.13A5.06,5.06,0,0,1,306.27,400.32ZM312,363.67l-.53,21.77,17.73-12.64,95-179.08-17.2-9.12Zm21.07,12.52h0Z"
          />
          <path
            className="cls-1"
            d="M417.71,221.72a5.06,5.06,0,0,1-2.34-.58l-26-13.82a5,5,0,1,1,4.69-8.83l26,13.81a5,5,0,0,1-2.35,9.42Z"
          />
          <path
            className="cls-1"
            d="M334.09,379.33a5.06,5.06,0,0,1-2.34-.58l-26-13.82a5,5,0,0,1,4.69-8.83l26,13.81a5,5,0,0,1-2.35,9.42Z"
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
  } else if (name == "p1") {
    return svg.p1;
  } else if (name == "p2") {
    return svg.p2;
  } else if (name == "p3") {
    return svg.p3;
  } else {
    return svg.check;
  }
}
