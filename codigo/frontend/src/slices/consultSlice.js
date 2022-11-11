import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import consultService from "../services/consultService";


const initialState = {
    consultData: [],
    error: false,
    success: false,
    loading: false,
};

export const consultRegister = createAsyncThunk(
    "consult/consultRegister",
    async (consultData, thunkAPI) => {
        
        const data = await consultService.consultRegister(consultData);

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }
        return data;
    }
);

export const consultUpdate = createAsyncThunk(
    "consult/consultUpdate",
    async (consultData, thunkAPI) => {

        const data = await consultService.consultUpdate(consultData)

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)

export const consultDelete = createAsyncThunk(
    "consult/consultDelete",
    async (id,thunkAPI) => {

        const data = await consultService.consultDelete(id)

        if(data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)

export const consultFindById = createAsyncThunk(
    "consult/consultFindById",
    async (id,thunkAPI) => {

        const data = await consultService.consultFindById(id)

        if(data.errors) {
            return thunkAPI.rejectWithValue(data.erros[0])
        }
        return data
    }
)


export const consultSlice = createSlice({
    name: "consult",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(consultRegister.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(consultRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(consultRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(consultUpdate.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(consultUpdate.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(consultUpdate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(consultDelete.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(consultDelete.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(consultDelete.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(consultFindById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(consultFindById.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.consultData = action.payload
            })
            .addCase(consultFindById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const { reset } = consultSlice.actions;
export default consultSlice.reducer;