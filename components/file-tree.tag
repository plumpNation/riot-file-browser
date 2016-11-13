<file-tree>
    <section class="file-tree">
        <ul class="tree-node-list">
            <li class="tree-node" each="{node in treeNodes}">
                <button
                    id="{node.id}"
                    data-type="{node.type}"
                    class="tree-node-title {node.DOMClass}"
                    onclick="{clickNode}">
                    {node.title}
                </button>
                <file-tree if={node.type === 'folder'} tree-nodes="{node.treeNodes}"></file-tree>
            </li>
        </ul>
    </section>

    <script type="text/javascript">
        'use strict';

        this.treeNodes = this.opts.treeNodes;

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
    </script>
</file-tree>
