import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../database/realtimedatabase/realtimeDatabase.js'

export const changasApi = createApi({
    reducerPath: "changasApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getJobsCategories: builder.query({ query: () => `categories.json` }),
        
        getJobs: builder.query({ query: () => `jobs.json` }),
        
        getJobsbyCategory: builder.query({
            query: (category) => `jobs.json?orderBy="category"&equalTo="${category}"`, 
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                console.log(responseTransformed)
                return responseTransformed
            } 
        }),
        getJobsById: builder.query({
            query: (jobId) => `jobs.json?orderBy="id"&equalTo=${jobId}`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                if (responseTransformed.length) return responseTransformed[0]
                console.log (responseTransformed)
                return null
            }

        })
    })
})

export const { useGetJobsQuery, useGetJobsCategoriesQuery, useGetJobsByIdQuery } = changasApi



