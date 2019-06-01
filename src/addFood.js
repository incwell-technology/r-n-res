import React from "react";
import axios from 'axios';

class Addfood extends React.Component {
    constructor(props) {
        super(props);
        this.state = "";
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        // this.setState({
        //     value: event.target.value
        // });
    }

    handleSubmit(event) {
        axios.post('http://localhost:8080/addFoodItem', {
            food_name: this.state.food_name,
            category: this.state.category,
            price: this.state.price,
            imgUrl: this.state.imgUrl
        })
        alert('Your Form has been submitted');
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="food_name">Food Name</label>
                <input type="text" name="food_name" value={this.state.food_name} onChange={this.handleChange} class="form-control" id="food_name" placeholder="Crispy Fried Chicken" />
                </div>
                <div class="form-group col-md-6">
                <label for="category">Category</label>
                <input type="text" name="category" value={this.state.category} onChange={this.handleChange} class="form-control" id="category" placeholder="Snacks" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="price">Price</label>
                    <input type="text" name="price" value={this.state.price} onChange={this.handleChange} class="form-control" id="price" placeholder="300" />
                </div>
                <div class="form-group col-md-6">
                    <label for="img-url">Image URL</label>
                    <input type="text" class="form-control" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} id="img-url" placeholder="https://i.imgur.com/5ezd8Bk.jpg" />
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Addfood;