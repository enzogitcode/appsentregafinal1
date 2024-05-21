import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../database/realtimedatabase/realtimeDatabase.js'

export const changasApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getJobsCategories: builder.query({ query: () => `categories.json` }),
        getJobs: builder.query({ query: () => `jobs.json` }),
        getJobsbyCategory: builder.query({
            query: (category) => `jobs.json?orderBy="category"&equalTo="${category}"`

        }),
        getJobsById: builder.query({
            query: (id) => `jobs.json?orderBy="id"&equalTo=${id}`
        })


    })
})
export const { useGetJobsCategoriesQuery, useGetJobByIdQuery, useGetProductsByCategoryQuery } = changasApi



