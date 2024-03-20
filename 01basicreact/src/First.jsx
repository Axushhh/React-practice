function FirstFunc (){
    // only use capitalised words (first letter should be big)
    return(
        <h1>The first function is executed by react</h1>
    )
}

export default FirstFunc 

// EXTENSIONS
// .jsx -> is used when the component is returning some html content
// .js -> is used when the page or component only returning the pure Javascript

// In vite we have to manual pass the script in index file 
// while the create react app or pure library have already some packages which inject JS on there own
// which we can look in package.json 
//     "react-scripts": "5.0.1",
