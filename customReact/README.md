# Custom React

## Description

A custom React renderer implementation that demonstrates how React works under the hood. This project creates a simplified version of React's rendering mechanism by implementing a `customRender` function that manually creates DOM elements from React element objects. It shows the fundamental concepts of how React transforms JSX/React elements into actual DOM nodes, including handling element types, props, and children. This is an educational project that helps understand React's core rendering principles.

## Features

- Custom render function implementation
- Manual DOM element creation
- Props handling and attribute setting
- Children rendering
- Demonstrates React's core rendering concepts

## How It Works

The `customRender` function takes a React element object and a container, then:
1. Creates a DOM element based on the element type
2. Sets attributes from the element's props
3. Sets the innerHTML from the element's children
4. Appends the element to the container

This is a simplified version of what React does internally when rendering components.

