function customRender(reactElement, root){
    const domElement = document.createElement(reactElement.type);
    domElement.href = reactElement.props.href;
    domElement.target = reactElement.props.target;
    domElement.textContent = reactElement.children;
    root.append(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}
let root = document.querySelector("#root");
console.log(root);

customRender(reactElement, root)