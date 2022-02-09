export const GetSVG = (name) => {
  if (name === "everyone") return <Everyone />;
  if (name === "everyone10+") return <Everyone10Plus />;
  if (name === "teen") return <Teen />;
  if (name === "mature") return <Mature />;
  if (name === "adult") return <Adult />;
  if (name === "pending") return <Pending />;
};

export function Everyone() {
  return (
    <svg viewBox="0 0 300 418.6">
      <switch>
        <g>
          <path class="st0" d="M293.6 3H3.1v412.7h292.6V3z" />
          <path class="st1" d="M10.8 10.7h277.3V408H10.8z" />
          <path class="st0" d="M25.4 76.2h247.9v246.5H25.4z" />
          <path d="M296.8 0H0v418.6h298.9V0h-2.1zm-2.2 414.6H4.3V4h290.4v410.5h-.1z" />
          <path d="M38.1 347.2c0 .4 0 .8-.1 1.3-.3 4-1.5 7.1-6.4 7.1-7.1 0-7.5-4.3-7.5-10.2v-3.2c.1-5.6.7-9.8 7.5-9.8 3.8 0 6 2 6.3 5.7.1.6.1 1.1.1 1.7h-4.2c-.1-1.4 0-4-2.1-4-3.3 0-3.1 3.9-3.1 5.6v6.1c0 1.8.1 4.7 3.1 4.7 2.4 0 2.1-3.6 2.2-5h4.2zM41.3 342.1c.1-5.6.7-9.8 7.5-9.8s7.3 4.2 7.5 9.8v3.2c0 5.9-.4 10.2-7.5 10.2-7 0-7.5-4.3-7.5-10.2v-3.2zm4.3 5.3c0 1.8.1 4.7 3.1 4.7 3.1 0 3.1-3.1 3.1-5.2v-5.6c0-1.8.1-5.7-3.1-5.7-3.3 0-3.1 3.9-3.1 5.6v6.2zM70.5 332.9h4.3v22h-4.5l-3.3-7.8c-1.1-2.7-2.1-5.3-3.1-8.8.1 1.8.3 4 .4 6.3.1 2.2.3 4.3.3 6.1v4.2h-4.3v-22h4.5l3.3 8.1c1.1 2.5 2.1 5.2 3.1 8.8-.1-2-.3-4.2-.4-6.3s-.3-4.2-.3-6.1v-4.5zM77.3 332.9h14.3v3.3h-5V355h-4.3v-18.8h-5zM94.1 355v-22.1h12v3.3h-7.7v5.5h7.1v3.3h-7.1v6.8h7.7v3.2zM119.7 332.9h4.3v22h-4.5l-3.3-7.8c-1.1-2.7-2.1-5.3-3.1-8.8.1 1.8.3 4 .4 6.3.1 2.2.3 4.3.3 6.1v4.2h-4.3v-22h4.5l3.3 8.1c1.1 2.5 2 5.2 3.1 8.8-.1-2-.3-4.2-.4-6.3-.1-2.1-.3-4.2-.3-6.1v-4.5zM126.7 332.9h14.2v3.3h-5V355h-4.2v-18.8h-5zM155.4 345.5v9.5h-4.3v-22h8.1c3.8 0 6.6 1.3 6.6 5.3 0 2.4-.6 4.9-3.5 5.3v.1c2.5.3 3.3 1.8 3.3 4 0 .8-.1 6.3 1 7v.4h-4.7c-.6-1.4-.4-4.2-.4-5.6s0-3.2-1.5-3.6c-1.1-.3-2.4-.3-3.6-.3h-.8v-.1zm0-3.2h3.3c1.4-.1 2.5-1 2.5-3.2 0-2.5-1.1-2.9-2.7-2.9h-3.2v6.1zM168 355l5.4-22h5.7l5.2 22h-4.6l-1.1-5.6h-5l-1.1 5.6H168zm6.4-8.8h3.6l-1.1-6.3c-.3-1-.3-2-.4-3.1 0-.6-.1-1-.1-1.5-.1.4-.1 1-.1 1.5-.1 1-.3 2-.4 3.1l-1.5 6.3zM185.3 332.9h14.3v3.3h-5V355h-4.3v-18.8h-5zM202.1 355v-22.1h12v3.3h-7.7v5.5h7.1v3.3h-7.1v6.8h7.7v3.2zM217.7 355v-22h8.9c1 0 3.1.4 4.5 2.5 1 1.5 1.3 4 1.3 7.7 0 4.3 0 9.3-3.5 11.4-1 .6-2.1.6-3.2.6h-8v-.2zm6.1-3.2c3.8 0 4-2 4-8.4 0-5.3-.6-7.3-3.1-7.3H222v15.6h1.8zM243.8 355v-22h6.8c1.8 0 3.6.1 4.9 1.7 1 1.3 1.1 2.5 1.1 3.9 0 2-.4 3.8-2.8 4.6 2.4.3 3.3 2.2 3.3 5.2 0 .8 0 1.8-.3 2.7-1 2.8-2.5 3.9-5.6 3.9h-7.5zm5.1-3.2c.8 0 1.8.1 2.7-.3 1.1-.6 1.3-2 1.3-3.1 0-2.4-.6-3.3-3.1-3.3h-1.7v6.7h.8zm-.1-9.9c1.1 0 2.4 0 3.1-.8.4-.6.4-1.3.4-2.4 0-1.7-.4-2.4-2.4-2.5h-2v5.7h.9zM266.2 338.7c.4 1.1.8 2.2 1 3.3h.1c.3-1.7.8-2.9 1.4-4.2l2.1-5h4.7l-6 12.7v9.3h-4.3v-9.3l-6-12.7h4.6l2.4 5.9zM24.9 394.1v-32.6h46.2v7.6H43.4v4.7h23.5v7.6H43.4v5.1h28.8v7.6zM118.7 371c-.3-1.1-1.4-1.8-2.7-2.2-1.4-.4-2.9-.6-4.7-.6-4 0-5.9.7-5.9 2 0 4.9 32.7 1.8 32.7 13.7 0 7.5-11 11.3-26.5 11.3-14.9 0-24.7-5-25.1-10.9h17.9c.4 1.1 1.5 2.1 3.1 2.5 1.5.6 3.5.8 5.3.8 4.6 0 7.7-.8 7.7-2.4 0-4.9-32.7-1.5-32.7-14 0-7 10.5-10.5 24.6-10.5 15.8 0 22.9 4.6 24.3 10.3h-17.9zM171.9 382.7V394h-18.6v-32.7h26.8c18.8 0 25.1 2.9 25.1 9.3 0 3.8-2.9 6.8-9.5 8 6 1.3 9.6 2.1 9.6 8.7 0 4.2-.3 5.7 2 5.7v1h-18.8c-.4-.7-1-2.8-1-5.7 0-4.3-1.3-5.6-9.9-5.6h-5.7zm0-7.1h7.3c5.7 0 8.8-.8 8.8-3.1s-3.1-3.3-7.5-3.3h-8.7v6.4h.1zM223.3 394v-32.7h27.1c12.8 0 22.9 1.8 22.9 8.2 0 3.3-3.8 5.9-7.4 7.1 6.1.8 9.5 3.9 9.5 7.4 0 7.3-9.6 9.8-24.4 9.8h-27.6v.2zm18.7-13.5v6h8.1c4.6 0 8.1-.6 8.1-2.9 0-2.8-4.3-3.1-10.3-3.1H242zm0-11.4v5.4h7.7c3.6 0 6.4-1 6.4-2.8 0-2.5-3.6-2.5-7.5-2.5H242v-.1zM262.5 56.5v-8.6h12.6v-8h-12.6v-7.4h13v-8.1h-23.1v40.1h23.2v-8zM236.4 46.8h-.1l-7.8-22.4h-10.4v40.1h9.6l-.9-22.3.1-.1 7.8 22.4H245V24.4h-9.5zM198.6 23.7c-8.8 0-13.8 4.3-13.8 11.9v16.3c0 9.1 3.5 13.7 13.8 13.7 10.2 0 13.5-4.7 13.5-13.7V35.7c0-7.7-4.8-12-13.5-12m3.3 29c0 2.4-.3 5.7-3.5 5.7s-3.6-3.3-3.6-5.7V36.3c0-2.5.4-5.4 3.6-5.4 3.3 0 3.5 2.9 3.5 5.4v16.4zM165.2 37.6h-.2l-5-13.2h-10.2l10.1 23.3v16.8H170V47.7l10.4-23.3h-10.1zM146.1 50c-.1-2.8-2.2-4.6-5-5.2v-.1c4.2-1.7 5.3-4.9 5.3-9.1 0-8-4.2-11.2-12.4-11.2h-14.7v40h10V48.7h3.3c2.4.1 3.1 1.8 3.5 4.3.3 2.5 0 5.7.3 9.3 0 .8.3 1.5.6 2.2h11V64c-.6-.4-.8-.8-1-1.4-.5-2.6-.6-9.4-.9-12.6m-13.3-8.6h-3.5v-9.8c4.9-.1 7.1.1 7.1 4.9.1 2.6-.6 4.9-3.6 4.9M99.8 47.9h12.6v-8H99.8v-7.4h13v-8.1H89.7v40.1h23.8v-8H99.8zM69.4 52.6h-.1l-5.2-28.2H54l9.4 40.1h11.9l9.4-40.1H74.6zM36.2 47.9H49v-8H36.2v-7.4h13.2v-8.1H26.1v40.1h24v-8H36.2z" />
          <path d="M53.6 123.8 206.8 85l14.1 49.6-90.3 22.9 5.7 20.3 90.4-22.9 14 49.6-90.3 22.9 6 21.4 90.4-22.9 14 49.6-153.2 38.8z" />
        </g>
      </switch>
    </svg>
  );
}

