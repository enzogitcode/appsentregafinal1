import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../database/realtimedatabase/realtimeDatabase'

export const changasApi = createApi ({
    baseQuery: fetchBaseQuery ({baseUrl:baseUrl}),
    endpoints: (builder) => ({
        getCategories: builder.query ({query: () => `categories.json` }),

        getJobsbyCategory: builder.query ({
            query: (category) => `jobsListData.json?orderBy="category"&equalTo=${category}`

        }),
        getJobsById: builder.query ({
            query: (jobId) =>`jobsListData.json?orderBy="id"&equalTo=${jobId}`
        })
 

    })
})
export const {useGetCategoriesQuery, useGetJobByIdQuery, useGetProductsByCategoryQuery} = changasApi

