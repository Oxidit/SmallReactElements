import React, { useEffect, useState } from "react";
import "./styles.css";
import PriceCurrency from "./PriceCurrency";

//import BASE_URL from "./API.json";

//const ACCESS_KEY = "5c2a72201d2268475de3a3ca842ec965"
//это я зарегистрировалась у них
// const BASE_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=5c2a72201d2268475de3a3ca842ec965`;
const BASE_URL = `https://8bbmz.csb.app/API.json?`;
function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();

  const [rates, setRates] = useState({});

  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate || 0;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  toAmount = (fromAmount / rates[fromCurrency]) * rates[toCurrency];

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
        setRates({ EUR: 1, ...data.rates });
      });
    // .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      //http://api.exchangeratesapi.io/v1/convert?access_key=5c2a72201d2268475de3a3ca842ec965&from=USD&to=EUR&amount=100
      fetch(`${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <td colSpan="2">
              <h1>Currency Converter</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>{fromCurrency}</p>
            </td>
            <td>
              <p>{toCurrency}</p>
            </td>
          </tr>

          <tr>
            <td>
              <p>{amount}</p>
            </td>
            <td>
              <p>{toAmount}</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <p>{exchangeRate}</p>
            </td>
          </tr>

          <tr>
            <td>
              <PriceCurrency
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
              />
            </td>
            <td>
              <PriceCurrency
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={(e) => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <p>{JSON.stringify(rates, null, " ")}</p>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
export default App;