export function Everyone10Plus() {
  return (
    <svg viewBox="0 0 300 450.1">
      <switch>
        <g>
          <g>
            <g>
              <path d="M300.1 0H0V450.1H300.1V0z" />
              <path d="M295.7 4.8v440.4H4.4V4.8h291.3" />
              <path d="M19.1 20.5H279v73H19.1zM18.9 109.4H279v268.5H18.9zM19 429.4v-35.6h52.1v8.3H39.9v5h26.5v8.3H39.9v5.6h32.5v8.4zM116.7 404.1c-.5-1.3-1.7-2.2-3-2.4-1.8-.5-3.6-.7-5.4-.7-4.6 0-6.7.8-6.7 2.1 0 5.2 36.8 2 36.8 15.1 0 8.2-12.4 12.3-30.2 12.3s-28-5.5-28.4-11.9h20c.7 1.4 2 2.4 3.5 2.8 1.9.6 3.9.9 6 .9 5.2 0 8.8-.9 8.8-2.6 0-5.4-36.9-1.7-36.9-15.1 0-7.6 11.8-11.3 27.7-11.3 17.8 0 25.9 5 27.4 11.3l-19.6-.5zM169.8 409.2h8.2c6.5 0 10-.9 10-3.4s-3.6-3.7-8.4-3.7h-9.8v7.1zm0 7.5v12.4h-20.9v-35.4h30.2c21.3 0 28.4 3.3 28.4 10.1 0 4.2-3.3 7.6-10.8 8.8 6.8 1.4 10.9 2.2 10.9 9.4 0 4.6 0 6.3 2.2 6.3v1.1h-21.2c-.8-2-1.2-4.1-1.1-6.2 0-4.7-1.4-6.2-11.2-6.2l-6.5-.3zM241.3 402.1v6.2h8.8c4.2 0 7.6-1.1 7.6-3.1s-4.1-2.9-8.5-2.9l-7.9-.2zm0 12.4v6.6h9.1c5.2 0 9.1-.6 9.1-3.3s-4.9-3.3-11.6-3.3h-6.6zm-21 15.1v-35.8h30.2c14.4 0 25.9 1.9 25.9 8.9 0 3.7-4.3 6.4-8.3 7.6 6.9 1 10.6 4.3 10.6 8.2 0 7.9-10.9 10.7-27.5 10.7l-30.9.4z" />
              <path d="M165.4 311.9h-11.2v6.1h11.2v11h6.4v-10.9H183V312h-11.2v-10.9h-6.4v10.8zm-17.8-2.8c0-21.6-11.6-34.5-30.8-34.5-26.1 0-32.4 17.8-32.4 34.5 0 20.4 10.2 34.5 31.6 34.5s31.6-14 31.6-34.5m-109-137.6 157.5-47 15.6 49.9-78.7 23.5 6.4 20.4 73-21.7 15.7 49.8-72.9 21.8 6.8 21.5 81.5-24.3 15.8 49.8-160 47.7-60.5-191.4m5.8 126.2c7.1-1.8 13.8-5 19.6-9.5v52h15.1V275H64.6c-5.8 4.8-12.7 8.2-20 10.1v12.6" />
              <path d="M98.3 308.5c0-21.8 8.8-26.9 18.7-26.9 11.1 0 17.4 8.4 17.4 27.5 0 11.9-3.3 26.6-17.5 26.5s-19.1-11.1-18.6-27.1M26.3 77.7V36.3h16.3v6.4h-10V53h9.2v6.4h-9.2v12.1h10.3v6.4l-16.6-.2zM44.5 36.3H51l4.6 30.2 5.2-30.2H67l-7.6 41.4h-7.6l-7.3-41.4zM69.9 77.7V36.3H86v6.4H76V53h9.2v6.4H76v12.1h10.4v6.4l-16.5-.2zM96.5 77.7h-6.3V36.3h11.6c2.1 0 4 1 5.1 2.8 1.4 2.5 2.1 5.3 1.9 8.1.1 2.3-.4 4.6-1.3 6.7-.7 1.8-2.3 3.1-4.2 3.5h1.4c.7.2 1.3.6 1.8 1.1.7.7 1.2 1.5 1.5 2.3.5 1.4.7 2.9.7 4.4v6.4c-.1 1.2-.1 2.4 0 3.6-.1.7-.1 1.5 0 2.2h-6c-.5-1.3-.7-2.6-.7-3.9v-7.6c0-1-.2-2-.5-2.9-.2-.8-.7-1.5-1.3-2-.6-.3-1.2-.5-1.9-.5h-1.6l-.2 17.2zm0-23.5h2.7c.6 0 1.1-.2 1.5-.6.5-.4.8-.9 1.1-1.4.2-.6.4-1.3.5-2 .1-.7.1-1.4 0-2 .1-1.5-.1-2.9-.8-4.2-.5-.8-1.4-1.3-2.3-1.3h-2.7v11.5zM118.2 63.4l-7.6-27.1h6.8l4.5 17.5 4.8-17.5h6.4l-8.3 27.1v14.4h-6.3l-.3-14.4zM145.6 78.4c-2.1.1-4.3-.5-6-1.8-1.4-1.3-2.5-2.9-3-4.8-.6-2.2-1-4.6-1.1-6.9V49.7c.1-2.3.5-4.6 1.1-6.9.5-1.8 1.6-3.5 3-4.8 1.7-1.3 3.8-1.9 6-1.8 2-.2 3.9.3 5.6 1.4 1.5 1.3 2.5 2.9 3 4.8.7 2.2 1.1 4.5 1.1 6.9v15.2c0 2.3-.4 4.7-1.1 6.9-.5 1.9-1.6 3.5-3 4.8-1.5 1.4-3.5 2.2-5.6 2.2zm0-6.2c.8 0 1.5-.3 2-.8.7-.8 1.1-1.8 1.2-2.8.3-1.5.5-3.1.5-4.7V50.1c0-1.6-.2-3.2-.5-4.8-.2-1-.6-1.9-1.2-2.7-.5-.6-1.3-.9-2-.9-.8 0-1.6.3-2.1.9-.6.8-1 1.7-1.2 2.7-.3 1.5-.5 3.1-.5 4.7v13.8c.1 1.6.2 3.1.5 4.7.2 1 .6 2 1.2 2.8.5.6 1.3.9 2.1.9zM160.8 77.7V36.3h8.4l7.9 28.7V36.3h5.8v41.4h-8.2l-8.1-30.2v30.2h-5.8zM188.3 77.7V36.3h16.3v6.4h-10.1V53h9.2v6.4h-9.2v12.1h10.4v6.4l-16.6-.2zM217.4 42.9c1.1-.9 2.1-1.8 3-2.8 1-1.1 1.9-2.3 2.6-3.6h5.4v41.3h-6.2V46c-.7.9-1.5 1.7-2.3 2.5l-2.5 2.1v-7.7zM242.8 35.9c1.5 0 3 .3 4.3 1.1 1.2.9 2 2.2 2.5 3.6.7 2.1 1.1 4.3 1.2 6.5v18.8c-.1 2.3-.4 4.5-1 6.7-.5 1.6-1.3 3.1-2.6 4.2s-2.9 1.6-4.5 1.5c-1.7.1-3.3-.4-4.5-1.5-1.2-1.2-2.1-2.6-2.6-4.2-.6-2.2-.9-4.5-1-6.7V47.1c.1-2.2.5-4.4 1.2-6.5.4-1.4 1.3-2.7 2.5-3.6 1.4-.8 3-1.2 4.5-1.1zm0 6.1c-.5 0-1.1.2-1.4.6-.4.7-.7 1.4-.8 2.2V64.6c-.1 1.5-.1 3.1 0 4.6.1.8.3 1.6.8 2.3.3.4.8.7 1.4.6.5 0 1-.2 1.4-.6.4-.7.7-1.5.8-2.3 0-1.1 0-2.6.4-4.6V44.8c-.1-.8-.3-1.5-.8-2.2-.5-.5-1.1-.7-1.8-.6zM260 44.4h4.6v11.3h7V62h-7v11.3H260V62h-7v-6.4h7V44.4z" />
            </g>
          </g>
        </g>
      </switch>
    </svg>
  );
}

