import React , {useState,useEffect} from 'react';
import Databases from './DataBases/Databases';
import { useSelector , useDispatch } from 'react-redux';
import {removePerson , removeAll} from '../store/Person/Person'
import Data from '../store/Data/Data'

const Birthday = () => {

    const {DataPerson} = useSelector((state => state))
    const dispatch = useDispatch();

    const DataStore = () => {
        return DataPerson.person.map(i => {
            return(
                <div className='person' key={i.id}>
                    <img src={i.image} />
                    <div className='text'>
                        <span className='name'>{i.name}</span>
                        <span  className='age'>{i.age} years</span>
                    </div>
                </div>
            )
        })
    }

    return(
        <div className='project-1'>
            <div className='content'>
                <div className='header'>
                    <h1> {DataPerson.person.length} Birthdays today</h1>
                </div>
                <div className='all-person'>
                    {DataStore()}
                </div>
                <div className='button'>
                    <button onClick={() => dispatch(removeAll())} >Clear All</button>
                </div>
            </div>
        </div>
    )
}
export default Birthday;