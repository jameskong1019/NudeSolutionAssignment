import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/category";
import { Row, Col, Card, Button } from "react-bootstrap";
import ItemsForm from "./InsuranceItemsForm";


const Items = (props) => {
    useEffect(() => {
        props.fetchAllItems()
    },[])

    return (
        <Card className="mt-2 p-2">
            <Row className="justify-content-md-center mt-3"> 
                <h4>
                    List of Items
                </h4>
            </Row>
                {
                    props.itemList.map((category, index) => {
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
                                                <Row className="ml-2">
                                                    <Col lg="6" >
                                                        {item.name}
                                                    </Col>
                                                    <Col lg="6">
                                                        $ {item.value} 
                                                        <Button className="ml-2"></Button>
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
            <Row>
                <Col>
                Total:
                    {
                        props.itemList.reduce((total, category) => {
                            return total += category.items.reduce((sum, i) => (
                             sum += i.value
                            ), 0);
                        }, 0)
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemsForm></ItemsForm>
                </Col>
            </Row>
        </Card>
        );
}
 
const mapStateToProps = state => ({
        itemList: state.item.list
    })

const mapActionToProps = {
    fetchAllItems: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Items);