import React from 'react';
import { Typography } from '@material-ui/core';
import GroupForm from './GroupForm';

class UpdateGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          group: {}
        };      
    }

    componentDidMount() {
        const groupRootUrl = "https://raw.githubusercontent.com/kyleroush/react-app/master/src/rest/group/group.json";
        const url = groupRootUrl;// + getFilters() + addPagination();
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                group: result,
                totalResults: 6//result.totalResults
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: false,
                error: error.message
              });
            }
        )
    }

    render() {
        const { error, isLoaded, group, } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <Typography>
                        This Page is the Update Group page.
                    </Typography>
                    <Typography>
                        This is group {this.props.match.params.id}
                    </Typography>
                    <GroupForm group={group}/>
                </div>
            );
        }
    }
}
export default UpdateGroup;