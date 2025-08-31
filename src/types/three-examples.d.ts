declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher } from 'three';
    export class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement?: HTMLElement);
        enableZoom: boolean;
        enablePan: boolean;
        autoRotate: boolean;
        autoRotateSpeed: number;
        update(): void;
        // ...existing members...
    }
}

declare module 'three/examples/jsm/postprocessing/EffectComposer' {
    import { WebGLRenderer, WebGLRenderTarget } from 'three';
    export class EffectComposer {
        constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
        addPass(pass: unknown): void;
        setSize(width: number, height: number): void;
        render(): void;
        // ...existing members...
    }
}

declare module 'three/examples/jsm/postprocessing/RenderPass' {
    import { Scene, Camera } from 'three';
    export class RenderPass {
        constructor(scene: Scene, camera: Camera);
        // ...existing members...
    }
}

declare module 'three/examples/jsm/postprocessing/UnrealBloomPass' {
    import { Vector2 } from 'three';
    export class UnrealBloomPass {
        constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
        strength: number;
        radius: number;
        threshold: number;
        // ...existing members...
    }
}