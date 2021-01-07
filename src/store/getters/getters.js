export default {
  users: s => s.users,
  tasks: s => s.tasks,
  profiles: s => s.profiles,
  profileById: s => id => s.profiles.find(t => t.id === id),
  taskById: s => id => s.tasks.find(t => t.id === id),

  CARD: s => s.card,
}
