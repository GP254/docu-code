import React from "react";
import GhSearch from "./scenes/gh-search.scene";

import { WelcomeMessage } from "./get-started.styles";

const constants = {
  HEADING: "Welcome To DocuCode.io"
};

const GetStarted = () => (
  <div className="text-center p-5">
    <WelcomeMessage className="mt-5">{constants.HEADING}</WelcomeMessage>
    <GhSearch />
  </div>
);

export default GetStarted;
