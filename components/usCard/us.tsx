'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './canvasRevealEffect';

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 bg-white px-0 py-10 dark:bg-neutral-950 lg:flex-row lg:flex-wrap">
        <Card
          title="Ruslan, a Russian-born, Spanish-raised engineer and designer based in the UK, possesses a profound passion for crafting comprehensive systems. His work ensures seamless integration and operation across diverse platforms, all while maintaining a keen eye for detail and aesthetics."
          icon={<AceternityIcon name="Ruslan Sanakoev" title="Director" />}
        >
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" colors={[[0, 73, 183]]} />
        </Card>
        <Card
          title="Alvina is a Front-End Developer and Graphic Artist from Armenia, blending her strong technical skills with a sharp artistic vision. She excels at creating intuitive, visually striking interfaces that not only function seamlessly but also tell a brand’s story through design."
          icon={<AceternityIcon name="Alvina Harutyunyan" title="Front-End Developer" />}
        >
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-purple-700" colors={[[255, 215, 0]]} />
        </Card>
        <Card
          title="Gabriel is a Software Engineer and QA Tester currently based in Scotland. With a strong eye for detail and a structured approach to problem solving, he ensures that applications meet the highest standards of quality, reliability, and user experience."
          icon={<AceternityIcon name="Gabriel Villanueva" title="Junior Software Engineer" />}
        >
          <CanvasRevealEffect animationSpeed={2.5} containerClassName="bg-blue-800" colors={[[255, 255, 255]]} />
        </Card>
        <Card
          title="Jagath is a Computer Science graduate with experience across multiple product-based startups. He has worked as a Front-End Engineer and App Developer, building scalable applications with a focus on performance and usability. In addition, he brings strong expertise in SEO, helping products gain visibility and reach wider audiences."
          icon={<AceternityIcon name="Jagath Jijo" title="Software Engineer & SEO specialist" />}
        >
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-green-700" colors={[[255, 255, 255]]} />
        </Card>
        <Card
          title="A passionate Full Stack Developer with a diverse background, originally from Venezuela and currently residing in the vibrant tech community of Spain. With a strong foundation in both front-end and back-end technologies, I create seamless, user-friendly experiences from concept to implementation."
          icon={<AceternityIcon name="Alfonso Villanueva" title="Full Stack Developer" />}
        >
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-slate-600" colors={[[249, 207, 9]]} />
        </Card>
        <Card
          title="Andres is an art director and motion designer from Venezuela currenly living in Paris. He is experienced working on Branding, Logo Design, Custom Lettering, Packaging and Motion Graphics. With over a decade of experience. Andres has collaborated with awesome folks in the industry such as Studio Chong, Golden Wolf, Anomaly, BBDO and JKR"
          icon={<AceternityIcon name="Andres Clerc" title="Graphic / Motion designer" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-600"
            colors={[
              [0, 165, 183],
              [0, 0, 0],
            ]}
          />
        </Card>
        <Card
          title="Marketing and Public Relations professional with years of experience fostering positive relationships between organizations and media. Committed to maintaining the reputation of institutions, strengthening consumer loyalty, and establishing credibility with clients."
          icon={<AceternityIcon name="Mateo Jackson" title="PR / Digital Marketing" />}
        >
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-yellow-600" colors={[[0, 0, 0]]} />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, icon, children }: { title: string; icon: React.ReactNode; children?: React.ReactNode }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-[20rem] w-full max-w-sm items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} className="absolute inset-0 h-full w-full">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute mx-auto flex w-full items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
        {icon}
      </div>
      <div className="relative z-20">
        <h2 className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-100 dark:text-white">
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 className="mb-4 text-xl text-black dark:text-white">{props.name}</h2>
      <p className="mb-4 text-xl text-black dark:text-white">{props.title}</p>
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
