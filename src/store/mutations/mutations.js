export default {

  createTask(state, task) {
    state.tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  createProfile(state, profile) {
    state.profiles.push(profile);

    localStorage.setItem('profiles', JSON.stringify(state.profiles))
  },
  createUser(state, user) {
    state.users.push(user);

    localStorage.setItem('users', JSON.stringify(state.users))
  },
  updateTask(state, {id, description, date}) {
    const tasks = state.tasks.concat();

    const idx = tasks.findIndex(t => t.id === id);
    const task = tasks[idx];

    const status = new Date(date) > new Date() ? 'active' : 'outdated';

    tasks[idx] = {...task, date, description, status};

    state.tasks = tasks;
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  updateProfile(state, {id, description}) {
    const profiles = state.profiles.concat();

    const idx = profiles.findIndex(t => t.id === id);
    const profile = profiles[idx];


    profiles[idx] = {...profile, description};

    state.profiles = profiles;
    localStorage.setItem('profiles', JSON.stringify(state.profiles))
  },
  completeTask(state, id) {
    const idx = state.tasks.findIndex(t => t.id === id);
    state.tasks[idx].status = 'completed';
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },

  SET_CARD: (state, product) => {
    if(state.card.length) {
      let isProductExists = false;
      state.card.map(function (item) {
        if (item.article === product.article) {
          isProductExists = true;
          item.quantity++
        }
      });
      if(!isProductExists) {
        state.card.push(product)
      }
    } else {
      state.card.push(product)
    }
  },
  REMOVE_FROM_CARD: (state, index) => {
    state.card.splice(index, 1)
  },
  INCREMENT: (state, index) => {
    if (state.card[index].available > state.card[index].quantity) {
      state.card[index].quantity++;
      document.querySelector('.decr').classList.remove('decr-active');
    }
    if (state.card[index].available == state.card[index].quantity) {
      document.querySelector('.incr').classList.add('incr-active')
    }
  },
  DECREMENT: (state, index) => {
    if(state.card[index].quantity > 1) {
      state.card[index].quantity--;
      document.querySelector('.incr').classList.remove('incr-active');
    }
    if (state.card[index].quantity == 1) {
      document.querySelector('.decr').classList.add('decr-active')
    }
  },
}
