// utils/getLangData.ts
import type { SupportedLang } from '@/types/lang';

/**
 * Dynamically imports the language JSON based on provided language code.
 * Falls back to English if not found or invalid.
 * @param lang SupportedLang - Language code ('en' | 'bn' | 'fr')
 * @returns Promise<NavData>
 */
const getLangData = async (lang: SupportedLang = 'en', path: string) => {
    try {
        const dataModule = await import(`@/data/lang/${lang}/${path}.json`);
        if (!dataModule?.default) {
            throw new Error(`Language data for "${lang}" not found or invalid format.`);
        }
        return dataModule.default;
    } catch (error) {
        console.error(`Error loading language file for "${lang}":`, error);
        // Optionally fallback to English
        const fallbackModule = await import(`@/data/lang/en/${path}.json`);
        return fallbackModule.default;
    }
};

export default getLangData;
