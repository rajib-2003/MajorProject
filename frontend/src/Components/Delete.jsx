import React from 'react';
import axios from 'axios';

class DeleteService extends React.Component {
    handleDelete = async () => {
        try {
            const serviceId = this.props.serviceId;
            await axios.delete(`/api/services/${serviceId}`);
            // If successful, update the UI (e.g., remove the deleted service from the list)
            this.props.onDelete(serviceId);
        } catch (error) {
            console.error('Error deleting service:', error);
            // Handle error (e.g., show a notification to the user)
        }
    };

    render() {
        return (
            <button onClick={this.handleDelete}>Delete</button>
        );
    }
}

export default DeleteService;
