import React, { Component } from 'react';
import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
    console.log(activeModule),
    <div>
        <strong>Modulo {activeModule.title} </strong>
        <span> Aula {activeLesson.title}</span>
    </div>
);

export default connect(state => ({
    activeModule: state.activeModule,
    activeLesson: state.activeLesson,
}))(Video);
