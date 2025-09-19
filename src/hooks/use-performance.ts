import { useEffect } from 'react'

export const usePerformanceMonitoring = () => {
    useEffect(() => {
        // Core Web Vitals monitoring
        if (typeof window !== 'undefined' && 'web-vital' in window) {
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(console.log)
                getFID(console.log)
                getFCP(console.log)
                getLCP(console.log)
                getTTFB(console.log)
            })
        }
    }, [])
}