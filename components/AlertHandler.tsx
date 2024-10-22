"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { AlertDemo } from "./AlertDemo";

export default function AlertHandler() {
  const [alertActive, setAlertActive] = useState<boolean>(false);

  function handleClick() {
    setAlertActive(true);
    setTimeout(() => {
      setAlertActive(false);
    }, 5000);
  }
  return (
    <>
      <div className="inline-flex">
        <Button onClick={handleClick}>Go Climbing</Button>
        {<AlertDemo alertActive={alertActive} />}
      </div>
    </>
  );
}
