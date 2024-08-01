let family = new FamilyTree('#tree', {
    nodeBinding: {
        field_0: 'name'
    },
    nodes: [
        { id: 1, pids: [2], name: 'Amber McKenzie', gender: 'female' },
        { id: 2, pids: [1], name: 'Ava Field', gender: 'male' },
        { id: 3, mid: 1, fid: 2, name: 'Peter Stevens', gender: 'male' }
    ]
});

