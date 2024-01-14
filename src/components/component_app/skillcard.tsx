import { serifDisplay } from "@/app/fonts";
import { Skill } from "@/data/data";
import {
  Card,
  CardHeader,
  Center,
  Divider,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card height={120} width={180} variant="outline" p={4} align={"center"} borderWidth={0}>
      <Image height={20} src={skill.image} alt={skill.name} />
      <CardHeader>
        <Heading fontSize="sm" fontFamily={serifDisplay.style.fontFamily} textAlign={"center"}>
          {skill.name}
        </Heading>
      </CardHeader>
    </Card>
  );
};

export { SkillCard, type Skill };
