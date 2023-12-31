import { createSlice } from "@reduxjs/toolkit";

type ISearch = {
  selectedFilter: string;
  searchTerm: string;
  filteredData: [];
};

const initialState: ISearch = {
  selectedFilter: "",
  searchTerm: "",
  filteredData: [],
};

export const searchSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setSelectedFilter, setSearchTerm, setFilteredData } =
  searchSlice.actions;

export default searchSlice.reducer;