export function Teen() {
  return (
    <svg viewBox="0 0 300 450.1">
      <switch>
        <g>
          <g>
            <g>
              <path d="M300.1 0H0V450.1H300.1V0z" />
              <path d="M295.7 4.8v440.4H4.4V4.8h291.3" />
              <path d="M19.1 20.5H279v73H19.1zM18.9 109.4H279v268.5H18.9zM19 429.4v-35.7h52.1v8.4H39.9v5h26.5v8.3H39.9v5.6h32.5v8.4zM116.7 404.1c-.5-1.3-1.7-2.2-3-2.4-1.8-.5-3.6-.7-5.4-.7-4.6 0-6.7.8-6.7 2.1 0 5.2 36.8 2 36.8 15.1 0 8.2-12.4 12.3-30.2 12.3s-28-5.5-28.4-11.9h20c.7 1.4 2 2.4 3.5 2.8 1.9.6 3.9.9 6 .9 5.2 0 8.8-.9 8.8-2.6 0-5.4-36.9-1.7-36.9-15.1 0-7.6 11.8-11.3 27.7-11.3 17.8 0 25.9 5 27.4 11.3l-19.6-.5zM169.8 409.2h8.2c6.5 0 10-1 10-3.4s-3.6-3.7-8.4-3.7h-9.8v7.1zm0 7.5v12.4h-20.9v-35.5h30.2c21.3 0 28.4 3.3 28.4 10.2 0 4.2-3.3 7.6-10.8 8.8 6.8 1.4 10.9 2.2 10.9 9.4 0 4.6 0 6.3 2.2 6.3v1.1h-21.2c-.8-2-1.2-4.1-1.1-6.3 0-4.6-1.4-6.1-11.2-6.1l-6.5-.3zM241.3 402.1v6.2h8.8c4.2 0 7.6-1.1 7.6-3.2 0-2-4.1-2.8-8.5-2.8l-7.9-.2zm0 12.4v6.6h9.1c5.2 0 9.1-.6 9.1-3.3s-4.9-3.3-11.6-3.3h-6.6zm-21 15.1v-35.9h30.2c14.4 0 25.9 2 25.9 9 0 3.7-4.3 6.4-8.3 7.6 6.9 1 10.6 4.3 10.6 8.2 0 7.9-10.9 10.7-27.5 10.7l-30.9.4z" />
              <path d="m40.6 174.6 201.2-50.2 15.5 53.6-64.7 16.2L236 344.8l-71.9 18-43.4-150.7L56 228.2z" />
              <path d="M217.9 36.3H235l19.8 22.6-.7-9.5V36.3h17.5v41.3h-17.1l-19.8-22.5.3 9.8.4 12.7h-17.5zM156.4 36.3h45.2v9.6h-27v6h22.9v9.6h-22.9V68h28.2v9.6h-46.4zM92.7 36.3H138v9.6h-27.2v6h23v9.6h-23V68H139v9.6H92.7zM26.2 36.3h51v10.8H60.9v30.5H42.6V47.1H26.2z" />
            </g>
          </g>
        </g>
      </switch>
    </svg>
  );
}

export function Mature() {
  return (
    <svg xmlSpace="preserve" viewBox="0 0 300 450.1">
      <switch>
        <g>
          <g>
            <g>
              <path d="M300 0H0V450.1h300V0z" style={{ fill: "#fff" }} />
              <path
                d="M295.7 4.8v440.4H4.4V4.8h291.3"
                style={{ fill: "#222" }}
              />
              <path
                d="M19.1 20.5H279v73H19.1zM18.9 109.4H279v268.5H18.9zM19 429.4v-35.6h52.1v8.3H39.9v5h26.5v8.3H39.9v5.6h32.5v8.4zM116.7 404.1c-.5-1.3-1.7-2.2-3-2.4-1.8-.5-3.6-.7-5.4-.7-4.6 0-6.7.8-6.7 2.1 0 5.3 36.8 2 36.8 15.1 0 8.2-12.4 12.3-30.2 12.3s-28-5.5-28.4-11.9h20c.7 1.4 2 2.4 3.5 2.8 1.9.6 3.9.9 6 .9 5.3 0 8.8-.9 8.8-2.6 0-5.4-36.9-1.7-36.9-15.1 0-7.6 11.8-11.3 27.7-11.3 17.8 0 25.9 5 27.4 11.3l-19.6-.5zM169.8 409.2h8.2c6.5 0 10-.9 10-3.4s-3.6-3.7-8.4-3.7h-9.8v7.1zm0 7.5v12.4h-20.9v-35.4h30.2c21.3 0 28.4 3.3 28.4 10.1 0 4.2-3.3 7.6-10.8 8.8 6.8 1.4 10.9 2.2 10.9 9.4 0 4.7 0 6.3 2.2 6.3v1.1h-21.2c-.8-2-1.2-4.1-1.1-6.2 0-4.7-1.4-6.2-11.2-6.2l-6.5-.3zM241.3 402.1v6.2h8.8c4.2 0 7.6-1.1 7.6-3.1s-4.1-2.9-8.5-2.9l-7.9-.2zm0 12.4v6.6h9.1c5.2 0 9.1-.6 9.1-3.3s-4.9-3.3-11.6-3.3h-6.6zm-21 15.1v-35.8h30.2c14.4 0 25.9 1.9 25.9 9 0 3.6-4.3 6.4-8.3 7.6 6.9 1 10.6 4.3 10.6 8.2 0 7.9-10.9 10.7-27.5 10.7l-30.9.3z"
                class="st0"
              />
              <path d="m28.4 175.9 79.6-21.4 45.6 107 .3-.1-13.7-115.6 79.7-21.4 49.8 187-48.6 13-35.6-133.6h-.3l15 139.2-52.6 14.2-56-128.1-.4.1 35.4 133.6-48.5 13.1z" />
              <path d="M26.2 77.6V36.2h11.6l5.5 28.1L49 36.2h11.4v41.4h-6.9V45.4l-6.7 31.9h-7l-6.4-31.9v31.9l-7.2.3zM64 77.6l9.7-41.4h9.5l9.5 41.4h-7.6l-2-9.1h-10l-2 9.1H64zm14-33.4L74.6 62h7L78 44.2zM114 36.2v6.9h-8.2v34.5h-7.6V43.1h-7.6v-6.9H114zM141 36.2v29.3c0 1.6-.2 3.1-.6 4.6-.4 1.5-1 2.9-2 4.1-1 1.3-2.2 2.3-3.6 2.9-1.8.7-3.7 1.1-5.7 1.1-3.3.3-6.6-1-8.9-3.4-2.1-2.6-3.1-5.9-2.9-9.3V36.2h7.6V65c-.2 1.9.2 3.8 1.2 5.4.8 1 2 1.7 3.3 1.7 1.4.1 2.8-.6 3.6-1.9.8-1.6 1.2-3.4 1.1-5.2V36.2h6.9zM154.1 77.6h-7.6V36.2h13.8c2.3 0 4.5 1 6 2.8 1.6 2.4 2.4 5.2 2.2 8 .1 2.3-.5 4.6-1.5 6.7-1 1.9-2.9 3.2-5 3.5h1.7c.8.2 1.5.5 2.1 1 .8.7 1.4 1.5 1.8 2.4.6 1.4.8 2.9.8 4.4v9.9c0 .7.2 1.5.4 2.2h-7.2c-.5-1.3-.7-2.6-.7-3.9v-7.1c0-1-.1-2-.5-2.9-.3-.8-.8-1.5-1.6-2-1-.6-2.1-.8-3.2-.8h-1.9l.4 17.2zm0-23.5h3.3c.7 0 1.3-.2 1.8-.6.5-.4.9-.9 1.1-1.4.3-.6.5-1.3.6-2 .1-.7.1-1.4 0-2.1.1-1.5-.2-2.9-1-4.2-.7-.8-1.7-1.3-2.7-1.3h-3.3l.2 11.6zM173.9 77.6V36.2H193v6.4h-11.5V53h10.8v6.4h-10.8v12.1h12.1v6.4l-19.7-.3zM208.1 42.5c1.3-.9 2.5-1.8 3.6-2.9 1.2-1.1 2.2-2.3 3-3.6h6.4v41.6h-7.6V45.4c-.9.9-1.8 1.7-2.7 2.5l-2.9 2.2.2-7.6zM246.8 43.9l-8.2 33.6H231l9.3-35.1h-11.6V36h18.1v7.9zM258 44.2h5.4v11.3h8.2v6.4h-8.2v11.3H258V61.9h-8.5v-6.4h8.2l.3-11.3z" />
            </g>
          </g>
        </g>
      </switch>
    </svg>
  );
}

