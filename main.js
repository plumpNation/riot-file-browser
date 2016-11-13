document.addEventListener('DOMContentLoaded', init);

const appStore = {
    fileTree: {
        treeNodes: [
            {
                title: 'Folder 1',
                type: 'folder',
                treeNodes: [
                    {title: 'Folder 1a', type: 'folder'},
                    {title: 'File 1a', type: 'file'}
                ]
            },
            {
                title: 'Folder 2',
                type: 'folder',
                treeNodes: [
                    {title: 'File 2a', type: 'file'}
                ]
            }
        ]
    }
};

function init() {
    riot.mount('file-tree', appStore.fileTree);
}
