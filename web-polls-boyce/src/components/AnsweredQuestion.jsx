// import React from 'react';
// // import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Header, Button } from 'semantic-ui-react';

// const AnsweredQuestion = (question) => {

//     if (question === undefined || question.question === undefined) {
//         return (<></>);
//     }

//     return (
//         <div>
//             <Header as="h4" style={{ textAlign: 'center' }}>
//                 Would you rather
//             </Header>
//             <p style={{ textAlign: 'center' }}>
//                 {question.question.optionOne.text}
//                 <br />
//                 or...
//                 <br />
//                 {question.question.optionTwo.text}
//             </p>
//             <div style={{ textAlign: 'center' }}>
//                 <Button
//                     size="tiny"
//                     fluid
//                     onClick={handleClick}
//                     content="Answer Question"
//                 />
//                 <p>----------------------------------------</p>
//             </div>
//         </div>
//     );
// };

// AnsweredQuestion.propTypes = {
//     question: PropTypes.object.isRequired,
// };

// export default AnsweredQuestion;