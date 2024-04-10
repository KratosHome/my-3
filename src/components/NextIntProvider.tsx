import React, {FC} from 'react';
import {NextIntlClientProvider, useMessages} from 'next-intl';

interface NextIntProviderProps {
    children: React.ReactNode;
    locale: string;
}

const NextIntProvider: FC<NextIntProviderProps> = ({children, locale}) => {
    const messages = useMessages();
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
};

export default NextIntProvider;