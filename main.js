document.addEventListener('DOMContentLoaded', init);

const appStore = {
    fileTree: {
        selectedNode: null,
        treeNodes: [
            {
                id: 'folder-1',
                title: 'Folder 1',
                type: 'folder',
                domClass: 'fa fa-folder',
                treeNodes: [
                    {id: 'folder-1-a', title: 'Folder 1a', type: 'folder', domClass: 'fa fa-folder', treeNodes: []},
                    {id: 'file-1-a', title: 'File 1a', type: 'file', domClass: 'fa fa-file-text'}
                ]
            },
            {
                id: 'folder-2',
                title: 'Folder 2',
                type: 'folder',
                domClass: 'fa fa-folder',
                treeNodes: [
                    {id: 'file-2-a', title: 'File 2a', type: 'file', domClass: 'fa fa-file-pdf-o'}
                ]
            }
        ]
    }
};

function init() {
    const tree = riot.mount('file-tree', appStore.fileTree)[0];

    tree.on('nodeSelect', (data) => {
        // load data, cache data, whatever
        console.log('selected', data);
        appStore.fileTree.selectedNode = data;
    });

    document.getElementById('add-folder').addEventListener('click', () => {
        createFolderOn(appStore.fileTree.selectedNode);

        tree.update(appStore.fileTree);
    });
}

function createFolderOn(selectedNode) {
    if (!selectedNode) {
        alert('Please select a folder to add it to');
        return;
    }

    if (selectedNode.type !== 'folder') {
        alert('You can only add nodes to folders');
        return;
    }

    findData(selectedNode, appStore.fileTree);
}

function findData(selectedNode, fileTree) {
    if (!Array.isArray(fileTree.treeNodes)) {
        return;
    }

    for (let i = 0; i < fileTree.treeNodes.length; i++) {
        if (fileTree.treeNodes[i].id === selectedNode.id) {
            fileTree.treeNodes[i].treeNodes.push(createFolderData('boom'));
        }

        findData(selectedNode, fileTree.treeNodes[i]);
    }
}

let addFolderCount = 0;
function createFolderData(folderName) {
    return {
        id: 'folder-added-' + folderName + addFolderCount++,
        title: folderName,
        type: 'folder',
        domClass: 'fa fa-folder',
        treeNodes: []
    };
}

let addFileCount = 0;
function createFileData(fileName) {
    return {
        id: 'file-added-' + fileName + addFileCount++,
        title: fileName,
        type: 'file',
        domClass: 'fa fa-file'
    };
}
