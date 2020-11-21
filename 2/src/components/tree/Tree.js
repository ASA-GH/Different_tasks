import Node from "./../node/Node";

export default class Tree {
  root = {};
  constructor() {
    this.root = new Node(" . . ", "");
    this.generateRandomDate(this.root);
  }

  generateRandomDate(root) {
    for (let i = 0; i < 5; i++) {
      let name = "test-" + i;
      let node = new Node(name, root.id);
      node.attributes["a" + i] = "c" + i;
      node.attributes["b" + i] = "e" + i;

      for (let j = 0; j < 5; j++) {
        node.add(new Node(name + "-" + j, root.id));
      }
      root.add(node);
    }
  }

  createNode(parentId) {
    this.root.createChild(parentId);
  }

  deleteNode(id) {
    if (this.root.id == id) return false;
    this.root.deleteChild(id);
    return true;
  }

  renameNode(id, name) {
    if (this.root.id == id) return null;
    return this.root.renameChild(id, name);
  }
  createAttribute(nodeId, attributeKey) {
    this.root.createAttribute(nodeId, attributeKey);
  }
  deleteAttribute(nodeId, attributeKey) {
    this.root.deleteAttribute(nodeId, attributeKey);
  }
  changeAttributeKey = (nodeId, oldAttributeKey, newAttributeKey) => {
    this.root.changeAttributeKey(nodeId, oldAttributeKey, newAttributeKey);
  };
  changeAttributeValue = (nodeId, attributeKey, attributeValue) => {
    this.root.changeAttributeValue(nodeId, attributeKey, attributeValue);
  };
}
