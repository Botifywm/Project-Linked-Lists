function Node() {
  let value = null;
  let nextNode = null;

  const getValue = () => value;
  const setValue = (val) => (value = val);

  const getNode = () => nextNode;
  const setNode = (node) => (nextNode = node);
  return { getValue, setValue, getNode, setNode };
}

function LinkedList() {
  let headList = null;
  let tailList = null;

  const append = (val) => {
    let node = Node();
    node.setValue(val);
    if (tailList) {
      tailList.setNode(node);
    } else {
      headList = node;
    }
    tailList = node;
  };

  const prepend = (val) => {
    let node = Node();
    node.setValue(val);
    node.setNode(headList);
    headList = node;
  };

  const size = () => {
    let length = 0;
    let current = headList;
    while (current) {
      current = current.getNode();
      length++;
    }
    return length;
  };

  const head = () => headList;

  const tail = () => tailList;

  const at = (index) => {
    let idx = 0;
    let current = headList;
    while (index !== idx) {
      current = current.getNode();
      idx++;
    }
    return current;
  };

  const pop = () => {
    let current = at(size() - 2);
    tailList = current;
    current.setNode(null);
  };

  const contains = (value) => {
    let current = headList;
    while (current) {
      if (current.getValue() === value) {
        return true;
      }
      current = current.getNode();
    }
    return false;
  };

  const find = (value) => {
    let current = headList;
    let idx = 0;
    while (current) {
      if (current.getValue() === value) {
        return idx;
      }
      current = current.getNode();
      idx++;
    }
  };

  const toString = () => {
    let strList = "";
    let current = headList;
    while (current) {
      const nodeStr = `( ${current.getValue()} ) -> `;
      strList += nodeStr;
      current = current.getNode();
    }
    strList = strList + "null";
    return strList;
  };

  const insertAt = (value, index) => {
    let current = headList;
    let prev;
    let idx = 0;
    while (current) {
      if (idx === index) {
        let node = Node();
        node.setValue(value);
        node.setNode(current);
        prev.setNode(node);
        return;
      }
      prev = current;
      current = current.getNode();
      idx++;
    }
  };

  const removeAt = (index) => {
    let current = headList;
    let prev;
    let idx = 0;
    while (current) {
      if (idx === index) {
        let next = current.getNode();
        prev.setNode(next);
        return;
      }
      prev = current;
      current = current.getNode();
      idx++;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.pop();
console.log(list.toString());
