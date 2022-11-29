import { configureStore } from '@reduxjs/toolkit'
import authentication from './authentication'

const store = configureStore({
  reducer: {
    authentication: authentication
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch