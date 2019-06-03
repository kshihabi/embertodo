import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
    remaining: filterBy('model', 'Iscompleted', false),
    completed: filterBy('model', 'Iscompleted'),
    actions: {
        addtodo: function(){
            this.store.createRecord('todo', {Task: 'משימה ללא שם' , Iscompleted:false }).save();
        }
    }
});
