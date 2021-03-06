/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Counter = ({
  counter,
  inc,
  dec,
  rnd,
}) => (
  <div className="jumbotron">
    <h2 id="counter">{counter}</h2>
    <button
      type="button"
      className="btn btn-primary btn-lg"
      onClick={dec}
    >
      DEC
    </button>
    <button
      type="button"
      className="btn btn-primary btn-lg"
      onClick={inc}
    >
      INC
    </button>
    <button
      type="button"
      className="btn btn-primary btn-lg"
      onClick={rnd}
    >
      RND
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  counter: state,
});

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, actions)(Counter);
