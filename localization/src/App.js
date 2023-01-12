import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useState } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "3 Yeni Mesajınız var",
  },
  "en-US": {
    title: "Hello World",
    description: "You have 3 new messages",
  },
};

function App() {
  let defaultLocale = window.navigator.language;
  console.log(defaultLocale);
  const [locale, setLocale] = useState(defaultLocale);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" />
        </p>

        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
