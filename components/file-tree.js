riot.tag2('file-tree', '<section class="file-tree"> <ul class="tree-node-list"> <li class="tree-node" each="{node in treeNodes}"> <button class="fa fa-{node.type} tree-node-title"> {node.title} </button> <file-tree if="{node.type === \'folder\'}" tree-nodes="{node.treeNodes}"></file-tree> </li> </ul> </section>', '', '', function(opts) {
        this.treeNodes = this.opts.treeNodes;
});
