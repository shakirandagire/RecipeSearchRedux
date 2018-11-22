import React, { Component } from 'react'
import './SearchBar.css';
import  {searchRecipesAction} from './action';
import { connect } from 'react-redux';

export class SearchBar extends Component {
    state = {
        searchValue: '',
    }

    handleSearchChange = (event) => {
        this.setState({
            searchValue: event.target.value,
        })
    }

    handleRecipeSearch = (event) =>{
        const { searchValue } = this.state
        event.preventDefault();
        this.props.searchRecipesAction(searchValue);
    }

    render(){
        return(
      
            <div>
                <input type='text' className='searchInput' onChange={this.handleSearchChange}/>
                <input type='submit' className='searchButton' onClick={this.handleRecipeSearch}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        searchRecipesAction: (searchValue) => dispatch(searchRecipesAction(searchValue))
    }
}

export const searchBarContainer = connect(null, mapDispatchToProps)(SearchBar)