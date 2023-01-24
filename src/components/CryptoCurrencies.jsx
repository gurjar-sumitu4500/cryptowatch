import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

function CryptoCurrencies() {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  console.log("cryptos======>>", cryptos);

  return <div>Cryptocurrencies</div>;
}

export default CryptoCurrencies;
