import React from "react";

type RenderProps = {
  value: boolean;
  children?: React.ReactNode;
};

const RenderIf: React.FC<RenderProps> = ({ value, children }) =>
  value ? children : null;

export default RenderIf;
