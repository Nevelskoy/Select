import {Select} from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
  placeholder: 'Select an element',
  // selectedId:'7',
  data: [
    {id: '1', value: 'jQuery'},
    {id: '2', value: 'Backbone'},
    {id: '3', value: 'Svelte'},
    {id: '4', value: 'Ember'},
    {id: '5', value: 'Angular'},
    {id: '6', value: 'Vue'},
    {id: '7', value: 'React'},
    {id: '8', value: 'React Native'},
    {id: '9', value: 'Next'},
    {id: '10', value: 'Nest'}
  ],
  onSelect(item) {
    console.log('Selected Item', item)
  }
})

window.s = select