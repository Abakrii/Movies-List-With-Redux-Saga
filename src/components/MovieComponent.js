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
  ScrollView,
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

 

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({item, index}) => (
    <Text
      id={item.id}
      style={{
        padding: 10,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        backgroundColor: index % 2 === 0 ? 'dodgerblue' : 'mediumseagreen',
      }}>
      {`${item.name}, releaseYear= ${item.releaseYear}`}
    </Text>
  );

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

    const {movieName, releaseYear} = this.state;
    console.log('this state', this.state);
    console.log('props', this.props);
    return (
      <ScrollView style={container}>
        <Text style={moviesListText}>Redux Saga Movies List</Text>
        <Text style={newMoviesInformationText}>New Movies Information</Text>
        <View style={secoundContainer}>
          <TextInput
            style={firstTextInput}
            onChangeText={(text) => this.setState({movieName :text})}
            value={this.state.movieName}
            placeholder="Enter New Movie Name"
          />
          <TextInput
            style={secoundTextInput}
            onChangeText={(text) => this.setState({releaseYear :text})}
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
          <View style={{paddingHorizontal: 10}} />
          <Button
            style={fetchAndAddMovie}
            title="Add Movie"
            onPress={() => {
              if (!movieName.length || !releaseYear.length) {
                alert(
                  'you must enter a move name and the release year together',
                );
                return;
              }

              this.props.onAddMovie({
                name: movieName,
                releaseYear: releaseYear,
              });
            }}
          />
        </View>
        <FlatList
          data={this.props.movies}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </ScrollView>
    );
  }
}

export default MovieComponent;
