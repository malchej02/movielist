import React, {useState, useRef} from 'react';

export default function MovieList() {

    return (
        <div>
            <legend><strong>Titel:</strong></legend>
            <input className="form-control" placeholder='Titel här...'/>
        </div>
    )
}