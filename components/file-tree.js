riot.tag2('file-tree', '<ul class="file-tree"> <li class="tree-node" each="{node in treeNodes}"> <button id="{node.id}" data-type="{node.type}" class="tree-node-title {node.domClass}" onclick="{clickNode}"> {node.title} </button> <file-tree if="{node.type === \'folder\'}" tree-nodes="{node.treeNodes}"></file-tree> </li> </ul>', '', '', function(opts) {
        'use strict';

        this.treeNodes = this.opts.treeNodes;

        this.on('update', function () {
            if (this.treeNodes && this.treeNodes[0] && this.treeNodes[0].shoop) {
                console.log(this.treeNodes[0].treeNodes)
            }
        })

        this.clickNode = (e) => {
            let eventData = {
                id: e.target.id,
                type: e.target.dataset.type
            };

            this.trigger('nodeSelect', eventData);
        };

        // A 'pass through' of event and data, 'bubbling' of a sort
        this.on('*', (eventName, ...params) => {
            if (this.parent) {
                this.parent.trigger(eventName, ...params);
            }
        });
});
