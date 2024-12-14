import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from 'next-themes';

interface HoverEffectProps {
    client: {
        link: string;
        darkUrl: string;
        url: string;
        alt: string;
    };
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ client }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { theme, resolvedTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(theme === 'dark' || resolvedTheme === 'dark');
    }, [theme, resolvedTheme]);

    return (
        <div className={cn("grid m-auto h-full w-full")}>
            <Link
                href={client.link}
                className="relative group block p-2 h-20 w-full"
                style={{ alignContent: "center" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence>
                    {isHovered && (
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
                        src={isDark ? client.darkUrl : client.url}
                        alt={client.alt}
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
