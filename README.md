# Kyklos

> Pronunciation: /ˈkiːkləs/ (kee-klos)

Kyklos, derived from the Greek word κύκλος meaning "circle" or "cycle," embodies the concept of lifecycle in React components.

Kyklos is a lightweight React library that provides lifecycle hooks to abstract and simplify the use of `useEffect`. It offers a more intuitive and readable way to handle component lifecycle events in functional components.

## Features

-   Simple and intuitive API
-   Lightweight with minimal overhead
-   TypeScript support
-   Easy to integrate into existing React projects

## Installation

You can install Kyklos using your preferred package manager:

```bash
npm install kyklos
```

or

```bash
bun add kyklos
```

## Usage

Kyklos exports three main hooks:

1. `useMounted`: Runs a callback when the component is mounted.
2. `useUpdated`: Runs a callback when the component is updated.
3. `useUnmounted`: Runs a callback when the component is unmounted.
4. `$`: A wrapper around `useEffect` that allows you to use jQuery-like syntax.

Here's how you can use these hooks in your React components:

```tsx
import { useMounted, useUpdated, useUnmounted, $ } from "kyklos"

const MyComponent = () => {
    const [someState, setSomeState] = useState(0)

    useMounted(() => {
        console.log("Component mounted")
    })

    useUpdated(() => {
        console.log("Component updated. I will run on every re-render.")
    })

    useUpdated(() => {
        console.log(`someState updated to: ${someState}`)
    }, [someState])

    useUnmounted(() => {
        console.log("Component unmounted")
    })

    $(() => {
        console.log("Component mounted")
    }, [someState])

    return (
        <button onClick={() => setSomeState((prev) => prev + 1)}>
            Increment
        </button>
    )
}
```

## API Reference

### `useMounted(callback: () => void)`

Runs the provided callback function only when the component is mounted.

-   `callback`: A function to be executed on component mount.

### `useUpdated(callback: () => void, deps?: DependencyList)`

Runs the provided callback function when the component is updated. This is different from `useEffect` because the callback will not be executed on the first render.

-   `callback`: A function to be executed on component update.
-   `deps`: (optional) Stateful dependencies that trigger the callback when they change. If they are present, the callback will only be executed if the dependencies have changed. Otherwise, it will be executed on every re-render.

### `useUnmounted(callback: () => void)`

Runs the provided callback function only when the component is about to unmount. Used for cleanup.

-   `callback`: A function to be executed before the component unmounts.

### `$(callback: () => void, deps?: DependencyList)`

A wrapper around `useEffect` that allows you to use jQuery-like syntax.

-   `callback`: A function to be executed on component mount.
-   `deps`: (optional) Stateful dependencies that trigger the callback when they change. If they are present, the callback will only be executed if the dependencies have changed. Otherwise, it will be executed on every re-render.

## TypeScript Support

Kyklos is written in TypeScript and provides type definitions out of the box. No additional setup is required to use it in a TypeScript project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

The one and only [Gibson Murray](https://gibsonmurray.com)

## Acknowledgments

-   [React](https://react.dev/) team for trying to fit everything into `useEffect` (with love <3)
-   [Vue](https://vuejs.org/) for inspiring this project
-   [jQuery](https://jquery.com/) for being the OGs
-   All contributors and users of Kyklos
