import React, {useEffect} from "react";
import {connect} from "react-redux";
import Select from 'react-select';
import * as actions from "../actions/category";
import * as itemActions from "../actions/item";

import { Row, Form, Col, Button } from "react-bootstrap";
import useForm from "./useForm";
import { useToasts } from "react-toast-notifications";

const initialFieldValues = {
    Name: '',
    Value: '',
    CategoryId: ''
}

const ItemsForm = (props) => {

    const { addToast } = useToasts()

    //get categories for category dropdown
    useEffect(() => {
        props.fetchCategories()
    },[])

    const { 
        values,
        handleInputChange,
        handleSelectChange,
        resetForm
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault();
        const onSuccess = () => { 
            addToast("Item is added", {appearance: 'success'}) 
            resetForm()
        }

        if(values.Name === "" || values.Value === "" || values.CategoryId === "") {
            addToast("Please enter all information for an item.", {appearance: 'error'})
        } else {
            props.createItem(values, onSuccess)
        }

    }

    return ( 
        <Form autoComplete="off" noValidate className="mt-2" onSubmit={handleSubmit}>
                <Row>
                    <Col lg="3">
                        <Form.Control name="Name" size="md" type="text" placeholder="Item Name" value={values.Name} onChange={handleInputChange}/>
                    </Col>
                    <Col lg="3">
                        <Form.Control name="Value" min="0" size="md" type="number" placeholder="Item Value" value={values.Value} onChange={handleInputChange}/>
                    </Col>
                    <Col lg="3">
                    <Select
                         getOptionLabel={option =>
                            `${option.name}`
                          }
                          getOptionValue={option => `${option.id}`}
                          options={props.categories}
                          placeholder={'Select Category'}
                          name="CategoryId"
                          onChange={handleSelectChange}
                          value={props.categories.filter(category => category.id === values.CategoryId)}
                    >
                    </Select>
                    </Col>
                    <Col lg="3">
                        <Button type="submit">Add</Button>{' '}
                    </Col>
                </Row>
        </Form> 
    );
}
 
const mapStateToProps = state => ({
    categories: state.category.list
})

const mapActionToProps = {
    fetchCategories: actions.fetchAllCategories,
    createItem: itemActions.create,
    deleteItem: itemActions.deleteItem
}

export default connect(mapStateToProps, mapActionToProps)(ItemsForm);