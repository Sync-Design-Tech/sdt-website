import { cn } from '@/lib/utils';
import React from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconCode,
  IconTableColumn,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { CardHoverEffectDemo } from '../cardHover/card';

export function BentoGridDemo() {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.h6
          className="text-gray-700 dark:text-neutral-300"
          style={{
            width: '100%',
            paddingBottom: '0rem',
            paddingTop: '1rem',
            textAlign: 'center',
          }}
        >
          {'Companies we work with'.split(' ').map((word, index) => (
            <motion.span
              initial={{
                filter: 'blur(10px)',
                opacity: 0,
                y: 10,
              }}
              animate={{
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="inline-block justify-center text-center"
              key={index}
              style={{ fontSize: '1.4rem' }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h6>
        <BentoGrid className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </AnimatePresence>
  );
}

interface SkeletonProps {
  url: string;
  darkUrl: string;
  alt: string;
  link: string;
  idx: number;
  title: string;
  description: string;
  newTab?: boolean;
  disableLink?: boolean;
}

const Skeleton = (props: SkeletonProps) => {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1">
      <CardHoverEffectDemo client={props} />
    </div>
  );
};

const items = [
  {
    title: 'Main10',
    description: 'Property Management Software',
    header: (
      <Skeleton
        url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/main10/Main10+Logo+Icon+Blue.png"
        darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/main10/Main10+Logo+Icon+White.png"
        alt="s3-logo"
        link="https://app.main-10.com/"
        idx={0}
        title={''}
        description={''}
        newTab={true}
      />
    ),
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    idx: 0,
  },
  {
    title: 'S3 Maintenance Services',
    description: 'Construction',
    header: (
      <Skeleton
        url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/logo-emblem--dark.png"
        darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/logo-emblem.png"
        alt="s3-logo"
        link="https://s3maintenance.co.uk/"
        idx={0}
        title={''}
        description={''}
        newTab={true}
      />
    ),
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    idx: 0,
  },

  {
    title: 'Xepak',
    description: 'Construction',
    header: (
      <Skeleton
        url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/qxepak.png"
        darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/qxepak-08.png"
        alt="xepak-logo"
        link="/"
        idx={1}
        title={''}
        description={''}
        newTab={true}
        disableLink={true}
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    idx: 1,
  },
  {
    title: 'Made4Living',
    description: 'Construction & Design',
    header: (
      <Skeleton
        url="https://made4living.co.uk/static/media/logo-full.53edbd83bc6f955461c4.png"
        darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/m4l-white.png"
        alt="m4l-logo"
        link="https://made4living.co.uk/"
        idx={2}
        title={''}
        description={''}
        newTab={true}
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    idx: 2,
  },
  {
    title: 'My Coffee Marbella',
    description: 'Food & Beverage',
    header: (
      <Skeleton
        url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/favicon.png"
        darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/favicon.png"
        alt="mc-logo"
        link="/"
        idx={3}
        title={''}
        description={''}
        newTab={true}
        disableLink={true}
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    idx: 3,
  },
  {
    title: 'Cassvensi',
    description: 'Luxury Bedding',
    header: (
      <Skeleton
        url="https://cassvensi.co.uk/wp-content/uploads/2025/02/Logo-Icon-Dark-Blue.png"
        darkUrl="https://cassvensi.co.uk/wp-content/uploads/2025/02/Logo-Icon-Dark-Blue.png"
        alt="mc-logo"
        link="https://cassvensi.co.uk/?v=7885444af42e"
        idx={3}
        title={''}
        description={''}
        newTab={true}
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    idx: 3,
  },
  // {
  //   title: "HCGB",
  //   description: "Real Estate",
  //   header: <Skeleton url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/download.png" darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/download-white.png" alt="logo-5" link="/" idx={4} />,
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  //   idx: 4,
  // },
];
