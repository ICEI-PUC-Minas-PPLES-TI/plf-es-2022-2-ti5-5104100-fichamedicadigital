import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";


const initialState = {
    userData: [],
    pacienteData: [],
    medicoData: [],
    medicoLogado: [],
    error: false,
    success: false,
    loading: false,
};

export const userRegister = createAsyncThunk(
    "user/userRegister",
    async (userData, thunkAPI) => {

        const data = await userService.userRegister(userData);

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }
        return data;
    }
);

export const userUpdate = createAsyncThunk(
    "user/userUpdate",
    async (userData, thunkAPI) => {

        const data = await userService.userUpdate(userData);

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }
        return data;
    }
);

export const userDelete = createAsyncThunk(
    "user/userDelete",
    async (id,thunkAPI) => {

        const data = await userService.userDelete(id);

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }
        return data;
    }
);

export const userFindAll = createAsyncThunk(
    "user/userFindAll",
    async (thunkAPI) => {
        const data = await userService.userFindAll()

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)

export const pacientesFindAll = createAsyncThunk(
    "user/pacientesFindAll",
    async (thunkAPI) => {
        const data = await userService.pacientesFindAll()

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)

export const medicosFindAll = createAsyncThunk(
    "user/medicosFindAll",
    async (thunkAPI) => {
        const data = await userService.medicosFindAll()

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)

export const medicosFindById = createAsyncThunk(
    "user/medicosFindById",
    async (id,thunkAPI) => {
        const data = await userService.medicosFindById(id)

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)


export const userSlice = createSlice({
    name: "user",
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
            .addCase(userRegister.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.userData = action.payload;
                state.error = null;
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(userUpdate.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userUpdate.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(userUpdate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(userDelete.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userDelete.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(userDelete.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(userFindAll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userFindAll.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.userData = action.payload
            })
            .addCase(userFindAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(pacientesFindAll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(pacientesFindAll.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.pacienteData = action.payload
            })
            .addCase(pacientesFindAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(medicosFindAll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(medicosFindAll.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.medicoData = action.payload
            })
            .addCase(medicosFindAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(medicosFindById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(medicosFindById.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.medicoLogado = action.payload
            })
            .addCase(medicosFindById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            
    },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;