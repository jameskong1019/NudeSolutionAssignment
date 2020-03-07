import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/category";


const Items = (props) => {
    useEffect(() => {
        props.fetchAllItems()
    },[])

    return (<div>from Items</div>);
}
 
const mapStateToProps = state => ({
        itemList: state.item.list
    })

const mapActionToProps = {
    fetchAllItems: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Items);