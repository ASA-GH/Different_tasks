
export default class Node{

  id = "";
  name = "";
  children = [];
  field = {};

  constructor(name){
    this.name = name;
    this.id = this.createId();
  }
  createId(){
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  }
  add(node){ this.children.push (node)}

  createChild(parentId) {
    if (this.id == parentId) {
      this.add(new Node("new node"));
    } else {
      this.children.map((node) => {
        node.createChild(parentId);
      })
    }
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

}
