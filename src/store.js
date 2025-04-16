const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          favorites: [],
          people: [],
          planets: [],
          vehicles: [],
          currentItem: null,
      },
      actions: {
          loadData: async () => {
              const urls = [
                  { type: "people", url: "https://www.swapi.tech/api/people" },
                  { type: "planets", url: "https://www.swapi.tech/api/planets" },
                  { type: "vehicles", url: "https://www.swapi.tech/api/vehicles" }
              ];
              for (let { type, url } of urls) {
                  const res = await fetch(url);
                  const data = await res.json();
                  setStore({ [type]: data.results });
              }
          },
          getDetails: async (url) => {
              const res = await fetch(url);
              const data = await res.json();
              setStore({ currentItem: data.result });
          },
          addFavorite: (item) => {
              const store = getStore();
              if (!store.favorites.includes(item)) {
                  setStore({ favorites: [...store.favorites, item] });
              }
          },
          removeFavorite: (item) => {
              const store = getStore();
              setStore({ favorites: store.favorites.filter(fav => fav !== item) });
          }
      }
  };
};

export default getState;
