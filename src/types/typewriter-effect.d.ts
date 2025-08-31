declare module "typewriter-effect" {
    import * as React from "react";

    interface TypewriterOptions {
        strings?: string[];
        autoStart?: boolean;
        loop?: boolean;
        delay?: number;
        deleteSpeed?: number;
        pauseFor?: number;
        cursor?: string;
        wrapperClassName?: string;
        cursorClassName?: string;
        onComplete?: () => void;
    }

    export interface TypewriterInstance {
        typeString: (text: string) => TypewriterInstance;
        pauseFor: (duration: number) => TypewriterInstance;
        deleteAll: () => TypewriterInstance;
        deleteChars: (count: number) => TypewriterInstance;
        callFunction: (callback: () => void) => TypewriterInstance;
        start: () => void;
    }

    export interface TypewriterProps {
        options?: TypewriterOptions;
        onInit?: (typewriter: TypewriterInstance) => void;
    }

    const Typewriter: React.FC<TypewriterProps>;
    export default Typewriter;
}
