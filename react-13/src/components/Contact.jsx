import React from 'react';

class Contact extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <article data-testid ="contact" className="contact">
        <img className="contact__avatar" src={data.avatar} alt={data.name}/>
        <span className="contact__data">{data.name}</span>
        <span className="contact__data">{data.phone}</span>
        <span className="contact__data">{data.country}</span>
        <span className="contact__data">{new Date(data.admissionDate).toLocaleDateString()}</span>
        <span className="contact__data">{data.company}</span>
        <span className="contact__data">{data.department}</span>
      </article>
    );
  }
}

export default Contact;
