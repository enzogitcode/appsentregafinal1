import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../database/realtimedatabase/realtimeDatabase.js'

export const changasApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getJobsCategories: builder.query({ query: () => `categories.json` }),
        getJobs: builder.query({ query: () => `jobs.json` }),
        getJobsbyCategory: builder.query({
            query: (category) => `jobs.json?orderBy="category"&equalTo="${category}"`,
            /* transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            } */
        }),
        getJobsById: builder.query({
            query: (jobId) => `jobs.json?orderBy="id"&equalTo=${jobId}`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                if (responseTransformed.length) return responseTransformed[0]
                return null
            }

        })
    })
})

export const { useGetJobsQuery, useGetJobsCategoriesQuery, useGetJobsByIdQuery } = changasApi



