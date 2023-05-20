import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'
import playersReducer from '../components/Players/playersSlice'

// import rootReducer from './reducers'; // Importa el root reducer de tu aplicación
export const rootReducer = combineReducers(
    {
      players: playersReducer
    }
  );

// Configuración de Redux Persist
const persistConfig = {
  key: 'root', // La clave utilizada para almacenar el estado en el almacenamiento
  storage, // El almacenamiento a utilizar
  // Puedes agregar opciones adicionales aquí, como el estado a persistir específicamente
};

// Crea el persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crea la store de Redux Toolkit
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

});

// Crea el persisted store
const persistedStore = persistStore(store);

// Exporta la store y el persisted store
export { store, persistedStore };
