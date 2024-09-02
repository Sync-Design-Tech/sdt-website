import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconCode,
  IconTableColumn,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from 'next-themes';

export function BentoGridDemo() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h6 style={{width:"100%", paddingBottom:"1.6rem", textAlign:"center"}}>
            {"Companies we work with"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="inline-block justify-center text-center"
                  key={index}
                  style={{ fontSize: "1.4rem" }}
                >
                  {word}&nbsp;
            </motion.span>
              ))}
        </motion.h6>
    <BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-1" : ""}
        />
      ))}
    </BentoGrid>
    </motion.div>
    </AnimatePresence>
  );
}
const Skeleton = (props) => {
    const { url, alt, link, darkUrl } = props;
    const { theme, resolvedTheme } = useTheme();
    const isDark = theme === 'dark' || resolvedTheme === 'dark';
    const[imageUrl, setImageURL] = React.useState(!isDark ? url : darkUrl);

    React.useEffect(() => {
    const image = !isDark ? url : darkUrl;
    setImageURL(image);
    }, [isDark, darkUrl, url]);

    return(
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-950 dark:to-neutral-800 to-neutral-100">
    <Image
    src={imageUrl}
    alt={alt}
    width={1920}
    height={200}
    className="rounded-[20px]"
    loading="lazy"
    style={{objectFit: "contain"}}
    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
    />
    </div>
    );
    };

const items = [
    {
    title: "S3 Maintenance Services",
    header: <Skeleton url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/logo-emblem--dark.png" darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/logo-emblem.png" alt="s3-logo" link="https://s3maintenance.co.uk/" />,
    // description: "Dive into the transformative power of technology.",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    },
    {
    title: "Xepak",
    header: <Skeleton url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/qxepak.png" darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/qxepak-08.png" alt="xepak-logo" link={false} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
    title: "Made4Living",
    header: <Skeleton url="https://made4living.co.uk/static/media/logo-full.53edbd83bc6f955461c4.png" darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/m4l-white.png" alt="m4l-logo" link="https://made4living.co.uk/" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
    title: "My Coffee Marbella",
    header: <Skeleton url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/favicon.png" darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/favicon.png" alt="mc-logo" link="https://sad-hermann-405b8a.netlify.app/" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
    title: "HCGB",
    header: <Skeleton url="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/download.png" darkUrl="https://s3websitedata.s3.eu-west-2.amazonaws.com/logos/download-white.png" alt="logo-5" link={false} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    ];
