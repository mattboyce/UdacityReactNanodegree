
import React from 'react';

const changeTab = (tabName) => {

    console.log('WAT');

    const tabContent = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabContent.length; i++) {
        console.log(tabContent[i].id);
        if (tabName === tabContent[i].id) {
            tabContent[i].style.display = "block";
        }
        else {
            tabContent[i].style.display = "none";
        }
    }
}

export const Home = () => {
    return (
        <div id='wrapper'>
            <div className="tab">
                <button onClick={() => changeTab('unanswered')}>Unanswered Polls</button>
                <button onClick={() => changeTab('answered')}>Answered Polls</button>
            </div>

            <div id="unanswered" className="tabcontent">
                <h3>Unanswered</h3>
            </div>

            <div id="answered" className="tabcontent" style={{ display: 'none' }}>
                <h3>Answered</h3>
            </div>
        </div >
    );
};