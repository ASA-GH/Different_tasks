
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
      this.add(new Node(""));
    } else {
      this.children.map((node) => {
        node.createChild(parentId);
      })
    }
  }
  find(id){}
}
