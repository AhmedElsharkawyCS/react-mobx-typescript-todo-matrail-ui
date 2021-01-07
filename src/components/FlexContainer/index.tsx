import React from "react";
import { IProps } from "../../interfaces/index";

const FlexContainer = ({ children, display = "flex", justifyContent = "space-between", alignItems = "center" }: IProps) => {
  return <div style={{ display, justifyContent, alignItems }}>{children}</div>;
};

export default FlexContainer;
