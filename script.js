const dragDropItems = document.getElementById('team-members')

new Sortable(dragDropItems, {
  animation: 350,
  chosenClass: 'team-member-chosen',
  dragClass: 'team-member-drag'
})