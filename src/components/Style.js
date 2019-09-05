import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
  //  flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
  moviesListText: {
      margin: 10,
      fontWeight: 'bold',
      color: 'forestgreen',
      fontSize: 20,
  },
  newMoviesInformationText: {
      margin: 10,
      color: 'black',
      fontSize: 20,
  },
  secoundContainer: {
      height: 100,
      margin: 10,
  },
  firstTextInput: {
      flex: 1,
      margin: 5,
      padding: 10,
      borderColor: 'gray',
      borderWidth: 1
  },
  secoundTextInput: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: 120
  },
  viewButton: {
      height: 70,
      flexDirection: 'row',
  },
  fetchAndAddMovie: {
      padding: 10,
      margin: 10,
      width: 150,
      height: 45,
      borderRadius: 10,
      backgroundColor: 'darkviolet' 
  },
  flatLitText: {
      padding: 10,
      fontWeight: 'bold',
      fontSize: 17,
      color: 'white',
     
  }
});