import React, { Component } from 'react';
import List from '../components/list';
import "../styles/Skill.css"

export default ()=>(
    <div className="skills" id="#skill">
        <h2 className="skill-header">Skills</h2>
        <div className="list-items">
            <List name={`Reactjs`} status={`Expert`}/>
            <List name={`Reactjs`} status={`Expert`}/>
            <List name={`Reactjs`} status={`Expert`}/>
            <List name={`Reactjs`} status={`Expert`}/>
            <List name={`Reactjs`} status={`Expert`}/>
            
        </div>
    </div>
)