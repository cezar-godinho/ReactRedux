import React from 'react';

import { connect } from 'react-redux';
import * as CourseActions from '../../store/actions/course'

const Sidebar = ({ module, dispatch}) => (
    <aside>
        {module.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lesson.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title}
                            <button onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}>
                                Selecionar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>

)

export default connect(state => ({ module: state.course.module }))(Sidebar);