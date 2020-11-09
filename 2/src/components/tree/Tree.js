 import Node from "./../node/Node"
 
 
 export default class Tree {
    root = {};
    constructor (){
      this.root = new Node("root")
      for (let i=0; i < 5; i++) {
        let name = "test-" + i;
        let node = new Node(name);
        for (let j=0; j < 5; j++) {
          node.add (new Node(name + "-" + j));
        }
        this.root.add (node);
      }
      console.log(this.root)
    }
    createNode(parentId){
      this.root.createChild(parentId)
    }
    remove(id){}
    find(id){}
}
