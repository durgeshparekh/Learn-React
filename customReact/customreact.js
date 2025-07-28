function customRender(reactElement, container) {
    const { type, props, children } = reactElement
    const domElement = document.createElement(type)
    domElement.innerHTML = children

    for (const [key, value] of Object.entries(props)) {
        domElement.setAttribute(key, value)
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