export function Adult() {
  return (
    <svg viewBox="0 0 300 450">
      <switch>
        <g>
          <path d="M295.6 4.8v440.3H4.4V4.8h291.2" />
          <path d="M19 20.5h259.9v73H19v-73zM18.9 109.4h260v268.4h-260V109.4zM19 429.3v-35.6h52.2v8.3H39.9v5.1h26.4v8.3H39.9v5.6h32.4v8.3H19zM116.7 404c-.5-1.3-1.7-2.2-3-2.4-1.8-.5-3.6-.7-5.4-.7-4.6 0-6.7.7-6.7 2.1 0 5.3 36.8 2 36.8 14.9 0 8.2-12.4 12.3-30 12.3-16.9 0-27.9-5.5-28.3-11.9h20.1c.7 1.4 1.9 2.5 3.5 2.8 1.9.6 3.9.9 6 .9 5.2 0 8.7-.9 8.7-2.6 0-5.4-36.8-1.7-36.8-15.3 0-7.6 11.7-11.4 27.8-11.4 17.8 0 25.9 5 27.4 11.3h-20.1zM169.8 409.1h8.3c6.5 0 10-.9 10-3.4s-3.5-3.7-8.4-3.7h-9.8l-.1 7.1zm0 7.8v12.4h-21v-35.6H179c21.3 0 28.3 3.3 28.3 10.2 0 4.1-3.3 7.5-10.7 8.7 6.8 1.4 10.8 2.2 10.8 9.4 0 4.6-.3 6.2 2.2 6.2v1.1h-21.3c-.8-2-1.2-4.1-1.1-6.2 0-4.7-1.4-6.2-11.2-6.2h-6.2zM241.3 402v6h8.7c4.2 0 7.2-1.1 7.2-3.1 0-2.8-4.1-2.8-8.6-2.8l-7.3-.1zm0 12.4v6.6h9.2c5.2 0 9.1-.6 9.1-3.3 0-3.1-4.9-3.3-11.6-3.3h-6.7zm-21 14.9v-35.6h30.6c14.4 0 25.9 1.9 25.9 9 0 3.7-4.3 6.4-8.4 7.7 6.9 1 10.6 4.3 10.6 8.2 0 7.9-10.9 10.7-27.6 10.7h-31.1z" />
          <g>
            <path d="m107.6 272.2-.6-78 42.5 67.6-41.9 10.4zm99.7-29.6c-3.3 1.6-6.8 2.9-10.4 3.8-26.7 6.6-45.7-7.9-53.1-33.4-5.4-18.7-2.2-35.1 10.5-45.2l-30.8-43.5L56.1 141 42.5 362.6l65-16.1-.2-28.7 66-16.4 15.6 24.9 66-16.4-47.6-67.3" />
            <path d="M160.1 209.1c5.1 17.4 15.3 30.6 33.6 26.1 2.3-.6 4.5-1.4 6.6-2.5l-38.2-53.8c-5.7 7.3-5.4 18.5-2 30.2M175.1 170.9c18.4-4.6 28.6 8.6 33.6 26.1 4.4 15.1 3.6 29.1-8.4 35.6l7.1 10c18.5-9.1 23.9-27.9 17.6-49.7-7.4-25.4-26.3-39.9-53.1-33.3-6.3 1.4-12.3 4.2-17.5 8.2l7.7 11c3.2-4 7.8-6.8 13-7.9" />
          </g>
          <g>
            <path d="M26.3 77.7 33 36.3h6.7l6.6 41.4H41l-1.3-9.2h-7l-1.4 9.2h-5zm9.8-33.4-2.4 17.9h4.9l-2.5-17.9zM48.9 36.3h8.5c1.5-.1 2.9.4 4 1.4 1.1 1.1 2 2.5 2.4 4 .6 2.1 1 4.3 1.2 6.5.2 2.5.3 5.4.3 8.6v3.8c0 1.4-.1 2.9-.2 4.5-.1 1.5-.3 3.1-.6 4.6-.3 1.4-.7 2.8-1.4 4.1-.6 1.1-1.4 2.1-2.4 2.9-1 .8-2.3 1.2-3.6 1.1h-8.3V36.3zM54 71.4h2.5c.7 0 1.4-.3 1.9-.8.6-.7 1-1.6 1.1-2.5.3-1.5.5-2.9.6-4.4.1-1.8.2-4 .2-6.6 0-1.9 0-3.7-.1-5.5 0-1.5-.1-3-.4-4.6-.2-1.1-.5-2.2-1.1-3.2-.4-.7-1.2-1.2-2-1.2H54v28.8zM85.8 36.3v29.4c0 1.5-.1 3.1-.4 4.6-.2 1.4-.7 2.8-1.4 4.1-.6 1.2-1.5 2.2-2.5 2.9-1.2.8-2.5 1.2-3.9 1.1-2.6.1-5-1.2-6.3-3.4-1.5-2.9-2.2-6.1-2-9.3V36.3h5.1v28.8c-.1 1.9.2 3.7.9 5.5.5 1.3 1.9 2 3.2 1.5.8-.3 1.3-.9 1.5-1.7.6-1.7.9-3.5.8-5.3V36.3h5zM89.9 77.7V36.3H95v34.5h7.6v6.9H89.9zM117.4 36.3v6.9h-5.7v34.5h-5.1V43.2H101v-6.9h16.4zM134.8 66.4c.1 2.2-.2 4.3-.8 6.4-.4 1.3-1 2.6-2 3.6-.7.8-1.7 1.3-2.8 1.6-1 .2-2 .4-2.9.4-1.4.1-2.7-.3-3.8-1.1-1-.8-1.8-1.8-2.2-2.9-.5-1.4-.9-2.8-1-4.3-.2-1.7-.2-3.4-.1-5.1h5.1c0 1 0 1.9.1 2.8 0 .8.2 1.6.4 2.3.1.6.4 1.1.9 1.6.4.4 1 .6 1.6.6.8 0 1.6-.5 1.9-1.3.5-1.1.7-2.2.6-3.4 0-1.1-.2-2.2-.8-3.2-.5-.9-1.2-1.8-1.9-2.6l-2.5-2.5c-.9-.9-1.8-1.8-2.5-2.9-.8-1.2-1.4-2.5-1.9-3.8-.5-1.7-.8-3.5-.7-5.3 0-1.5.1-3 .4-4.5.2-1.3.7-2.5 1.3-3.7.6-1 1.5-1.9 2.5-2.5 1.2-.7 2.5-1 3.9-.9 2.3-.1 4.4 1 5.5 3 1.4 3 1.9 6.2 1.6 9.5h-5c0-.8 0-1.5-.1-2.3 0-.7-.2-1.3-.3-2-.1-.5-.4-1-.7-1.4-.3-.4-.8-.6-1.2-.5-.8 0-1.5.4-1.9 1.1-.5 1-.8 2.2-.7 3.3 0 1.2.2 2.3.8 3.3.5.9 1.2 1.8 1.9 2.5.8.8 1.6 1.5 2.4 2.3.9.8 1.8 1.7 2.5 2.7.8 1.2 1.5 2.4 1.9 3.8.4 1.7.6 3.6.5 5.4zM154.1 78.4c-1.8.1-3.6-.5-4.8-1.8-1.2-1.4-2.1-3-2.5-4.8-.5-2.3-.8-4.6-.9-6.9-.1-2.6-.1-5.2-.1-7.9s0-5.4.1-7.9c.1-2.3.4-4.6.9-6.8.4-1.8 1.3-3.4 2.5-4.8 2.8-2.4 6.9-2.4 9.7 0 1.2 1.4 2.1 3 2.5 4.8.6 2.2.9 4.5.9 6.8.1 2.6.1 5.2.1 7.9s0 5.4-.1 7.9c-.1 2.3-.4 4.6-.9 6.9-.4 1.8-1.3 3.4-2.5 4.8-1.3 1.3-3.1 1.9-4.9 1.8zm0-6.2c.7 0 1.3-.3 1.7-.9.5-.8.9-1.7 1-2.7.3-1.6.4-3.1.4-4.7.1-1.9.1-4.2.1-6.9 0-2.6 0-4.9-.1-6.9 0-1.6-.2-3.2-.4-4.7-.1-1-.5-1.9-1-2.7-.7-.9-2-1.2-2.9-.5-.2.1-.4.3-.5.5-.5.8-.9 1.8-1 2.7-.2 1.6-.4 3.1-.4 4.7-.1 1.9-.1 4.2-.1 6.9s0 4.9.1 6.9c0 1.6.2 3.2.4 4.7.1 1 .5 1.9 1 2.7.4.6 1 .9 1.7.9zM166.6 77.7V36.3h6.9L180 65h.1V36.3h4.7v41.4H178l-6.6-30.3h-.1v30.3h-4.7zM189.1 77.7V36.3h5.1v34.5h7.6v6.9h-12.7zM206 63.4l-6.4-27.1h5.5l3.6 17.5 3.9-17.5h5.2L211 63.4v14.3h-5V63.4zM227.3 42.5c.9-.9 1.7-1.8 2.5-2.8.8-1.1 1.5-2.3 2.1-3.6h4.5v41.6h-5.1v-32c-.6.9-1.2 1.7-1.9 2.5s-1.4 1.5-2.1 2.2v-7.9zM248 78.2c-2 .1-4-.9-5.1-2.7-1.3-2.6-1.9-5.6-1.7-8.6 0-1.3 0-2.5.1-3.6s.2-2.1.5-3.2c.2-.9.6-1.8 1.1-2.6.4-.8 1.1-1.4 1.8-1.9v-.1c-.7-.3-1.2-.7-1.6-1.3-.4-.6-.8-1.3-1-2-.3-.9-.4-1.7-.5-2.6-.1-1-.1-2-.1-3.1-.2-2.9.4-5.8 1.7-8.4 1.8-2.7 5.5-3.5 8.2-1.7.7.4 1.2 1 1.7 1.7 1.3 2.6 1.9 5.5 1.7 8.4 0 1.1-.1 2.2-.1 3.1-.1.9-.2 1.8-.5 2.6-.2.7-.6 1.4-1 2-.4.6-1 1-1.6 1.3v.1c.7.5 1.4 1.1 1.8 1.9.5.8.8 1.7 1.1 2.6.3 1 .4 2.1.5 3.2.1 1.1.1 2.4.1 3.6.2 3-.4 5.9-1.7 8.6-1.4 1.8-3.3 2.8-5.4 2.7zm0-19.1c-.5 0-1 .3-1.2.8-.3.6-.5 1.3-.6 2-.1.8-.2 1.6-.2 2.4v2.2c0 .6 0 1.2.1 1.9 0 .6.1 1.2.3 1.9.1.5.3 1 .6 1.4.3.3.6.5 1.1.5.4 0 .8-.2 1.1-.5.3-.4.5-.9.6-1.4.2-.6.3-1.2.3-1.9s.1-1.3.1-1.9v-2.2c0-.8-.1-1.6-.2-2.4-.1-.7-.3-1.4-.6-2-.3-.5-.8-.8-1.4-.8zm0-17.5c-.4 0-.8.2-1 .6-.3.4-.5.9-.6 1.4l-.3 1.8v3.5c0 .6.1 1.2.2 1.8.1.5.3 1 .6 1.4.2.4.6.6 1 .6s.8-.2 1-.6c.3-.4.5-.9.6-1.4.1-.6.2-1.2.2-1.8 0-.6.1-1.2.1-1.8 0-.6 0-1.1-.1-1.7 0-.6-.1-1.2-.2-1.8-.1-.5-.3-1-.6-1.4-.1-.4-.5-.6-.9-.6zM262.1 44.3h3.7v11.3h5.7V62h-5.7v11.3h-3.7V62h-5.7v-6.4h5.7V44.3z" />
          </g>
        </g>
      </switch>
    </svg>
  );
}

