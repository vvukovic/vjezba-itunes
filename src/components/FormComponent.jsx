import React from 'react';

export default function Form() {
    
    return (
        <>
            <h1>iTunes search</h1>
            <form>
                <input type="text" name="inputText" />
                <input type="submit" value="Search"/>
            </form>
        </>
    );
}