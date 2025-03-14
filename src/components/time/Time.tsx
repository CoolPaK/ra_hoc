/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react';
import './Time.css';
import DateTimePretty from './DateTimePretty';

function Time(_props: any) {
  const [list, _setList] = useState([
    {
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2017-07-31 13:24:00'
    },
    {
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-03-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-02-03 23:16:00'
    },
    {
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-01-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-01-01 16:17:00'
    },
    {
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2017-12-02 05:24:00'
    },
]);

  function DateTime(props: any) {
    return (
        <p className="date">{props.date}</p>
    )
  }

  function Video(props: listEl) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTime date={props.date} />
        </div>
    )
  }

  function VideoList(props: any) {
    return props.props.map((item: listEl) => <Video url={item.url} date={item.date} key={item.url + item.date} />);
  }

  type listEl = {
    url: string
    date: string
  }
  
  const DateTimePrettyProps = {
    Component: VideoList,    
    getDates: (list: listEl[]) => list.map((el: listEl) => new Date(el.date)),
    setDates: (list: string[], componentProps: any) => {
      const props = componentProps.componentProps;
      const result = props.map((el: listEl, index: number) => {
        return {
          ...el,
          date: list[index]
        }
      });
      return result;
    }
  }
  const NewVideoList = DateTimePretty(DateTimePrettyProps)

  return (
    <div className="container__time">
      <NewVideoList componentProps={list} />
    </div>    
  );
}

export default Time;