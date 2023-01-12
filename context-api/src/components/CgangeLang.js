import React from "react";
import {useLang} from "../contexts/LangContext";

function CgangeLang() {
  const { lang, setLang } = useLang();

  return (
    <div>
      Active Languge : {lang}
      <br />
      <button onClick={() => setLang("az")}>Az</button>
      <button onClick={() => setLang("en")}>En</button>
      <button onClick={() => setLang("ru")}>Ru</button>
    </div>
  );
}

export default CgangeLang;