export function Pending() {
  return (
    <svg viewBox="0 0 300 450">
      <switch>
        <g>
          <g transform="translate(-47.061 -626.246)">
            <path d="M28.8 613.6h336.5v475.3H28.8z" />
            <path d="M221 945.6c-3-3.8-10.4-26.4-15.4-45.1-4.3-16.1-13-25.5-25.2-28.7 7.6-8.9 12-22.7 6.1-44.4-8.2-30.3-29.1-45-54.4-38.2l-57.6 15.3-1.2.3L121 981.3l38.5-10.3s-15.6-57.8-18.4-68l1.9-.5c5.9-1.5 10.2-1.5 13.1.2 5.1 2.9 7.5 11.8 10.2 22l2.1 8.1c2.5 9.8 5.2 20 11.8 28.6l2.6 3.4 44.1-11.7-5.9-7.5zM142.5 869l-9.8 2.6c-2.9-10.6-9.5-35.1-12.4-45.8 4.8-1.2 9.8-2.6 9.8-2.6 4.7-1.2 12.5-3.3 18.2 17.8 1.2 4.2 6.1 24.8-5.8 28zM314.7 803c-12.3-45.7-39.8-48.7-60.8-43.1L202 773.6l-6.2 1.6 47.7 176.6 39.4-10.5s-15.4-56.7-18.1-66.9c6.7-1.8 16.9-4.5 16.9-4.5 30.7-8.1 42.5-31.9 33-66.9zM270 838.2s-7.6 2-14 3.7l-12.3-45.7c5.7-1.5 11.9-3.2 11.9-3.2 6.8-1.8 14.6-1.8 20.7 20.9 2.9 10.9-.2 22.6-6.3 24.3z" />
            <path d="M226.6 1028.3h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm0 0h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm0 0h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm69.1 0h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1.1-2.9-4.1-2.9-8.5-2.9zm-.7 12.4h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm0 0h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm.7-12.4h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1.1-2.9-4.1-2.9-8.5-2.9zm-69.1 0h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm0 0h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm69.1 0h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1.1-2.9-4.1-2.9-8.5-2.9zm-.7 12.4h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm0 0h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm9.3-9.6c0-2.8-4.1-2.9-8.5-2.9h-7.4v6h8.7c4.1 0 7.2-1.1 7.2-3.1zm-77.7-2.8h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zM326 735.7v268.4H66V735.7h260zm-259.9-16v-73H326v73H66.1zm157.2 323.4h-6.4v12.4h-21v-35.6h30.2c21.3 0 28.3 3.3 28.3 10.2 0 4.1-3.3 7.5-10.8 8.7 6.8 1.4 10.9 2.2 10.9 9.4 0 4.6-.3 6.2 2.2 6.2v1.1h-21.3c-.8-2-1.2-4.1-1.1-6.2.2-4.7-1.3-6.2-11-6.2zm-94.7-12.7c0-7.6 11.7-11.4 27.8-11.4 17.8 0 25.9 5 27.4 11.3h-19.9c-.5-1.3-1.7-2.2-3-2.4-1.8-.5-3.6-.7-5.4-.7-4.6 0-6.7.8-6.7 2.1 0 5.3 36.8 2 36.8 14.9 0 8.2-12.4 12.3-30 12.3-16.9 0-27.9-5.5-28.3-11.9h20.1c.7 1.4 2 2.5 3.5 2.8 1.9.6 3.9.9 6 .9 5.2 0 8.7-.9 8.7-2.6-.2-5.4-37-1.7-37-15.3zm-15.2 3v8.3H87v5.6h32.4v8.3H66V1020h52.2v8.3H87v5.1h26.4zm185.2 22.2h-31.2V1020H298c14.4 0 25.9 1.9 25.9 9 0 3.7-4.3 6.4-8.4 7.7 6.9 1 10.6 4.3 10.6 8.2 0 7.8-10.9 10.7-27.5 10.7zm18-390.3c-.6-1.1-1.5-2-2.6-2.6-2.7-1.5-6.1-1.1-8.4.9-1.2 1.4-2.2 3-2.6 4.8-.6 2.2-.9 4.5-1 6.8-.1 2.5-.2 5.1-.2 7.7 0 3.9.1 7.3.3 10 .1 2.3.5 4.6 1.3 6.8.5 1.6 1.5 2.9 2.9 3.8 1.6.9 3.4 1.3 5.2 1.2.6 0 1.2 0 1.8-.1.7-.1 1.3-.2 2-.4s1.3-.3 1.9-.5c.6-.1 1-.3 1.4-.4v-21h-8v6.4h2.8v9.2l-1.2.6c-.4.1-.9.2-1.3.2-.7 0-1.3-.2-1.8-.6-.6-.6-1-1.4-1.1-2.2-.3-1.5-.5-3.1-.6-4.6-.1-2-.2-4.6-.2-7.9v-5.8c0-1.6.1-3.3.4-4.9.1-1.2.5-2.3 1-3.4.3-.8 1-1.2 1.9-1.2.6 0 1.2.2 1.6.6.4.5.8 1 1 1.6.2.8.4 1.5.4 2.3.1.9.1 1.8.1 2.8h5.1c.1-1.9-.1-3.9-.4-5.8-.4-1.6-1-3-1.7-4.3zM295 1040.7h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm9.3-9.6c0-2.8-4.1-2.9-8.5-2.9h-7.4v6h8.7c4.1 0 7.2-1.1 7.2-3.1zm-11.4-339.9-6.6-28.7h-7V704h4.8v-30.3h.1L291 704h6.8v-41.5H293v28.7zM269.6 704h5.2v-41.5h-5.2V704zm-5.6-36.1c-.4-1.5-1.3-2.9-2.5-4-1.2-1-2.6-1.4-4.1-1.4h-8.6V704h8.4c1.3.1 2.6-.3 3.7-1.1 1-.8 1.8-1.8 2.4-2.9.7-1.3 1.1-2.7 1.4-4.1.3-1.5.5-3.1.6-4.6.1-1.6.2-3.1.2-4.5V683c0-3.2-.1-6.1-.3-8.7-.2-2.1-.6-4.3-1.2-6.4zm-24.5 23.3-6.7-28.7h-7V704h4.8v-30.3h.1l6.8 30.3h6.8v-41.5h-4.8v28.7zm-12.9 337.1h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm-12.8-342.8h7.7v-6.4h-7.7v-10.2h8.3v-6.4h-13.5V704h13.8v-6.4h-8.6v-12.1zm-9.8-19.6c-.5-1-1.1-1.9-2-2.5-.9-.6-2-.9-3-.8h-9.3V704h5.2v-16.9h3.8c1.3.1 2.6-.4 3.6-1.2.9-.8 1.7-1.9 2.1-3.1.5-1.3.8-2.6.9-4 .2-1.3.2-2.6.2-3.9 0-1.7-.1-3.4-.4-5.1-.1-1.3-.5-2.7-1.1-3.9zm-28.5-.6c-.6-1.1-1.5-2-2.6-2.6-1-.6-2.2-.9-3.4-.9-1.8-.1-3.6.6-5 1.8-1.2 1.4-2.1 3-2.6 4.8-.6 2.2-1 4.5-1 6.8-.1 2.5-.2 5.1-.2 7.7 0 3.9.1 7.3.3 10 .1 2.3.5 4.6 1.3 6.8.5 1.6 1.5 2.9 2.9 3.8 1.6.9 3.4 1.3 5.2 1.2.6 0 1.2 0 1.8-.1.7-.1 1.3-.2 2-.4s1.3-.3 1.9-.5c.6-.1 1.1-.3 1.4-.4v-21h-8v6.4h2.8v9.2l-1.2.6c-.4.1-.9.2-1.3.2-.7 0-1.3-.2-1.8-.6-.6-.6-1-1.4-1.1-2.2-.3-1.5-.5-3.1-.6-4.6-.1-2-.2-4.6-.2-7.9 0-2 0-3.9.1-5.8 0-1.6.1-3.3.4-4.9.1-1.2.5-2.3 1-3.4.3-.8 1-1.2 1.9-1.2.6 0 1.2.2 1.6.6.4.5.8 1 .9 1.6.2.8.4 1.5.4 2.3.1.9.1 1.8.1 2.8h5.2c.1-1.9 0-3.9-.4-5.8-.5-1.6-1-3-1.8-4.3zm-23.7 25.9-6.7-28.7h-7V704h4.8v-30.3h.1l6.7 30.3h6.8v-41.5h-4.8v28.7zM128.5 704h5.2v-41.5h-5.2V704zm-19.1-34.6h5.8V704h5.2v-34.6h5.8v-6.9h-16.7v6.9zm-12-6.9L90.6 704h5.1l1.4-9.2h7.1l1.4 9.2h5.5l-6.7-41.5h-7zm-8.7 35.7c0-1.3-.1-2.5-.1-3.7v-2.8c0-1.5-.1-3-.5-4.4-.3-.9-.7-1.7-1.3-2.4-.4-.5-.9-.8-1.5-1-.5-.2-.9-.3-1.2-.3v-.1c1.7-.5 3-1.8 3.5-3.4.8-2.2 1.1-4.4 1-6.7.2-2.8-.4-5.6-1.6-8.1-.8-1.7-2.4-2.7-4.2-2.8h-9.6V704h5.2v-17.2h1.4c.8 0 1.6.2 2.2.8.5.5.9 1.2 1.1 2 .2 1 .4 1.9.4 2.9v7.6c0 1.3.2 2.7.5 4h5.1c-.2-.7-.3-1.5-.3-2.2 0-1.2-.1-2.4-.1-3.7zm137.9 330.1h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm69.1 0h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1.1-2.9-4.1-2.9-8.5-2.9zm-.7 12.4h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm0 0h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm.7-12.4h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1.1-2.9-4.1-2.9-8.5-2.9zm-69.1 0h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm0 0h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7zm69.1 0h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1.1-2.9-4.1-2.9-8.5-2.9zm-.7 12.4h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm0 0h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm.7-12.4h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1.1-2.9-4.1-2.9-8.5-2.9zm-69.1 0h-9.8v7.1h8.2c6.5 0 10-.9 10-3.4.1-2.5-3.5-3.7-8.4-3.7z" />
            <g transform="translate(49.146 628.558)">
              <g>
                <path d="M171.9 317c-3-3.8-10.4-26.4-15.4-45.1-4.3-16.1-13-25.5-25.2-28.7 7.6-8.9 12-22.7 6.1-44.4-8.2-30.3-29.1-45-54.4-38.2l-57.6 15.3-1.2.3 47.7 176.5 38.5-10.3s-15.6-57.8-18.4-68l2-.4c5.9-1.5 10.2-1.5 13.1.2 5.1 2.9 7.5 11.8 10.2 22l2.1 8.1c2.5 9.8 5.2 20 11.8 28.6l2.6 3.4 44.1-11.7-6-7.6zm-78.5-76.6-9.8 2.6c-2.9-10.6-9.5-35.1-12.4-45.8 4.8-1.2 9.8-2.6 9.8-2.6 4.7-1.2 12.5-3.3 18.2 17.8 1.1 4.2 6.1 24.9-5.8 28zM265.5 174.4c-12.3-45.7-39.8-48.7-60.8-43.1L152.8 145l-6.2 1.6 47.7 176.6 39.4-10.5s-15.4-56.7-18.1-66.9c6.7-1.8 16.9-4.5 16.9-4.5 30.8-8 42.5-31.9 33-66.9zm-44.7 35.2s-7.6 2-14 3.7l-12.3-45.7c5.7-1.5 11.9-3.2 11.9-3.2 6.8-1.8 14.6-1.8 20.7 20.9 2.9 10.9-.1 22.7-6.3 24.3z" />
                <path d="M177.5 399.7h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zm0 0h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zm0 0h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zm69.1 0h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1 0-2.8-4.1-2.9-8.5-2.9zm-.8 12.4h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm0 0h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm.8-12.4h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1 0-2.8-4.1-2.9-8.5-2.9zm-69.1 0h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zm0 0h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zm69.1 0h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1 0-2.8-4.1-2.9-8.5-2.9zm-.8 12.4h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm0 0h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm9.3-9.6c0-2.8-4.1-2.9-8.5-2.9h-7.4v6h8.7c4.2.1 7.2-1 7.2-3.1zm-77.6-2.8h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zM2.3 2.5v440.4h291.3V2.5H2.3zm14.6 15.7h259.9v73H16.9v-73zm-.1 88.9h260v268.4h-260V107.1zM70.3 427H16.9v-35.6h52.2v8.3H37.8v5.1h26.4v8.3H37.8v5.6h32.4v8.3zm36 1c-16.9 0-27.9-5.5-28.3-11.9h20.1c.7 1.4 2 2.5 3.5 2.8 1.9.6 3.9.9 6 .9 5.2 0 8.7-.9 8.7-2.6 0-5.4-36.8-1.7-36.8-15.3 0-7.6 11.7-11.4 27.8-11.4 17.8 0 25.9 5 27.4 11.3h-19.9c-.5-1.3-1.7-2.2-3-2.4-1.8-.5-3.6-.7-5.4-.7-4.6 0-6.7.8-6.7 2.1 0 5.3 36.8 2 36.8 14.9-.2 8.2-12.6 12.3-30.2 12.3zm101.3-1h-21.3c-.8-2-1.2-4.1-1.1-6.2 0-4.7-1.4-6.2-11.2-6.2h-6.4V427h-21v-35.6H177c21.3 0 28.3 3.3 28.3 10.2 0 4.1-3.3 7.5-10.8 8.7 6.8 1.4 10.9 2.2 10.9 9.4 0 4.6-.3 6.2 2.2 6.2v1.1zm41.8 0h-31.2v-35.6h30.6c14.4 0 25.9 1.9 25.9 9 0 3.7-4.3 6.4-8.4 7.7 6.9 1 10.6 4.3 10.6 8.2.1 7.9-10.8 10.7-27.5 10.7zm18-390.2c-.6-1.1-1.5-2-2.6-2.6-2.7-1.5-6.1-1.1-8.4.9-1.2 1.4-2.2 3-2.6 4.8-.6 2.2-.9 4.5-1 6.8-.1 2.5-.2 5.1-.2 7.7 0 3.9.1 7.3.3 10 .1 2.3.5 4.6 1.3 6.8.5 1.6 1.5 2.9 2.9 3.8 1.6.9 3.4 1.3 5.2 1.2.6 0 1.2 0 1.8-.1.7-.1 1.3-.2 2-.4s1.3-.3 1.9-.5c.6-.1 1-.3 1.4-.4v-21h-8v6.4h2.8v9.2l-1.2.6c-.4.1-.9.2-1.3.2-.7 0-1.3-.2-1.8-.6-.6-.6-1-1.4-1.1-2.2-.3-1.5-.5-3.1-.6-4.6-.1-2-.2-4.6-.2-7.9v-5.8c0-1.6.1-3.3.4-4.9.1-1.2.5-2.3 1-3.4.3-.8 1-1.2 1.9-1.2.6 0 1.2.2 1.6.6.4.5.8 1 1 1.6.2.8.4 1.5.4 2.3.1.9.1 1.8.1 2.8h5.1c.1-1.9-.1-3.9-.4-5.8-.4-1.6-.9-3.1-1.7-4.3zm-21.6 375.3h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm9.3-9.6c0-2.8-4.1-2.9-8.5-2.9h-7.4v6h8.7c4.2.1 7.2-1 7.2-3.1zM243.7 62.7 237.1 34h-7v41.5h4.8V45.1h.1l6.8 30.3h6.8V34h-4.8v28.7zm-23.2 12.7h5.2V34h-5.2v41.4zm-5.7-36c-.4-1.5-1.3-2.9-2.5-4-1.2-1-2.6-1.4-4.1-1.4h-8.6v41.5h8.4c1.3.1 2.6-.3 3.7-1.1 1-.8 1.8-1.8 2.4-2.9.7-1.3 1.1-2.7 1.4-4.1.3-1.5.5-3.1.6-4.6.1-1.6.2-3.1.2-4.5v-3.8c0-3.2-.1-6.1-.3-8.7-.1-2.2-.5-4.3-1.2-6.4zm-24.5 23.3L183.7 34h-7v41.5h4.8V45.1h.1l6.8 30.3h6.8V34h-4.8v28.7zm-12.8 337h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zM164.6 56.9h7.7v-6.4h-7.7V40.4h8.3V34h-13.5v41.5h13.8v-6.4h-8.6V56.9zm-9.8-19.6c-.5-1-1.1-1.9-2-2.5-.9-.6-2-.9-3-.8h-9.3v41.5h5.2V58.6h3.8c1.3.1 2.6-.4 3.6-1.2.9-.8 1.7-1.9 2.1-3.1.5-1.3.8-2.6.9-4 .2-1.3.2-2.6.2-3.9 0-1.7-.1-3.4-.4-5.1-.1-1.4-.5-2.7-1.1-4zm-28.5-.5c-.6-1.1-1.5-2-2.6-2.6-1-.6-2.2-.9-3.4-.9-1.8-.1-3.6.6-5 1.8-1.2 1.4-2.1 3-2.6 4.8-.6 2.2-1 4.5-1 6.8-.1 2.5-.2 5.1-.2 7.7 0 3.9.1 7.3.3 10 .1 2.3.5 4.6 1.3 6.8.5 1.6 1.5 2.9 2.9 3.8 1.6.9 3.4 1.3 5.2 1.2.6 0 1.2 0 1.8-.1.7-.1 1.3-.2 2-.4s1.3-.3 1.9-.5c.6-.1 1.1-.3 1.4-.4v-21h-8v6.4h2.8v9.2l-1.2.6c-.4.1-.9.2-1.3.2-.7 0-1.3-.2-1.8-.6-.6-.6-1-1.4-1.1-2.2-.3-1.5-.5-3.1-.6-4.6-.1-2-.2-4.6-.2-7.9 0-2 0-3.9.1-5.8 0-1.6.1-3.3.4-4.9.1-1.2.5-2.3 1-3.4.3-.8 1-1.2 1.9-1.2.6 0 1.2.2 1.6.6.4.5.8 1 .9 1.6.2.8.4 1.5.4 2.3.1.9.1 1.8.1 2.8h5.2c.1-1.9 0-3.9-.4-5.8-.5-1.6-1-3.1-1.8-4.3zm-23.7 25.9L95.9 34h-7v41.5h4.8V45.1h.1l6.7 30.3h6.8V34h-4.8v28.7zM79.4 75.4h5.2V34h-5.2v41.4zM60.3 40.9H66v34.6h5.2V40.9H77V34H60.3v6.9zm-12-6.9-6.9 41.5h5.1l1.4-9.2H55l1.4 9.2h5.5L55.1 34h-6.8zm-8.8 35.7c0-1.3-.1-2.5-.1-3.7v-2.8c0-1.5-.1-3-.5-4.4-.3-.9-.7-1.7-1.3-2.4-.4-.5-.9-.8-1.5-1-.5-.2-.9-.3-1.2-.3V55c1.7-.5 3-1.8 3.5-3.4.8-2.2 1.1-4.4 1-6.7.2-2.8-.4-5.6-1.6-8.1-.8-1.7-2.4-2.7-4.2-2.8H24v41.5h5.2V58.3h1.4c.8 0 1.6.2 2.2.8.5.5.9 1.2 1.1 2 .2 1 .4 1.9.4 2.9v7.6c0 1.3.2 2.7.5 4H40c-.2-.7-.3-1.5-.3-2.2-.1-1.3-.1-2.4-.2-3.7zm138 330h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zm69.1 0h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1 0-2.8-4.1-2.9-8.5-2.9zm-.8 12.4h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm0 0h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm.8-12.4h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1 0-2.8-4.1-2.9-8.5-2.9zm-69.1 0h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zm0 0h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7zm69.1 0h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1 0-2.8-4.1-2.9-8.5-2.9zm-.8 12.4h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm0 0h-6.7v6.6h9.1c5.2 0 9.1-.6 9.1-3.3.1-3.1-4.8-3.3-11.5-3.3zm.8-12.4h-7.4v6h8.7c4.2 0 7.2-1.1 7.2-3.1 0-2.8-4.1-2.9-8.5-2.9zm-69.1 0h-9.8v7.1h8.2c6.5 0 10-1 10-3.4 0-2.5-3.5-3.7-8.4-3.7z" />
              </g>
              <path d="M39.7 73.2c0 .8.1 1.5.3 2.2h-5.1c-.3-1.3-.5-2.6-.5-4v-7.6c0-1-.1-1.9-.4-2.9-.2-.8-.6-1.4-1.1-2-.6-.5-1.4-.8-2.2-.8h-1.4v17.2h-5.2V34h9.6c1.8 0 3.5 1.1 4.2 2.8 1.2 2.5 1.7 5.3 1.6 8.1.1 2.3-.3 4.6-1 6.7-.5 1.7-1.9 3-3.5 3.4v.1c.3.1.7.2 1.2.3.6.2 1.1.5 1.5 1 .6.7 1 1.5 1.3 2.4.4 1.4.6 2.9.5 4.4V66c0 1.2 0 2.4.1 3.7 0 1.3 0 2.4.1 3.5zM55.1 34l6.8 41.4h-5.5L55 66.2h-7l-1.5 9.2h-5.1L48.3 34zM60.3 34H77v6.9h-5.8v34.5H66V40.9h-5.7zM79.4 34h5.2v41.5h-5.2zM102.6 34h4.8v41.4h-6.8l-6.7-30.3h-.1v30.3h-4.9V34h7l6.6 28.7h.1zM127.9 40.9c.4 1.9.5 3.8.4 5.8h-5.2c0-1 0-1.9-.1-2.8 0-.8-.2-1.5-.4-2.3-.2-.6-.5-1.1-.9-1.6-.5-.4-1-.6-1.6-.6-.8 0-1.5.5-1.9 1.2-.5 1.1-.8 2.2-1 3.4-.2 1.6-.3 3.3-.4 4.9 0 1.9-.1 3.8-.1 5.8 0 3.2.1 5.9.2 7.9.1 1.5.2 3.1.6 4.6.1.8.5 1.6 1.1 2.2.5.4 1.2.6 1.8.6.4 0 .9-.1 1.3-.2.4-.2.9-.3 1.2-.6V60h-2.8v-6.4h8v21c-.3.1-.8.2-1.4.4-.6.2-1.2.3-1.9.5-.7.1-1.3.3-2 .4-.6.1-1.2.1-1.8.1-1.8.1-3.6-.3-5.2-1.2-1.4-.9-2.4-2.2-2.9-3.8-.8-2.2-1.2-4.5-1.3-6.8-.2-2.8-.3-6.1-.3-10 0-2.6.1-5.2.2-7.7.1-2.3.4-4.6 1-6.8.5-1.8 1.3-3.4 2.6-4.8 1.3-1.3 3.1-1.9 5-1.8 1.2 0 2.4.3 3.4.9 1.1.6 2 1.5 2.6 2.6 1 1.4 1.5 2.9 1.8 4.3zM156 41.3c.2 1.7.4 3.4.4 5.1 0 1.3-.1 2.6-.2 3.9-.1 1.4-.4 2.7-.9 4-.4 1.2-1.2 2.2-2.1 3.1-1 .9-2.3 1.3-3.6 1.2h-3.8v16.9h-5.2V34h9.3c1.1 0 2.1.3 3 .8.9.7 1.6 1.5 2 2.5.5 1.3.9 2.6 1.1 4zM164.6 69.1h8.7v6.3h-13.8V34H173v6.4h-8.4v10.2h7.7v6.3h-7.7zM190.3 34h4.8v41.4h-6.8l-6.7-30.3h-.1v30.3h-4.8V34h7l6.5 28.7h.1zM216 45.8c.2 2.5.3 5.4.3 8.7v3.8c0 1.4-.1 2.9-.2 4.5s-.3 3.1-.6 4.6c-.3 1.4-.7 2.8-1.4 4.1-.6 1.1-1.4 2.1-2.4 2.9-1.1.8-2.4 1.2-3.7 1.1h-8.4V34h8.6c1.5-.1 3 .4 4.1 1.4 1.2 1.1 2 2.5 2.5 4 .7 2.1 1.1 4.2 1.2 6.4zM220.5 34h5.2v41.5h-5.2zM243.7 34h4.8v41.4h-6.8L235 45.1h-.1v30.3h-4.8V34h7l6.5 28.7h.1zM258 49v5.8c0 3.2 0 5.9.2 7.9 0 1.6.2 3.1.6 4.6.1.8.5 1.6 1.1 2.2.5.4 1.2.6 1.8.6.5 0 .9-.1 1.3-.2.4-.2.8-.3 1.2-.6v-9.2h-2.8v-6.4h8v21c-.4.1-.8.2-1.4.4-.6.2-1.2.3-1.9.5-.7.1-1.3.3-2 .4-.6.1-1.2.1-1.8.1-1.8.1-3.6-.3-5.2-1.2-1.4-.9-2.4-2.2-2.9-3.8-.8-2.2-1.2-4.5-1.3-6.8-.2-2.8-.3-6.1-.3-10 0-2.6 0-5.2.2-7.7.1-2.3.4-4.6 1-6.8.5-1.8 1.4-3.4 2.6-4.8 2.3-2 5.7-2.4 8.4-.9 1.1.6 2 1.5 2.6 2.6.8 1.3 1.3 2.7 1.5 4.2.3 1.9.5 3.8.4 5.8h-5.1c0-1 0-1.9-.1-2.8 0-.8-.2-1.5-.4-2.3-.2-.6-.5-1.1-1-1.6-.5-.4-1-.6-1.6-.6-.8 0-1.5.5-1.9 1.2-.5 1.1-.8 2.2-1 3.4-.1 1.8-.2 3.4-.2 5zM171.9 317c-3-3.8-10.4-26.4-15.4-45.1-4.3-16.1-13-25.5-25.2-28.7 7.6-8.9 12-22.7 6.1-44.4-8.2-30.3-29.1-45-54.4-38.2l-57.6 15.3-1.2.3 47.7 176.5 38.5-10.3s-15.6-57.8-18.4-68l2-.4c5.9-1.5 10.2-1.5 13.1.2 5.1 2.9 7.5 11.8 10.2 22l2.1 8.1c2.5 9.8 5.2 20 11.8 28.6l2.6 3.4 44.1-11.7-6-7.6zm-78.5-76.6-9.8 2.6c-2.9-10.6-9.5-35.1-12.4-45.8 4.8-1.2 9.8-2.6 9.8-2.6 4.7-1.2 12.5-3.3 18.2 17.8 1.1 4.2 6.1 24.9-5.8 28zM265.5 174.4c-12.3-45.7-39.8-48.7-60.8-43.1L152.8 145l-6.2 1.6 47.7 176.6 39.4-10.5s-15.4-56.7-18.1-66.9c6.7-1.8 16.9-4.5 16.9-4.5 30.8-8 42.5-31.9 33-66.9zm-44.7 35.2s-7.6 2-14 3.7l-12.3-45.7c5.7-1.5 11.9-3.2 11.9-3.2 6.8-1.8 14.6-1.8 20.7 20.9 2.9 10.9-.1 22.7-6.3 24.3z" />
              <g transform="translate(10.494 60.641)">
                <path d="M161.4 256.4c-3-3.8-10.4-26.4-15.4-45.1-4.3-16.1-13-25.5-25.2-28.7 7.6-8.9 12-22.7 6.1-44.4-8.2-30.3-29.1-45-54.4-38.2l-57.6 15.3-1.2.3 47.7 176.5 38.5-10.3s-15.6-57.8-18.4-68l1.9-.5c5.9-1.5 10.2-1.5 13.1.2 5.1 2.9 7.5 11.8 10.2 22l2.1 8.1c2.5 9.8 5.2 20 11.8 28.6l2.6 3.4 44.1-11.7-5.9-7.5zm-78.5-76.6-9.8 2.6c-2.9-10.6-9.5-35.1-12.4-45.8 4.8-1.2 9.8-2.6 9.8-2.6 4.7-1.2 12.5-3.3 18.2 17.8 1.1 4.2 6.1 24.8-5.8 28z" />
                <path d="M255 113.8c-12.3-45.7-39.8-48.7-60.8-43.1l-51.9 13.8-6.2 1.6 47.7 176.6 39.4-10.5s-15.4-56.7-18.1-66.9c6.7-1.8 16.9-4.5 16.9-4.5 30.8-8.2 42.5-32 33-67zM210.3 149s-7.6 2-14 3.7L184 107c5.7-1.5 11.9-3.2 11.9-3.2 6.8-1.8 14.6-1.8 20.7 20.9 2.9 10.9-.1 22.6-6.3 24.3z" />
              </g>
              <g transform="translate(10.465 14.724)">
                <path d="M29.2 58.5c-.1-1.1-.1-2.2-.2-3.5 0-1.3-.1-2.5-.1-3.7v-2.8c0-1.5-.1-3-.5-4.4-.3-.9-.7-1.7-1.3-2.4-.4-.5-.9-.8-1.5-1-.5-.2-.9-.3-1.2-.3v-.1c1.7-.5 3-1.8 3.5-3.4.8-2.2 1.1-4.4 1-6.7.2-2.8-.4-5.6-1.6-8.1-.8-1.7-2.4-2.7-4.2-2.8h-9.6v41.5h5.2V43.6h1.4c.8 0 1.6.2 2.2.8.5.5.9 1.2 1.1 2 .2 1 .4 1.9.4 2.9v7.6c0 1.3.2 2.7.5 4h5.1c0-.9-.1-1.7-.2-2.4zm-5.4-27.4c0 .7 0 1.3-.1 2.1-.1.7-.2 1.3-.4 2-.2.5-.5 1-.8 1.5-.3.4-.8.6-1.3.6h-2.3V25.8h2.3c.8 0 1.6.5 1.9 1.2.6 1.2.8 2.6.7 4.1z" />
                <path d="M44.7 19.3h-6.8L31 60.7h5.1l1.4-9.2h7.1l1.4 9.2h5.5l-6.8-41.4zm-6.2 25.9 2.4-17.9h.1l2.5 17.9h-5z" />
                <path d="M66.5 19.3v6.8h-5.7v34.6h-5.2V26.1h-5.8v-6.9zM68.9 19.3h5.2v41.5h-5.2zM97 19.3v41.4h-6.8l-6.8-30.3h-.1v30.3h-4.8V19.3h7L92.1 48V19.3zM106.4 34.3c0 1.9-.1 3.8-.1 5.8 0 3.2.1 5.9.2 7.9.1 1.5.2 3.1.6 4.6.1.8.5 1.6 1.1 2.2.5.4 1.2.6 1.8.6.4 0 .9-.1 1.3-.2.4-.2.9-.3 1.2-.6v-9.2h-2.8V39h8v21c-.3.1-.8.2-1.4.4-.6.2-1.2.3-1.9.5-.7.1-1.3.3-2 .4-.6.1-1.2.1-1.8.1-1.8.1-3.6-.3-5.2-1.2-1.4-.9-2.4-2.2-2.9-3.8-.8-2.2-1.2-4.5-1.3-6.8-.2-2.8-.3-6.1-.3-10 0-2.6.1-5.2.2-7.7.1-2.3.4-4.6 1-6.8.5-1.8 1.3-3.4 2.6-4.8 1.3-1.3 3.1-1.9 5-1.8 1.2 0 2.4.3 3.4.9 1.1.6 2 1.5 2.6 2.6.8 1.3 1.3 2.7 1.5 4.2.4 1.9.5 3.8.4 5.8h-5.2c0-1 0-1.9-.1-2.8 0-.8-.2-1.5-.4-2.3-.2-.6-.5-1.1-.9-1.6-.5-.4-1-.6-1.6-.6-.8 0-1.5.5-1.9 1.2-.5 1.1-.8 2.2-1 3.4 0 1.7-.1 3.4-.1 5z" />
                <path d="M145.5 26.6c-.2-1.4-.6-2.7-1.2-3.9-.5-1-1.1-1.9-2-2.5-.9-.6-2-.9-3-.8H130v41.5h5.2V43.8h3.8c1.3.1 2.6-.4 3.6-1.2.9-.8 1.7-1.9 2.1-3.1.5-1.3.8-2.6.9-4 .2-1.3.2-2.6.2-3.9.1-1.7 0-3.4-.3-5zm-5.1 7.3c-.1.6-.3 1.2-.5 1.8-.2.5-.5.9-.8 1.3-.3.3-.7.5-1.1.5h-2.9V25.6h2.6c.5 0 1 .1 1.4.5.4.4.7.8.9 1.3.2.7.4 1.3.5 2 .1.8.1 1.6.1 2.4 0 .8 0 1.5-.2 2.1z" />
                <path d="M162.8 54.3v6.4H149V19.3h13.5v6.3h-8.3v10.2h7.7v6.4h-7.7v12.1zM184.7 19.3v41.4h-6.8l-6.8-30.3h-.1v30.3h-4.8V19.3h7l6.6 28.7h.1V19.3z" />
                <path d="M205.5 31.1c-.1-2.2-.5-4.4-1.2-6.5-.4-1.5-1.3-2.9-2.5-4-1.2-1-2.6-1.4-4.1-1.4h-8.6v41.5h8.4c1.3.1 2.6-.3 3.7-1.1 1-.8 1.8-1.8 2.4-2.9.7-1.3 1.1-2.7 1.4-4.1.3-1.5.5-3.1.6-4.6.1-1.6.2-3.1.2-4.5v-3.8c.1-3.2 0-6-.3-8.6zm-5.1 15.5c-.1 1.5-.2 3-.6 4.5-.2.9-.5 1.8-1.1 2.5-.5.5-1.2.8-1.9.8h-2.5V25.6h2.7c.9 0 1.7.4 2.1 1.2.6 1 .9 2 1.1 3.2.3 1.5.4 3 .4 4.6v5.5c0 2.5-.1 4.7-.2 6.5z" />
                <path d="M210 19.3h5.2v41.5H210zM238.1 19.3v41.4h-6.9l-6.7-30.3h-.1v30.3h-4.8V19.3h7l6.6 28.7V19.3zM247.5 34.3v5.8c0 3.2 0 5.9.2 7.9 0 1.6.2 3.1.6 4.6.1.8.5 1.6 1.1 2.2.5.4 1.2.6 1.8.6.5 0 .9-.1 1.3-.2.4-.2.8-.3 1.2-.6v-9.2h-2.8V39h8v21c-.4.1-.8.2-1.4.4-.6.2-1.2.3-1.9.5-.7.1-1.3.3-2 .4-.6.1-1.2.1-1.8.1-1.8.1-3.6-.3-5.2-1.2-1.4-.9-2.4-2.2-2.9-3.8-.8-2.2-1.2-4.5-1.3-6.8-.2-2.8-.3-6.1-.3-10 0-2.6 0-5.2.2-7.7.1-2.3.4-4.6 1-6.8.5-1.8 1.4-3.4 2.6-4.8 2.3-2 5.7-2.4 8.4-.9 1.1.6 2 1.5 2.6 2.6.8 1.3 1.3 2.7 1.5 4.2.3 1.9.5 3.8.4 5.8h-5.1c0-1 0-1.9-.1-2.8 0-.8-.2-1.5-.4-2.3-.2-.6-.5-1.1-1-1.6-.5-.4-1-.6-1.6-.6-.8 0-1.5.5-1.9 1.2-.5 1.1-.8 2.2-1 3.4-.1 1.7-.2 3.4-.2 5z" />
              </g>
            </g>
          </g>
        </g>
      </switch>
    </svg>
  );
}
