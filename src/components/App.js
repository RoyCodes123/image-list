import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList'

class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=28075494-722d6545343fe3544c91e937b&q=${entry}&image_type=photo&pretty=true`)
        this.setState({images:response.data.hits})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;