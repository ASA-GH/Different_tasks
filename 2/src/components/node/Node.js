export default class Node {
  id = "";
  name = "";
  rootId = "";
  children = [];
  attributes = {};

  constructor(name, rootId) {
    this.name = name;
    this.id = this.createId();
    this.rootId = rootId ? rootId : this.id;
    this.children = [];
    this.attributes = {};
  }

  isRoot() {
    return this.rootId == this.id;
  }

  createId() {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  }
  add(node) {
    this.children.push(node);
  }

  createChild(parentId) {
    if (this.id == parentId) {
      this.add(new Node("new node", this.rootId));
    } else {
      this.children.map((node) => {
        node.createChild(parentId);
      });
    }
  }
  renameChild(id, name) {
    for (let i in this.children) {
      if (this.children[i].id == id) {
        this.children[i].name = name;
        return this.children[i];
      }
      let res = this.children[i].renameChild(id, name);
      if (res) return res;
    }
    return null;
  }
  deleteChild(id) {
    for (let i in this.children) {
      if (this.children[i].id == id) {
        this.children.splice(i, 1);
        return;
      }
      this.children[i].deleteChild(id);
    }
  }
  createAttribute(nodeId, attributeKey) {
    if (this.id == nodeId) {
      this.attributes[attributeKey] = "new value";
      return;
    }
    this.children.map((node) => {
      node.createAttribute(nodeId, attributeKey);
    });
  }
  deleteAttribute(nodeId, attributeKey) {
    if (this.id == nodeId) {
      delete this.attributes[attributeKey];
      return;
    }
    this.children.map((node) => {
      node.deleteAttribute(nodeId, attributeKey);
    });
  }
  changeAttributeKey = (nodeId, oldAttributeKey, newAttributeKey) => {
    if (this.id == nodeId) {
      let v = this.attributes[oldAttributeKey];
      delete this.attributes[oldAttributeKey];
      this.attributes[newAttributeKey] = v;
      return;
    }
    this.children.map((node) => {
      node.changeAttributeKey(nodeId, oldAttributeKey, newAttributeKey);
    });
  };
  changeAttributeValue = (nodeId, attributeKey, attributeValue) => {
    if (this.id == nodeId) {
      this.attributes[attributeKey] = attributeValue;
      return;
    }
    this.children.map((node) => {
      node.changeAttributeValue(nodeId, attributeKey, attributeValue);
    });
  };

  export_ = () => {
    let obj = {};
    obj["name"] = this.name;
    obj["attributes"] = this.attributes;
    let arr = [];
    this.children.map((node) => {
      arr.push(node.export_());
    });
    obj["children"] = arr;
    return obj;
  };

  export = () => {
    return JSON.stringify(this.export_());
  };
}
