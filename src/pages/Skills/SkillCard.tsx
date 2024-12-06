"use client";

import React from "react";
import { Tooltip } from "antd";
import Image from "next/image";

interface Skill {
  name: string;
  level: string;
  image: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Tooltip placement="top" title={skill.level} color="#21184E">
      <div className="w-24 h-24 flex flex-col justify-center items-center border border-solid border-transparent hover:border-primary bg-white hover:bg-opacity-10 p-2 shadow rounded-xl cursor-help">
        <Image src={skill.image} alt={`${skill.name} Icon`} width={48} height={48} className="mb-1" />
        <p className="text-xs text-typography-muted font-medium">{skill.name}</p>
      </div>
    </Tooltip>
  );
};

export default SkillCard;
