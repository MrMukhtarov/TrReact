import React, { memo } from "react";

function Header({ increment }) {

  console.log('Header component re-render');
  return (
    <div>
      Header
      <br />
      <button onClick={increment}>Plus</button>
    </div>
  );
}

export default memo(Header);
