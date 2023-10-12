const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      todos: [
      ],
      inputValue: "",
      APIurl: "https://playground.4geeks.com/apis/fake/todos/user/cdkelly",
    },
    actions: {
      getAPI: async () => {
        const store = getStore();
        try {
          const response = await fetch(store.APIurl);
          const APITodos = await response.json();
          setStore({ todos: APITodos });
        } catch (error) {
          console.log("error", error);
        }
      },
      addTodo: async (todo) => {
        try {
          const store = getStore();
          const idx = store.todos.length;
          const newTodo = {
            done: false,
            id: idx,
            label: todo,
          };
		  let newTodos = store.todos.concat(newTodo);
          const response = await fetch(store.APIurl, {
            method: "PUT",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodos)
            // json: true,
          });
        } catch (error) {
          console.log("error", error);
        }
        getActions().getAPI();
      },
	  deleteTodo: async (index) => {
		try {
			const store = getStore();
			let newTodos = store.todos.filter((t, currentIndex) => index != currentIndex);
			const response = await fetch(store.APIurl, {
			  method: "PUT",
			  cache: "no-cache",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify(newTodos)
			  // json: true,
			});
		  } catch (error) {
			console.log("error", error);
		  }
		  getActions().getAPI();
	  }
    },
  };
};

export default getState;
