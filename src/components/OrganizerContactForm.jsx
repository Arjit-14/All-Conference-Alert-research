import React, { useState } from 'react';

const OrganizerContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    securityCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div >
      <h2 className="text-lg font-bold mb-4 flex justify-center items-center bg-blue-500 text-white">Organizer Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="attendAs" className="block text-sm font-medium text-gray-700">Attend As:</label>
          <select id="attendAs" name="attendAs" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" onChange={handleChange}>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name:</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone / Whatsapp:</label>
          <input type="text" id="phone" name="phone" className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
          <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea id="message" name="message" className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700">Security Code:</label>
            <input type="text" id="securityCode" name="securityCode" className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" value={formData.securityCode} onChange={handleChange} />
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
          </div>
        </div>
      </form>
      <div className='bg-red-700 my-2 text-white flex  items-center p-2 '>similar events:</div>
      <div className="flex flex-col">
      <div className='flex-row flex'>
        <a  href='https://www.allconferencealert.com/event/377595' className="text-blue-500">5th International Conference on Multidisciplinary Research</a>
        <div className="text-black">22nd May 2024</div>
      </div>
      <hr className="border-t border-gray-300 my-2" />
      <a href='https://www.allconferencealert.com/event/377596'  className='flex-row flex'>
        <div className="text-blue-500">5th World Conference on Applied Science, Engineering and Technology</div>
        <div className="text-black">22nd May 2024</div>
      </a>
      <hr className="border-t border-gray-300 my-2" />
      <a  href='https://www.allconferencealert.com/event/377597'  className='flex-row flex'>
        <div className="text-blue-500">5th International Conference on Green Energy and Environmental Technology</div>
        <div className="text-black">23rd May 2024</div>
      </a>
      <hr className="border-t border-gray-300 my-2" />
      <a  href='https://www.allconferencealert.com/event/377598' className='flex-row flex'>
        <div className="text-blue-500">5th World Conference on Cyber Security and Ethical Hacking</div>
        <div className="text-black">23rd May 2024</div>
      </a>
      <hr className="border-t border-gray-300 my-2" />
      <a  href='https://www.allconferencealert.com/event/377599'  className='flex-row flex'>
        <div className="text-blue-500">5th International Conference on Social Science, Teaching and Learning</div>
        <div className="text-black">24th May 2024</div>
      </a>
      <hr className="border-t border-gray-300 my-2" />
    </div>
    </div>
    
  );
};

export default OrganizerContactForm;
