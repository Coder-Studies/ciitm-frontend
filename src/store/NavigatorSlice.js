import { createSlice } from '@reduxjs/toolkit';

let NavigatorSlice = createSlice({
   name: 'Navigator',
   initialState: {
      navigator: [
         {
            pageName: 'Contact',
            parPage: 1,
            limit: 10,
         },
      ],
   },

   reducers: {
      increaseLimit: (state, action) => {
         let index = state.navigator.findIndex(
            item => item.pageName === action.payload.pageName,
         );

         if (index === -1) {
            state.navigator.push(action.payload);
         } else {
            state.navigator[index].limit += 1;
         }
      },

      increaseParPage: (state, action) => {
         let index = state.navigator.findIndex(
            item => item.pageName === action.payload.pageName,
         );

         if (index === -1) {
            state.navigator.push(action.payload);
         } else {
            state.navigator[index].parPage += 1;
         }
      },

      decreaseParPage: (state, action) => {
         let index = state.navigator.findIndex(
            item => item.pageName === action.payload.pageName,
         );

         if (index === -1) {
            state.navigator.push(action.payload);
         } else {
            state.navigator[index].parPage -= 1;
         }
      },

      decreaseLimit: state => {
         state.navigator[0].limit -= 1;
      },
      setNavigator: (state, action) => {
         state.navigator = action.payload;
      },
   },
});

export const {
   setNavigator,
   increaseLimit,
   decreaseLimit,
   increaseParPage,
   decreaseParPage,
} = NavigatorSlice.actions;
export default NavigatorSlice.reducer;
