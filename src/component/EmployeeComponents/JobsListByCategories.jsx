import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useGetJobsQuery } from '../../services/changasServices.js'
import { useGetJobsCategoriesQuery } from '../../services/changasServices.js'
import JobItem from './JobItem'

const JobsListByCategories = () => {

    const [productsFiltered, setProductsFiltered] = useState([])
    const { data: productsPreFiltered, error, isLoading } = useGetJobsQuery(categorySelected)

    console.log(jobs)
    useEffect(() => {
        const jobsPreFiltered = jobs.filter()
        jobs.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())

        setProductsFiltered(jobsPreFiltered)
        setError("")
    }, [jobsPreFiltered, jobs])

}

return (
    <View>
        {/* <FlatList 
           data={jobsListByCategories}
           keyExtractor={(jobs) => (jobs.id)}
            renderItem={(job) => <JobItem category={job.category}  />} 
            /> */}
    </View>
)


export default JobsListByCategories

const styles = StyleSheet.create({

})