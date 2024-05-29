import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import JobItem from './JobItem'
import { useGetJobsByIdQuery } from '../../services/changasServices'
const JobsList = ({ title, navigation }) => {
const {data: jobs, error, isLoading } = useGetJobsByIdQuery();
  
const [data, setData] = useState(null);

useEffect(() => {

}, []);

return (
    <View>
      <Text style={styles.jobListTitle}>{title}</Text>
      <FlatList
      data={jobs}
      keyExtractor={(jobs) => {jobs.jobId}}
      renderItem={({item} ) => (
        <JobItem job={item} jobTitle={jobs.title} navigation={navigation}/>
      )}
        /* data={jobs}
        keyExtractor={item => item.item.id}
        renderItem={({ item }) => <JobItem
          jobTitle={item.jobtitle}
          jobAge={item.jobAge}
          category={item.category}
          firm={item.firm}
          location={item.location}
          otherdata={item.otherdata}
          experience={item.experience}
        />} */
      />
    </View>
  )
}

export default JobsList

const styles = StyleSheet.create({
  jobListTitle: {
    fontSize: 28,
    fontFamily: 'retosta',
    margin: 10
  },
  textArray: {
    color: 'black',
    fontSize: 28
  }

})