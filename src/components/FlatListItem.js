import React, { Component } from 'react'
import { Text, View, Alert, Platform, TextInput } from 'react-native'
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }

   
  render() {
      console.log('flatList props' , this.props)
      const swipeSetting = {
          autoClose: true,
          right: [
              {
                  onPress: ()=>{
                      const {movieComponent} = this.props;
                      //show the modal here! 
                      movieComponent.refs.editModal.showEditModal({...this.props});

                  },
                  text: 'Edit', type: 'primary'
              },
              {
                onPress: ()=>{
                    const {movieComponent} = this.props;
                    movieComponent.props.onDeleteItemAction(this.props.id);

                },
                text: 'Delete', type: 'delete' 
              }
          ],
          rowId: this.props.id, 
          sectionId: 1

      };
    return (
     <Swipeout {...swipeSetting}>
     <Text
      id={this.props.id}
      style={{
        padding: 10,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        backgroundColor: this.props.itemIndex % 2 === 0 ? 'dodgerblue' : 'mediumseagreen',
      }}>
      {`${this.props.name}, releaseYear= ${this.props.releaseYear}`}
    </Text>
     </Swipeout>
    )
  }
}

export default FlatListItem