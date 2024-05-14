
const tranlater: { [key: string]: () => Promise<unknown> } = {
    en: () => import('./en.json').then((r) => r.default),
    fa: () => import('./fa.json').then((r) => r.default),
};

export const getLanguageDatas = (lang: string): Promise<unknown> => {
    return tranlater[lang]();
};