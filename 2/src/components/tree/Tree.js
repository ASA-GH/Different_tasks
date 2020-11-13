 import Node from "./../node/Node"
 
 
 export default class Tree {
    root = {};
    constructor (){
      this.root = new Node(". .")
      for (let i=0; i < 5; i++) {
        let name = "test-" + i;
        let node = new Node(name);
        for (let j=0; j < 5; j++) {
          node.add (new Node(name + "-" + j));
        }
        this.root.add (node);
      }
    }
    createNode(parentId) {
      this.root.createChild(parentId)
    }

    deleteNode(id){
      if (this.root.id == id)
        return false;
      this.root.deleteChild(id);
      return true;
    }

    renameNode(id, name){
      if (this.root.id == id)
        return null;
      return this.root.renameChild(id, name);
    }
   
}
