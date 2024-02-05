// const heading = React.createElement("h1", { id: "heading", className: "headerClass" }, "Hello World My React Project");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        React.createElement("h1", {}, "Hi i am h1 tag")
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hi i am h1 tag"),
         React.createElement("h2", {}, "Hi i am h2 tag")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);