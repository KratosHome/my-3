import {gsap} from 'gsap';
import {useRouter, usePathname} from "next/navigation";
import {useLocale} from "@/hooks/useLocale";
import {useGSAP} from "@gsap/react";

export const useGsapPageTransition = () => {
    const {locale} = useLocale();
    const router = useRouter();
    const pathName = usePathname();
    const {contextSafe} = useGSAP();
    const triggerAnimation = contextSafe((selector: string, rout: string, onComplete?: () => void) => {
        let targetPath = rout.split('#')[0];
        if (rout.includes('#')) {
            targetPath += `${locale}`;
        }

        if (pathName === targetPath && rout.includes('#')) {
            router.push(rout);
            return;
        }

        if (pathName === targetPath) {
            return;
        }
        gsap.fromTo(selector, {
            x: '100%',
            clipPath: "circle(0% at 0 0)",
            duration: 1,
            ease: "power2.inOut",
            delay: 0,
        }, {
            clipPath: `circle(180% at 0 0)`,
            duration: 1,
            ease: "power2.inOut",
            x: '100%',
            delay: 0,
            onComplete: () => {
                router.push(rout);
                if (onComplete) onComplete();
            },
        });
    });

    return triggerAnimation;
};
