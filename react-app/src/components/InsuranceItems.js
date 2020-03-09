import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/category";
import * as itemActions from "../actions/item";
import { Row, Col, Container} from "react-bootstrap";
import ItemsForm from './InsuranceItemsForm';
import { useToasts } from "react-toast-notifications";

const Items = (props) => {

    const { addToast } = useToasts()

    useEffect(() => {
        props.fetchAllItems()
    },[])

    const onSuccess = () => { 
        addToast("Item is deleted", {appearance: 'success'}) 
    }

    const onDelete = id => {
        if(window.confirm('Are you sure to delete this item?')) {
            props.deleteItem(id, onSuccess)
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center my-2"> 
                <h4>
                    List of Items
                </h4>
            </Row>
                {
                    props.itemList.filter(m => m.items.length > 0).map((category, index) => {
                        return (
                            <Row className="my-2" key={index}>
                                <Col lg="3">
                                    {category.name}
                                </Col>
                                <Col lg="3">
                                    $ { category.items.reduce((sum, i) => (
                                        sum += i.value
                                    ), 0).toLocaleString()
                                    }
                                </Col>
                                {
                                    category.items.map((item, itemIndex) => {
                                        return (
                                            <Col lg="12" key={index + "-" + itemIndex}>
                                                <Row className="ml-2 align-items-center my-1">
                                                    <Col lg="3" >
                                                        {item.name}
                                                    </Col>
                                                    <Col lg="3">
                                                        ${item.value.toLocaleString()} 
                                                        <a href="/#" className="delete-item" onClick={() => onDelete(item.id)}><i className="fa fa-trash ml-2"></i></a>
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
                        }, 0).toLocaleString()
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