import { useEffect, useCallback } from "react"

/**
 * Custom hook that runs a callback function when the component is mounted.
 * @param {Function} callback - The function to be called when the component is mounted.
 */
export function useMounted(callback: () => void) {
    const memoizedCallback = useCallback(callback, [callback])
    useEffect(memoizedCallback, [memoizedCallback])
}

/**
 * Custom hook that runs a callback function when the component is updated.
 * @param {Function} callback - The function to be called when the component is updated.
 */
export function useUpdated(callback: () => void) {
    const memoizedCallback = useCallback(callback, [callback])
    useEffect(memoizedCallback)
}

/**
 * Custom hook that runs a callback function when the component is unmounted.
 * @param {Function} callback - The function to be called when the component is unmounted.
 */
export function useUnmounted(callback: () => void) {
    const memoizedCallback = useCallback(callback, [callback])
    useEffect(() => {
        return memoizedCallback
    }, [memoizedCallback])
}
