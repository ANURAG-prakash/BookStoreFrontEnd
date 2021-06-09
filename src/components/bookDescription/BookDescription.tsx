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
         r. The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records,
          the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.
        </div>
        
      </div>
      </div>
    )
  }
}

export default BookDescription
