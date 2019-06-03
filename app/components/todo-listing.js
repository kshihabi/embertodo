import Component from '@ember/component';

export default Component.extend({
    editing: false,
    classNameBindings: ['todo.Iscompleted', 'editing'],
    actions: {
        removetodo(todo){
            todo.deleteRecord();
            todo.save();
        },
        toggleCompleted(e) {
            let todo = this.todo;
            todo.set('Iscompleted', e.target.checked);
            todo.save();
        },
        startEditing() {
            this.set('editing', true);
        },
        doneEditing(todoTitle) {
            if (!this.editing) { return; }
            if (!$.trim(todoTitle).length) {
                this.send('removetodo',this.todo);
            } else {
                let todo = this.todo;
                todo.set('Task', todoTitle.trim());
                this.set('editing', false);
                todo.save();
            }
        },
        handleKeydown(e) {
            if (e.keyCode === 13) {
                e.target.blur();
            } else if (e.keyCode === 27) {
                this.set('editing', false);
            }
        },
    }
});
