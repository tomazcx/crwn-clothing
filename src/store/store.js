import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./root.reducer";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {persistStore} from "redux-persist";

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['cart']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false
	})
})

export const persistor = persistStore(store)

