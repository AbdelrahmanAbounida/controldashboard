import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:{},
}

export const ContainerSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.value = true
    },
    closeDrawer: (state) => {
      state.value = false
    }
  },
})

export const { openDrawer, closeDrawer } = ContainerSlice.actions

export default ContainerSlice.reducer