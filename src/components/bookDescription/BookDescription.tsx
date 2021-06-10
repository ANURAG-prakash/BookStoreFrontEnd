import React, { Component } from 'react'
import './BookDescription.css'

export class BookDescription extends Component {
  render() {
    return (
      <div className="Large-container">
      <div className="main-conatiner">
        <div className="BookdisHeader" >
          <h1>
            Book Details
          </h1>
        </div>
        <div className="DetailsConatiner">
        A book is a medium for recording information in the form of writing or images,
         typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cove
         r. 
        </div>
        
      </div>
      </div>
    )
  }
}

export default BookDescription
