"use client";

import { useEffect } from "react";
import { testServerAction2, testServerAction3 } from "./testSA";

export default function RunServerAction() {
  useEffect(() => {
    (async () => {
      console.log("ABOUT TO do test ");
      const message = await testServerAction2();
      console.log("MESSAGE: ", message);
      const msg2 = await testServerAction3();
      console.log("MESSAGE2: ", msg2);
    })();
  }, []);

  return null;
}
