import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Select from 'react-select';
import * as actions from "../actions/category";
import * as itemActions from "../actions/item";

import { Row, Form, Col, Container, Button } from "react-bootstrap";
import useForm from "./useForm";

const initialFieldValues = {
    Name: '',
    Value: '',
    CategoryId: 0
}

const ItemsForm = (props) => {

    useEffect(() => {
        props.fetchCategories()
    },[])

    const { 
        values,
        setValues,
        handleInputChange,
        handleSelectChange,
        resetForm
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault();
        props.createItem(values, () => { console.log("success.. inserted item!")})
        resetForm()
        console.log(values);
    }

    return ( 
    <Container>
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
    </Container>
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