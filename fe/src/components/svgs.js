import * as React from "react";

export default function SVG({ name }) {
  //check, world, clipboard, building
  const svg = {
    check: (
      <>
        <svg
          width="38px"
          height="38px"
          viewBox="0 0 37 29"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icons/filled/navigation/check_24px</title>
          <defs>
            <polygon
              id="path-check"
              points="11.75 22.6875 3.0625 14 0.104166667 16.9375 11.75 28.5833333 36.75 3.58333333 33.8125 0.645833333"
            ></polygon>
          </defs>
          <g
            id="Page-check"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Home-check" transform="translate(-452.000000, -778.000000)">
              <g
                id="icons/filled/navigation/check_24px"
                transform="translate(452.000000, 778.000000)"
              >
                <mask id="mask-check" fill="white">
                  <use href="#path-check"></use>
                </mask>
                <g id="icon/navigation/check_24px" fill-rule="nonzero"></g>
                <g id="Group-check" mask="url(#mask-check)">
                  <g transform="translate(-7.000000, -11.000000)" id="↳-Color-check">
                    <rect
                      id="↳-👉Icon-Style-check"
                      fill="#000000"
                      fill-rule="nonzero"
                      x="0"
                      y="0"
                      width="50"
                      height="50"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </>
    ),
    building: (
      <>
        <svg
          width="38px"
          height="38px"
          viewBox="0 0 38 38"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icons/filled/places/meeting_room_24px</title>
          <defs>
            <path
              d="M23.1666667,6.5 L23.1666667,37.75 L0.25,37.75 L0.25,33.5833333 L4.41666667,33.5833333 L4.41666667,0.25 L23.1666667,0.25 L23.1666667,2.33333333 L33.5833333,2.33333333 L33.5833333,33.5833333 L37.75,33.5833333 L37.75,37.75 L29.4166667,37.75 L29.4166667,6.5 L23.1666667,6.5 Z M14.8333333,16.9166667 L14.8333333,21.0833333 L19,21.0833333 L19,16.9166667 L14.8333333,16.9166667 Z"
              id="path-build"
            ></path>
          </defs>
          <g
            id="Page-build"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Home-build" transform="translate(-744.000000, -773.000000)">
              <rect
                id="Rectangle-Build"
                fill="#00A1C6"
                x="689"
                y="724"
                width="256"
                height="256"
              ></rect>
              <g
                id="icons/filled/places/meeting_room_24px"
                transform="translate(744.000000, 773.000000)"
              >
                <mask id="mask-build" fill="white">
                  <use href="#path-build"></use>
                </mask>
                <g id="icon/places/meeting_room_24px" fill-rule="nonzero"></g>
                <g id="Group-check" mask="url(#mask-build)">
                  <g transform="translate(-6.000000, -6.000000)" id="↳-Color-Build">
                    <rect
                      id="↳-👉Icon-Style-Build"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                      x="0"
                      y="0"
                      width="50"
                      height="50"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </>
    ),
    world: (
      <>
        <svg
          width="38px"
          height="38px"
          viewBox="0 0 43 42"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icons/filled/social/publicon/social/24px</title>
          <defs>
            <path
              d="M25,4.16666667 C13.5,4.16666667 4.16666667,13.5 4.16666667,25 C4.16666667,36.5 13.5,45.8333333 25,45.8333333 C36.5,45.8333333 45.8333333,36.5 45.8333333,25 C45.8333333,13.5 36.5,4.16666667 25,4.16666667 Z M22.9166667,41.5208333 C14.6875,40.5 8.33333333,33.5 8.33333333,25 C8.33333333,23.7083333 8.5,22.4791667 8.77083333,21.2708333 L18.75,31.25 L18.75,33.3333333 C18.75,35.625 20.625,37.5 22.9166667,37.5 L22.9166667,41.5208333 Z M37.2916667,36.2291667 C36.75,34.5416667 35.2083333,33.3333333 33.3333333,33.3333333 L31.25,33.3333333 L31.25,27.0833333 C31.25,25.9375 30.3125,25 29.1666667,25 L16.6666667,25 L16.6666667,20.8333333 L20.8333333,20.8333333 C21.9791667,20.8333333 22.9166667,19.8958333 22.9166667,18.75 L22.9166667,14.5833333 L27.0833333,14.5833333 C29.375,14.5833333 31.25,12.7083333 31.25,10.4166667 L31.25,9.5625 C37.3541667,12.0416667 41.6666667,18.0208333 41.6666667,25 C41.6666667,29.3333333 40,33.2708333 37.2916667,36.2291667 Z"
              id="path-world"
            ></path>
          </defs>
          <g
            id="Page-world"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Home-world" transform="translate(-1024.000000, -771.000000)">
              <rect
                id="Rectangle-Copy-world"
                fill="#FAFAFA"
                x="975"
                y="724"
                width="256"
                height="256"
              ></rect>
              <g
                id="icons/filled/social/publicon/social/24px"
                transform="translate(1020.500000, 767.000000)"
              >
                <mask id="mask-world" fill="white">
                  <use href="#path-world"></use>
                </mask>
                <g
                  id="icon/social/publicon/social/24px"
                  fill-rule="nonzero"
                ></g>
                <g
                  id="Group"
                  mask="url(#mask-world)"
                  fill="#000000"
                  fill-rule="nonzero"
                >
                  <g id="↳-Color-world">
                    <rect
                      id="↳-👉Icon-Style"
                      x="0"
                      y="0"
                      width="50"
                      height="50"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </>
    ),
    clipboard: (
      <>
        <svg
          width="38px"
          height="38px"
          viewBox="0 0 38 42"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icons/filled/action/assignment_turned_in_24px</title>
          <defs>
            <path
              d="M39.5833333,6.25 L30.875,6.25 C30,3.83333333 27.7083333,2.08333333 25,2.08333333 C22.2916667,2.08333333 20,3.83333333 19.125,6.25 L10.4166667,6.25 C8.125,6.25 6.25,8.125 6.25,10.4166667 L6.25,39.5833333 C6.25,41.875 8.125,43.75 10.4166667,43.75 L39.5833333,43.75 C41.875,43.75 43.75,41.875 43.75,39.5833333 L43.75,10.4166667 C43.75,8.125 41.875,6.25 39.5833333,6.25 Z M25,6.25 C26.1458333,6.25 27.0833333,7.1875 27.0833333,8.33333333 C27.0833333,9.47916667 26.1458333,10.4166667 25,10.4166667 C23.8541667,10.4166667 22.9166667,9.47916667 22.9166667,8.33333333 C22.9166667,7.1875 23.8541667,6.25 25,6.25 Z M20.8333333,35.4166667 L12.5,27.0833333 L15.4375,24.1458333 L20.8333333,29.5208333 L34.5625,15.7916667 L37.5,18.75 L20.8333333,35.4166667 Z"
              id="path-clip"
            ></path>
          </defs>
          <g
            id="Page-clip"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Home-clip" transform="translate(-1314.000000, -769.000000)">
              <rect
                id="Rectangle-Copy-clip"
                fill="#FAFAFA"
                x="1264"
                y="724"
                width="256"
                height="256"
              ></rect>
              <g
                id="icons/filled/action/assignment_turned_in_24px"
                transform="translate(1308.000000, 767.000000)"
              >
                <mask id="mask-clip" fill="white">
                  <use href="#path-clip"></use>
                </mask>
                <g
                  id="icon/action/assignment_turned_in_24px"
                  fill-rule="nonzero"
                ></g>
                <g
                  id="Group-clip"
                  mask="url(#mask-clip)"
                  fill="#000000"
                  fill-rule="nonzero"
                >
                  <g id="↳-Color-clip">
                    <rect
                      id="↳-👉Icon-Style-clip"
                      x="0"
                      y="0"
                      width="50"
                      height="50"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </g>
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
