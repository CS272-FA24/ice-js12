const COURSES = getCourseList();

const courseDivNode = document.getElementById("course-list")

// TODO #1 Insert many course components into the courseDivNode!

function createCourseComponent(courseData) {
    const newColDivNode = document.createElement("div");
    newColDivNode.id = `course-${courseData.id}`;
    newColDivNode.className = "col-12 col-md-6 col-lg-4";
    
    const newCardDivNode = document.createElement("div");
    newCardDivNode.className = "card m-2 p-2";

    const newStarNode = document.createElement("span");
    newStarNode.style.float = "right";
    newStarNode.className = "bi-star";
    // TODO #2 Add an event listener to the star to make it clickable!
    //         You can use the class name of bi-star-fill

    const newBadgesDivNode = document.createElement("div");
    newBadgesDivNode.style.display = "flex";
    // TODO #3 Add a badge for each one of the keywords
    //         https://getbootstrap.com/docs/5.3/components/badge/

    const newTitleNode = document.createElement("h2");
    newTitleNode.innerText = `${courseData.id}: ${courseData.name}`;

    const newCreditsNode = document.createElement("p");
    newCreditsNode.style.fontWeight = 200;
    newCreditsNode.innerText = `${courseData.credits} credits`

    const newDescNode = document.createElement("p");
    newDescNode.id = `course-${courseData.id}-description`;
    newDescNode.innerText = courseData.description;

    const newReadMoreNode = document.createElement("button");
    newReadMoreNode.id = `course-${courseData.id}-btn`;
    newReadMoreNode.className = "btn btn-outline-secondary";
    newReadMoreNode.innerText = "Read More"
    // TODO #4 Implement the button such that it toggles the amount
    //         of description that is being shown (e.g. 200 characters)

    newTitleNode.appendChild(newStarNode);

    newCardDivNode.appendChild(newTitleNode);
    newCardDivNode.appendChild(newCreditsNode);
    newCardDivNode.appendChild(newBadgesDivNode)
    newCardDivNode.appendChild(newDescNode);
    newCardDivNode.appendChild(newReadMoreNode)

    newColDivNode.appendChild(newCardDivNode);

    return newColDivNode;
}
