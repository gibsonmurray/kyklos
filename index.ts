import { useEffect, useRef, type DependencyList } from "react"

/**
 * Custom hook that runs a callback function when the component is mounted.
 * @param {Function} callback - The function to be called when the component is mounted.
 */
export function useMounted(callback: () => void) {
    useEffect(callback, [])
}

/**
 * Custom hook that runs a callback function when the component is updated, but not when it first mounts.
 * @param {Function} callback - The function to be called when the component is updated.
 * @param {DependencyList} deps - (optional) Stateful dependencies that trigger the callback when they change. If they are present, the callback will only be executed if the dependencies have changed. Otherwise, it will be executed on every re-render.
 */
export function useUpdated(callback: () => void, deps?: DependencyList) {
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        } else {
            callback()
        }
    }, deps)
}

/**
 * Custom hook that runs a callback function when the component is unmounted.
 * @param {Function} callback - The function to be called when the component is unmounted.
 */
export function useUnmounted(callback: () => void) {
    useEffect(() => {
        return callback
    }, [])
}
