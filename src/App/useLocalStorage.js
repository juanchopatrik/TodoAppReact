import React from 'react';

function useLocalStorage(itemName, initialValue) {
  // const [item, setItem] = React.useState(initialValue || []);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
        // if (!localStorageItem) {
        if (localStorageItem.length <= 2) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        // setLoading(false);
        setError(true);
      }

    }, 5000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {
    item
    , saveItem
    , loading
    , error
    , sincronizeItem
  };
}

export { useLocalStorage };
