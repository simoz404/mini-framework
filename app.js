function App() {
    const [count, setCount] = useState(0);

    return createElement("div", {},
        createElement("h1", {}, `Counter: ${count}`),
        createElement("button", { onclick: () => setCount(count + 1) }, "Increase")
    );
  }
  
  const root = document.getElementById("app");
  render(root, App);



  