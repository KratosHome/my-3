import {usePathname} from "next/navigation";

type UseLocaleReturnType = {
    locale: string;
};

export const useLocale = (): UseLocaleReturnType => {
    const pathname = usePathname();
    const locale = pathname.split('/')[1];

    return { locale };
};
