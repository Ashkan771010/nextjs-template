import React from "react";

import { IProps } from "./interface";

import { BulletWrapper } from "./style";

const Bullet: React.FC<IProps> = ({ number = 1 }) => {
  return <BulletWrapper>{number}</BulletWrapper>;
};

export default Bullet;
