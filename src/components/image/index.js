import React from 'react';

function Image(props) {
    let classes = ["image", "img-fluid"]

    if (props.classes !== "") {
        const newClasses = props.classes.split(" ");

        newClasses.forEach(c => {
            if(c[0] === "-"){
                classes = classes.filter(x => x !== c.slice(1))
            } else {
                classes.push(c)
            }
        })
    }

    return <img src={props.src} alt={props.alt} className={classes.join(" ")} />
}

Image.defaultProps = {
    alt: "#",
    src: "#",
    classes: ""
}

export default Image