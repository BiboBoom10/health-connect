import React from 'react';
import classes from './Faqs.module.css';

function Faqs() {

    const faqs = [
        {
          id: 1,
          question: '1. What is your return policy?',
          answer: 'We accept returns within 30 days of purchase. Items must be in their original packaging and unused.'
        },
        {
          id: 2,
          question: '2. How do I track my order?',
          answer: 'Once your order has shipped, you will receive an email with tracking information.'
        },
       
      ];

  return (
    <div>

        <h3 className={classes.faqs}>Frequently Asked Questions</h3>

         <div className={classes.content}>
        {faqs.map(faq => (
        <div key={faq.id}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Faqs