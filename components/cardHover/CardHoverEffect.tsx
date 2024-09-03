import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from 'next-themes';

export const HoverEffect = ({
    props,
}: {
    props: {
        title: string;
        description: string;
        link: string;
        url: string;
        alt: string;
        darkUrl: string;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { theme, resolvedTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);
  
    console.log(props)
  
    const { idx, link, url, darkUrl, alt } = props.clients;
    const imageUrl = isDark ? darkUrl : url;

    console.log(link)


    useEffect(() => {
        setIsDark(theme === 'dark' || resolvedTheme === 'dark');
    }, [theme, resolvedTheme]);

    return (
        <div
            className={cn(
                "grid m-auto h-full w-full",
            )}
        >
            <Link
                href={link}
                key={link}
                className="relative group block p-2 h-20 w-full"
                style={{ alignContent: "center" }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <AnimatePresence>
                    {hoveredIndex === idx && (
                        <motion.span
                            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl m-auto"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.15 } }}
                            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                        />
                    )}
                </AnimatePresence>
                <div className="relative m-auto w-full h-full"
                style={{ alignContent: "center" }}
                >
                    <Image
                        src={imageUrl}
                        alt={alt}
                        width={1920}
                        height={200}
                        className=""
                        loading="lazy"
                        style={{ objectFit: "contain", height: "100%", width: "100%" }}
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                    />
                </div>
            </Link>
        </div>
    );
};
