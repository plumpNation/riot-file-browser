document.addEventListener('DOMContentLoaded', init);

const appStore = {
    fileTree: {
        treeNodes: [
            {
                id: 'folder-1',
                title: 'Folder 1',
                type: 'folder',
                DOMClass: 'fa fa-folder',
                treeNodes: [
                    {id: 'folder-1-a', title: 'Folder 1a', type: 'folder', DOMClass: 'fa fa-folder'},
                    {id: 'file-1-a', title: 'File 1a', type: 'file', DOMClass: 'fa fa-file-text'}
                ]
            },
            {
                id: 'folder-2',
                title: 'Folder 2',
                type: 'folder',
                DOMClass: 'fa fa-folder',
                treeNodes: [
                    {id: 'file-2-a', title: 'File 2a', type: 'file', DOMClass: 'fa fa-file-pdf-o'}
                ]
            }
        ]
    }
};

function init() {
    const tree = riot.mount('file-tree', appStore.fileTree)[0];

    tree.on('nodeSelect', (data) => {
        // load data, cache data, whatever
        console.log(data);
    });
}
