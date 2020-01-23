import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const GET_ANNOTATION_TYPES_QUERY = gql`
    query annotation_types {
        annotation_types {
            annotation_type
        }
    }
`;

function displayAnnotationTypes(data){
    if(data.loading){
        return( <option disabled>Loading anno types </option> );
    } else {
        return data.data.annotation_types.map(anno_type => {
            return( <option key={ anno_type.annotation_type } value={anno_type.annotation_type}>{ anno_type.annotation_type }</option> );
        });
    }
}

function AnnotationTypesDropDown() {
    const annotationTypes = useQuery(GET_ANNOTATION_TYPES_QUERY);
    console.log(annotationTypes)
    return(
        <div className="field">
            <label>Annotation Type:</label>
            <select>
                <option>Select annotation type</option>
                { displayAnnotationTypes(annotationTypes) }
            </select>
        </div>
    )
}

export default AnnotationTypesDropDown