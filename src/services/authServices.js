import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { baseAuthUrl, apiKey } from '../database/users'
export const authApi = createApi({
  reducePath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
  endpoints: (builder) => {
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signUp?key=${apiKey}`,
        method: "POST",
        body: auth
      })
    })
  }
})

