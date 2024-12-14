"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvasRevealEffect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-neutral-950 w-full gap-4 mx-auto px-0 max-w-7xl">
        <Card title="Russian born, Spanish Raised and UK based Engineer and Designer." 
        icon={<AceternityIcon name="Ruslan Sanakoev" title="Full Stack Developer"/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            colors={[
              [0, 73, 183],
            ]}
          />
        </Card>
        <Card title="Olav holds a Master’s in Computer Science and has also studied economics, administration, and drama. His expertise in computer science allows him to integrate technical skills with broader perspectives, making him adept at seeing the bigger picture in various contexts. This unique combination positions Olav as a versatile and innovative thinker in both technology and the arts." 
        icon={<AceternityIcon name="Olav Nuland Sole" title="Software Engineer"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [50, 50, 50],

            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-white dark:bg-neutral-950" />
        </Card>
        <Card title="A passionate Full Stack Developer with a diverse background, originally from Venezuela and currently residing in the vibrant tech community of Spain. With a strong foundation in both front-end and back-end technologies, I create seamless, user-friendly experiences from concept to implementation." 
        icon={<AceternityIcon name="Alfonso Villanueva" title="Full Stack Developer" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-slate-600"
            colors={[
              [249, 207, 9]
            ]}
          />
        </Card>
        <Card title="Andres is an art director and motion designer from Venezuela currenly living in Paris. He is experienced working on Branding, Logo Design, Custom Lettering, Packaging and Motion Graphics. With over a decade of experience. Andres has collaborated with awesome folks in the industry such as Studio Chong, Golden Wolf, Anomaly, BBDO and JKR" icon={<AceternityIcon name="Andres Clerc" title="Graphic / Motion designer" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-600"
            colors={[
              [0, 165, 183],
              [0, 0, 0]
            ]}
          />
        </Card>
        <Card title="Venezuelan-born, UK-based Marketing and Public Relations professional with years of experience fostering positive relationships between organizations and media. Committed to maintaining the reputation of institutions, strengthening consumer loyalty, and establishing credibility with clients." 
        icon={<AceternityIcon name="Valery Villanueva" title="Digital Marketing" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow-600"
            colors={[
              [0, 0, 0]
            ]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[20rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: .2 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
      </div>
      <div className="relative z-20">
        <h2 className="text-black dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

interface AceternityIconProps {
  name: string;
  title: string;
}

const AceternityIcon: React.FC<AceternityIconProps> = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="text-black dark:text-white text-xl mb-4">
        {props.name}
      </h2>
      <p className="text-black dark:text-white text-xl mb-4">
        {props.title}
      </p>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
