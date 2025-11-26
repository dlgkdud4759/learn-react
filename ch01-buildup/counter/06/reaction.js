const reaction = {
  createElement: (tag, props, ...Children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if (attrName.toLowerCase().startsWith("on")) {
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        }
        elem.setAttribute(attrName, value);
      }
    }

    // 자식 노드 추가
    for (let child of Children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      } else if (typeof child === "function") {
        child = child();
      }
      elem.appendChild(child);
    }

    // 요소 노드 반환
    return elem;
  },
  // 루트 노드를 관리하는 객체를 반환
  createRoot: (rootNode) => {
    return {
      render: (appFn) => {
        rootNode.appendChild(appFn());
      },
    };
  },
};

export default reaction;
