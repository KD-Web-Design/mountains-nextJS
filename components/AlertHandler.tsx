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
    }, 4000);
  }
  return (
    <>
      <div className="mb-6">
        <Button onClick={handleClick}>Click me !</Button>
        {<AlertDemo alertActive={alertActive} />}
      </div>
    </>
  );
}
