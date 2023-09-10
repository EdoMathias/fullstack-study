"use strict";
class Editor {
    edit() {
        console.log('called edit');
    }
    print() {
        return 'Printing';
    }
    save() {
        return 'Saved';
    }
}
function edit(obj) {
    obj.edit();
}
