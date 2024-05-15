import React from 'react';

const Footer = () => {
  return (
    <div >
      <h2 className="text-lg font-bold mb-4">Conference Calendar</h2>
      <div className="grid grid-cols-3 gap-4">
        <ConferenceMonth month="January" />
        <ConferenceMonth month="February" />
        <ConferenceMonth month="March" />
        <ConferenceMonth month="April" />
        <ConferenceMonth month="May" />
        <ConferenceMonth month="June" />
        <ConferenceMonth month="July" />
        <ConferenceMonth month="August" />
        <ConferenceMonth month="September" />
        <ConferenceMonth month="October" />
        <ConferenceMonth month="November" />
        <ConferenceMonth month="December" />
      </div>
    </div>
  );
};

const ConferenceMonth = ({ month }) => {
  return (
    <div className="border rounded  border-gray-400 ">
      <ul>
        {/* Placeholder list of conferences */}
        <li className=' underline'>Conference in {month}</li>
     
        {/* Add more conferences as needed */}
      </ul>
    </div>
  );
};

export default Footer;
