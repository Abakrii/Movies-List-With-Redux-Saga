import React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';
import styles from './Style';
class MovieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      releaseYear: '',
    };
  }

  render() {
    const {
      container,
      moviesListText,
      newMoviesInformationText,
      secoundContainer,
      firstTextInput,
      secoundTextInput,
      viewButton,
      fetchAndAddMovie,
      flatLitText,
    } = styles;
    console.log("props" , this.props)
    return (
      <ScrollView style={container}>
        <Text style={moviesListText}>Redux Saga Movies List</Text>
        <Text style={newMoviesInformationText}>New Movies Information</Text>
        <View style={secoundContainer}>
          <TextInput
            style={firstTextInput}
            onChange={text => this.setState({movieName: text})}
            value={this.state.movieName}
            placeholder="Enter New Movie Name"
          />
          <TextInput
            style={secoundTextInput}
            onChange={text => this.setState({releaseYear: text})}
            value={this.state.releaseYear}
            placeholder="Release Year"
          />
        </View>
        <View style={viewButton}>
          <Button
            style={fetchAndAddMovie}
            title="Fetch Movie"
            onPress={() => {
              this.props.onFetchMovies('asc');
            }}
          />
          <View style={{paddingHorizontal: 10}}/>
          <Button style={fetchAndAddMovie}  title="Add Movie" onPress={() => {}} />
        </View>
        <FlatList
          data={this.props.movies}
          keyExtractor={item => item.name}
          renderItem={({item, index}) => 
            <Text
              style={{
                  padding: 10,
                  fontWeight: 'bold',
                  fontSize: 17,
                  color: 'white',
                  backgroundColor:
                    index % 2 === 0 ? 'dodgerblue' : 'mediumseagreen',
                }}>
                {`${item.name}, releaseYear= ${item.releaseYear}`}
                </Text>
          }
        />
      </ScrollView> );
  }
}

export default MovieComponent;
