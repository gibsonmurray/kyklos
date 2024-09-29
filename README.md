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

Here's how you can use these hooks in your React components:

```tsx
import { useMounted, useUpdated, useUnmounted } from "kyklos"

const MyComponent = () => {
    useMounted(() => {
        console.log("Component mounted")
    })

    useUpdated(() => {
        console.log("Component updated")
    })

    useUnmounted(() => {
        console.log("Component unmounted")
    })
}
```

## API Reference

### `useMounted(callback: () => void)`

Runs the provided callback function when the component is mounted.

-   `callback`: A function to be executed on component mount.

### `useUpdated(callback: () => void)`

Runs the provided callback function when the component is updated.

-   `callback`: A function to be executed on component update.

### `useUnmounted(callback: () => void)`

Runs the provided callback function when the component is about to unmount.

-   `callback`: A function to be executed before the component unmounts.

## TypeScript Support

Kyklos is written in TypeScript and provides type definitions out of the box. No additional setup is required to use it in a TypeScript project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

The one and only [Gibson Murray](https://gibsonmurray.com)

## Acknowledgments

-   [React](https://react.dev/) team for making things complicated
-   All contributors and users of Kyklos
