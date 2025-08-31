declare module 'three/addons/loaders/GLTFLoader' {
    import { Loader, LoadingManager, Group } from 'three';
    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (gltf: { scene: Group }) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
        // ...other members...
    }
}

declare module 'three/addons/controls/OrbitControls' {
    import { Camera, EventDispatcher } from 'three';
    export class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement?: HTMLElement);
        enableZoom: boolean;
        enablePan: boolean;
        autoRotate: boolean;
        autoRotateSpeed: number;
        enableDamping: boolean;
        dampingFactor: number;
        update(): void;
        // ...other members...
    }
}

declare module 'three/addons/postprocessing/EffectComposer' {
    import { WebGLRenderer, WebGLRenderTarget } from 'three';
    export class EffectComposer {
        constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
        addPass(pass: object): void;
        setSize(width: number, height: number): void;
        render(): void;
        // ...other members...
    }
}

declare module 'three/addons/postprocessing/RenderPass' {
    import { Scene, Camera } from 'three';
    export class RenderPass {
        constructor(scene: Scene, camera: Camera);
        // ...other members...
    }
}

declare module 'three/addons/postprocessing/UnrealBloomPass' {
    import { Vector2 } from 'three';
    export class UnrealBloomPass {
        constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
        strength: number;
        radius: number;
        threshold: number;
        // ...other members...
    }
}

declare module 'three/addons/loaders/RGBELoader' {
    import { Loader, LoadingManager, Texture } from 'three';
    export class RGBELoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (texture: Texture) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
        // ...other members...
    }
}
