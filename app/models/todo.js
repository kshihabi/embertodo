import DS from 'ember-data';

export default DS.Model.extend({
    Task: DS.attr('string'),
    Iscompleted: DS.attr('boolean',{defaultValue: false})
});
