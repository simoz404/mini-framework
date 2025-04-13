function createElement(tag, props, ...children) {
    const element = document.createElement(tag);
  
    for (let key in props) {
      element.setAttribute(key, props[key]);
    }
  
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  
    return element;
  }
  
  function render(root, component) {
    root.innerHTML = '';
    root.appendChild(component());
  }
  



  let state = [];
  let currentIndex = 0;
  
  function useState(initialValue) {
    const localIndex = currentIndex;
  
    if (state[localIndex] === undefined) {
      state[localIndex] = initialValue;
    }
  
    function setState(newValue) {
      state[localIndex] = newValue;
      currentIndex = 0; 
      render(document.getElementById('app'), App);
    }
  
    currentIndex++; 
    return [state[localIndex], setState];
  }