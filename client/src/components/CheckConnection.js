import React, { useState, useEffect } from "react";
import Server from "../api/server";

const CheckConnection = () => {
  const [status, setStatus] = useState(null);

  const getStatus = async () => {
    const response = await Server.get("/");
    const { data } = response;
    const { msg } = data;
    setStatus(msg);
  };
  useEffect(() => {
    getStatus();
  }, []);

  return { status } ? <p>{status}</p> : null;
};

export default CheckConnection;
