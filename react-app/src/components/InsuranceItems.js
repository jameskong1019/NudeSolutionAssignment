import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/category";
import * as itemActions from "../actions/item";
import { Row, Col, Container} from "react-bootstrap";
import ItemsForm from './InsuranceItemsForm';


const Items = (props) => {

    useEffect(() => {
        props.fetchAllItems()
    },[])

    const onDelete = id => {
        if(window.confirm('Are you sure to delete this item?')) {
            props.deleteItem(id, () => {console.log("Deleting item is success..")})
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center my-3"> 
                <h4>
                    List of Items
                </h4>
            </Row>
                {
                    props.itemList.filter(m => m.items.length > 0).map((category, index) => {
                        return (
                            <Row key={index}>
                                <Col lg="6">
                                    {category.name}
                                </Col>
                                <Col lg="6">
                                    $ { category.items.reduce((sum, i) => (
                                        sum += i.value
                                    ), 0)
                                    }
                                </Col>
                                {
                                    category.items.map((item, itemIndex) => {
                                        return (
                                            <Col lg="12" key={index + "-" + itemIndex}>
                                                <Row className="ml-2 align-items-center my-1">
                                                    <Col lg="6" >
                                                        {item.name}
                                                    </Col>
                                                    <Col lg="6">
                                                        $ {item.value} 
                                                        <a className="delete-item" onClick={() => onDelete(item.id)}><i className="fa fa-trash ml-2"></i></a>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        )
                    })
                }
            <Row className="my-2">
                <Col className="mr-2 font-weight-bold">
                <span className="mr-2">TOTAL</span> 
                ${
                        props.itemList.reduce((total, category) => {
                            return total += category.items.reduce((sum, i) => (
                             sum += i.value
                            ), 0);
                        }, 0)
                }
                </Col>
            </Row>
            <ItemsForm></ItemsForm>
           </Container>
        );
}
 
const mapStateToProps = state => ({
        itemList: state.item.list
    })

const mapActionToProps = {
    fetchAllItems: actions.fetchAll,
    deleteItem: itemActions.deleteItem
}

export default connect(mapStateToProps, mapActionToProps)(Items);