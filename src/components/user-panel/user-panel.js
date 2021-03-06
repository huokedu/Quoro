import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getUserQuestions } from '../../actions/questions';

import QuestionPreview from '../question-preview/question-preview';
import List from '../list/list';
import Avatar from '../avatar/avatar';

export class UserPanel extends Component {

  componentWillMount() {
    this.props.getUserQuestions(this.props.user.id);
  }

  render() {
    const { questions, user: { username, avatar } } = this.props;
    const howManyQuestionsAsked = questions.length;
    return (
      <div
        className="UserPanel"
      >
        <div
          className="container"
        >
          <div
            className="row"
          >
            <article
              className="col-4"
            >
              <Avatar
                src={avatar}
                isVisible={avatar}
              />
              <h3>Statistics</h3>
              <p>Questions asked: {howManyQuestionsAsked}</p>
            </article>
            <section
              className="col-8"
            >
              <h1>Your questions</h1>
              <List
                data={questions}
                component={QuestionPreview}
              />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

UserPanel.propTypes = {
  questions: PropTypes.array,
  user: PropTypes.object,
  getUserQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({ user: state.user, questions: state.questions.userQuestions });

export default connect(mapStateToProps, { getUserQuestions })(UserPanel);
