import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../database/realtimedatabase/realtimeDatabase'
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
                console.log(responseTransformed)
                return null
            }
        }),
        candidateJob: builder.mutation(
            {
                query: ({ ...candidateJob }) => ({
                    url: `candidate.json`,
                    method: 'POST',
                    body: candidateJob
                })

            }),

        postNwJob: builder.mutation(
            {
                query: ({ ...postedJob }) => ({
                    url: `jobs.json`,
                    method: 'POST',
                    body: postedJob
                })

            }),
        editPostedJob: builder.mutation(
            {
                query: ({ ...editedJob }) => ({
                    url: `jobs.json`,
                    method: 'PATCH',
                    body: editedJob
                })
            }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
            invalidatesTags: ['profileImageGet']
        })
    })
})

export const { useGetJobsQuery,
    useGetJobsCategoriesQuery,
    useGetJobsbyCategoryQuery,
    useGetJobsByIdQuery,
    usePostNwJobMutation,
    useEditPostedJobMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation
} = changasApi



