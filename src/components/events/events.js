import React from 'react'
import styled from 'styled-components'
const eventsData = [
  {
    date: 'FEB 2',
    time: '8am',
    address: '919 19th St NW, Washington, DC 20006',
    name: 'Georgetown Africa Business Conference',
  },
  {
    date: 'FEB 11',
    time: '7pm',
    address: '70 District Sq SW Washington, DC  20024',
    name: 'Ayesha Harruna Attah - The Hundred Wells of Salaga',
  },
  {
    date: 'Mar 6',
    time: '6pm',
    address: '919 19th St NW, Washington, DC 20006',
    name: 'Third Annual YAP DC Townhall',
  },
  {
    date: 'Mar 28',
    time: '6pm',
    address: '919 19th St NW, Washington, DC 20006',
    name: 'Monthly Networking Happy Hour, sponsored by Wave',
  },
  {
    date: 'April 25',
    time: '7pm',
    address: '919 19th St NW, Washington, DC 20006',
    name: 'Sally Nuamah at Politics and Prose',
  },
]
const YapEvents = styled.ul`
  list-style: none;
  margin: auto;
  li {
    border: 2px solid #000;
    border-bottom: 1px solid;
    padding: 12px;
    margin-bottom: 0px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'name name' 'date-time address';
    grid-template-rows: auto;
    transition: 0.3s;

    /* grid-template-areas: 'name date-time address'; */

    :last-child {
      border-bottom: 2px solid;
    }

    :hover {
      border: 2px solid #fcbc19;
      z-index: 100;
      margin-bottom: -2px;
      margin-top: -2px;
      position: relative;
    }
    .date-time {
      grid-area: date-time;
    }
    .date {
      font-size: 36px;
      margin-bottom: 3px;
    }
    .time {
      font-size: 18px;
    }

    .name {
      font-size: 24px;
      grid-area: name;
    }
    .address {
      font-size: 18px;
      grid-area: address;
    }
  }

  @media (min-width: 992px) {
    width: 825px;
    margin-right: 0px;
    transition: 0.3s;

    li {
      :hover {
        width: 840px;
        margin-left: -15px;
        padding-left: 33px;
        max-width: unset;
        /* .name {
          padding: 0px 5px;
        } */
      }
      grid-template-columns: 30% 40% 30%;
      grid-template-areas: 'date-time name address';
      margin-right: 1px;
      padding: 18px;

      .name {
        padding: 0px 5px;
        transition: none;
      }
    }
  }
`
const Events = () => {
  return (
    <YapEvents>
      {eventsData.map((event, index) => {
        return (
          <li key={index}>
            <div className="date-time">
              <h5 className="date">{event.date}</h5>
              <h4 className="time">{event.time}</h4>
            </div>
            <h3 className="name">{event.name}</h3>
            <h5 className="address">{event.address}</h5>
          </li>
        )
      })}
    </YapEvents>
  )
}

export default Events
